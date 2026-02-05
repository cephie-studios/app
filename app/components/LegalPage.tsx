'use client';

import { useEffect, useState } from 'react';
import { MdLink } from 'react-icons/md';
import Background from './Background';

interface Subsection {
	title: string;
	content: string;
}

interface LegalSection {
	title: string;
	content?: string;
	subsections?: Subsection[];
}

interface LegalPageProps {
	title: string;
	lastUpdated: string;
	data: LegalSection[];
}

const slugify = (text: string) =>
	text
		.toLowerCase()
		.replace(/[^\w ]+/g, '')
		.replace(/ +/g, '-');

export default function LegalPage({
	title,
	lastUpdated,
	data
}: LegalPageProps) {
	const [activeHash, setActiveHash] = useState('');

	useEffect(() => {
		const handleHashChange = () => {
			setActiveHash(window.location.hash);
			if (window.location.hash) {
				const id = window.location.hash.substring(1);
				const element = document.getElementById(id);
				if (element) {
					setTimeout(() => {
						element.scrollIntoView({
							behavior: 'smooth',
							block: 'start'
						});
					}, 100);
				}
			}
		};

		handleHashChange();
		window.addEventListener('hashchange', handleHashChange);
		return () => window.removeEventListener('hashchange', handleHashChange);
	}, []);

	const copyToClipboard = (id: string) => {
		const url = `${window.location.origin}${window.location.pathname}#${id}`;
		navigator.clipboard.writeText(url);
		window.history.pushState(null, '', `#${id}`);
		setActiveHash(`#${id}`);

		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth', block: 'start' });
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center py-20 px-6 pt-32 text-center border-b border-zinc-200 overflow-hidden">
				<Background />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat">
					{title}
				</h1>
				<p className="mt-4 text-zinc-500 font-montserrat italic">
					Last Updated: {lastUpdated}
				</p>
			</section>

			<section className="flex flex-col py-12 bg-white w-full">
				<div className="space-y-4">
					{data.map((section, index) => {
						const sectionId = slugify(section.title);
						const isHighlighted = activeHash === `#${sectionId}`;

						return (
							<div
								key={index}
								id={sectionId}
								className={`w-full flex justify-center scroll-mt-24 transition-colors duration-500 ${
									isHighlighted ? 'bg-blue-100/50' : ''
								}`}
							>
								<div className="max-w-4xl w-full px-6 py-8 space-y-4 group">
									<div className="flex items-center gap-2">
										<h2 className="text-2xl font-bold text-zinc-900 font-montserrat">
											{section.title}
										</h2>
										<button
											onClick={() =>
												copyToClipboard(sectionId)
											}
											className="opacity-0 group-hover:opacity-100 transition-opacity p-1 text-zinc-400 hover:text-zinc-600"
											title="Copy link to section"
										>
											<MdLink size={18} />
										</button>
									</div>
									{section.content && (
										<p className="text-zinc-600 leading-relaxed">
											{section.content}
										</p>
									)}
									{section.subsections && (
										<div className="pl-6 space-y-6 mt-4 border-l-2 border-zinc-100">
											{section.subsections.map(
												(sub, subIndex) => {
													const subId = slugify(
														`${section.title}-${sub.title}`
													);
													const isSubHighlighted =
														activeHash ===
														`#${subId}`;
													return (
														<div
															key={subIndex}
															id={subId}
															className={`space-y-2 group/sub scroll-mt-24 transition-colors duration-500 p-3 -m-3 rounded-lg ${
																isSubHighlighted
																	? 'bg-blue-100/50'
																	: ''
															}`}
														>
															<div className="flex items-center gap-2">
																<h3 className="text-lg font-semibold text-zinc-800 font-montserrat">
																	{sub.title}
																</h3>
																<button
																	onClick={() =>
																		copyToClipboard(
																			subId
																		)
																	}
																	className="opacity-0 group-hover/sub:opacity-100 transition-opacity p-1 hover:bg-zinc-200/50 rounded text-zinc-400 hover:text-zinc-600"
																	title="Copy link to subsection"
																>
																	<MdLink
																		size={
																			14
																		}
																	/>
																</button>
															</div>
															<p className="text-zinc-600 leading-relaxed">
																{sub.content}
															</p>
														</div>
													);
												}
											)}
										</div>
									)}
								</div>
							</div>
						);
					})}
				</div>
			</section>
		</div>
	);
}
