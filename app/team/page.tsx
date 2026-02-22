'use client';

import Image from 'next/image';
import { team } from '../data/team';
import { Button } from '@cephie-studios/ui';
import { FaGithub, FaLinkedin, FaGlobe, FaDiscord } from 'react-icons/fa';

export default function Team() {
	return (
		<div className="flex flex-col min-h-screen bg-white pt-24">
			<section className="px-6 py-12 max-w-7xl mx-auto w-full">
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat mb-6">
					Our Team
				</h1>
				<p className="text-lg text-zinc-600 max-w-3xl font-montserrat mb-12">
					We are a small team of passionate developers, designers, and
					aviation enthusiasts. We started Cephie Studios to create
					innovative applications that enhance the aviation experience
					for everyone.
				</p>

				<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
					{team.map((member) => (
						<div
							key={member.name}
							className="flex flex-col p-8 border border-zinc-200 rounded-2xl bg-zinc-100"
						>
							<div className="flex items-center gap-4 mb-6">
								<Image
									src={member.image}
									alt={member.name}
									width={80}
									height={80}
									className="w-16 h-16 rounded-full object-cover shadow-sm"
								/>
								<div>
									<h3 className="text-xl font-bold text-zinc-900 font-montserrat">
										{member.name}
									</h3>
									<p className="text-sm font-medium text-zinc-500 font-montserrat">
										{member.role}
									</p>
								</div>
							</div>
							<p className="text-zinc-600 leading-relaxed font-montserrat mb-6 flex-grow">
								{member.description}
							</p>

							{member.socials && (
								<div className="flex gap-4 mt-auto">
									{member.socials.discord && (
										<a
											href={member.socials.discord}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 hover:text-zinc-900 transition-colors"
											aria-label={`${member.name}'s Discord`}
										>
											<FaDiscord size={20} />
										</a>
									)}
									{member.socials.github && (
										<a
											href={member.socials.github}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 hover:text-zinc-900 transition-colors"
											aria-label={`${member.name}'s GitHub`}
										>
											<FaGithub size={20} />
										</a>
									)}
									{member.socials.linkedin && (
										<a
											href={member.socials.linkedin}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 hover:text-zinc-900 transition-colors"
											aria-label={`${member.name}'s LinkedIn`}
										>
											<FaLinkedin size={20} />
										</a>
									)}
									{member.socials.website && (
										<a
											href={member.socials.website}
											target="_blank"
											rel="noopener noreferrer"
											className="text-zinc-500 hover:text-zinc-900 transition-colors"
											aria-label={`${member.name}'s Website`}
										>
											<FaGlobe size={20} />
										</a>
									)}
								</div>
							)}
						</div>
					))}
				</div>

				<div className="mt-20 p-12 mb-12 bg-zinc-900 rounded-3xl text-white">
					<div className="max-w-3xl">
						<h2 className="text-3xl font-bold font-montserrat mb-4">
							Want to join us?
						</h2>
						<p className="text-zinc-400 text-lg mb-8 font-montserrat">
							We are always looking for talented individuals who
							are passionate about aviation and technology. If you
							think you would be a good fit, we would love to hear
							from you.
						</p>
						<Button variant="secondary" href="/apply">
							Apply to Join
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
