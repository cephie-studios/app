import Link from 'next/link';
import Background from '../components/Background';
import {
	MdDescription,
	MdPrivacyTip,
	MdCookie,
	MdArrowForward
} from 'react-icons/md';

export default function LegalSelectionPage() {
	const legalDocs = [
		{
			title: 'Terms of Use',
			description:
				'Read the terms and conditions for using our services.',
			href: '/legal/terms',
			icon: <MdDescription className="w-8 h-8 text-blue-500" />
		},
		{
			title: 'Privacy Policy',
			description: 'Learn how we collect, use, and protect your data.',
			href: '/legal/privacy',
			icon: <MdPrivacyTip className="w-8 h-8 text-blue-500" />
		},
		{
			title: 'Cookie Policy',
			description:
				'Information about how we use cookies on our websites.',
			href: '/legal/cookies',
			icon: <MdCookie className="w-8 h-8 text-blue-500" />
		},
		{
			title: 'PFControl Terms',
			description: 'Specific terms and policies related to PFControl.',
			href: '/legal/pfcontrol',
			icon: <MdDescription className="w-8 h-8 text-blue-500" />
		},
		{
			title: 'PFConnect Terms',
			description: 'Specific terms and policies related to PFConnect.',
			href: '/legal/pfconnect',
			icon: <MdDescription className="w-8 h-8 text-blue-500" />
		}
	];

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center py-20 px-6 pt-32 text-center border-b border-zinc-200 overflow-hidden">
				<Background />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat">
					Legal Documents
				</h1>
				<p className="mt-6 text-lg text-zinc-600 font-montserrat max-w-2xl mx-auto">
					Select a document below to view our legal agreements and
					policies.
				</p>
			</section>

			<section className="grow py-20 bg-zinc-50/50">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{legalDocs.map((doc) => (
							<Link
								key={doc.href}
								href={doc.href}
								className="group relative flex flex-col p-8 bg-white border border-zinc-200 rounded-3xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
							>
								<div className="mb-6 p-3 bg-blue-50 rounded-2xl w-fit">
									{doc.icon}
								</div>
								<h2 className="text-2xl font-bold text-zinc-900 font-montserrat mb-3">
									{doc.title}
								</h2>
								<p className="text-zinc-600 leading-relaxed font-montserrat mb-8">
									{doc.description}
								</p>
								<div className="mt-auto flex items-center text-blue-600 font-semibold transition-all">
									View Document
									<MdArrowForward className="opacity-0 group-hover:opacity-100 transition-opacity ml-1 w-5 h-5" />
								</div>
							</Link>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
