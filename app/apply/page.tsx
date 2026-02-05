'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Background from '../components/Background';
import Button from '../components/Button';
import Dropdown from '../components/Dropdown';
import {
	MdSend,
	MdPerson,
	MdWork,
	MdMessage,
	MdEmail,
	MdCode,
	MdHistory
} from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa';

export default function ApplyPage() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		discord: '',
		role: 'Developer',
		languages: '',
		experience: '',
		message: ''
	});
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const router = useRouter();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			const response = await fetch('/api/apply', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(formData)
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || 'Something went wrong');
			}

			setFormData({
				name: '',
				email: '',
				discord: '',
				role: 'Developer',
				languages: '',
				experience: '',
				message: ''
			});
			setSubmitted(true);
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'Failed to submit application'
			);
		} finally {
			setLoading(false);
		}
	};

	const handleChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	if (submitted) {
		return (
			<div className="flex flex-col min-h-screen bg-white">
				<section className="relative flex flex-col items-center justify-center py-32 px-6 text-center overflow-hidden grow">
					<Background />
					<div className="z-10 p-12 rounded-3xl border border-zinc-200 shadow-xl max-w-xl w-full">
						<div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 pl-1.5 text-3xl -rotate-45">
							<MdSend />
						</div>
						<h1 className="text-3xl font-bold text-zinc-900 font-montserrat mb-4">
							Application Received!
						</h1>
						<p className="text-zinc-600 font-montserrat mb-8">
							Thank you for your interest in joining Cephie
							Studios. We&#39;ve received your application and
							will review it shortly. Keep an eye on your Discord
							or Inbox for any updates!
						</p>
						<Button
							variant="primary"
							onClick={() => router.push('/')}
							className="w-full"
						>
							Back to Home
						</Button>
					</div>
				</section>
			</div>
		);
	}

	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center py-20 px-6 pt-32 text-center border-b border-zinc-200 overflow-hidden">
				<Background />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat z-10">
					Join the Team
				</h1>
				<p className="mt-6 text-lg text-zinc-600 font-montserrat max-w-2xl mx-auto z-10">
					We&#39;re always looking for talented individuals to join
					our growing community. Tell us a bit about yourself!
				</p>
			</section>

			<section className="grow pt-12 bg-zinc-50/50">
				<div className="max-w-4xl mx-auto px-6">
					<form
						onSubmit={handleSubmit}
						className="p-8 md:p-12 relative z-10"
					>
						{error && (
							<div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-montserrat">
								{error}
							</div>
						)}
						<div className="space-y-8">
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label
										htmlFor="name"
										className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
									>
										<MdPerson className="mr-2 text-blue-500 w-4 h-4" />
										Full Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										required
										value={formData.name}
										onChange={(e) =>
											handleChange({
												target: {
													name: e.target.name,
													value: e.target.value
												}
											} as React.ChangeEvent<
												| HTMLInputElement
												| HTMLTextAreaElement
												| HTMLSelectElement
											>)
										}
										placeholder="John Doe"
										className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat text-zinc-900 placeholder:text-zinc-400"
									/>
								</div>

								<div className="space-y-2">
									<label
										htmlFor="email"
										className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
									>
										<MdEmail className="mr-2 text-blue-500 w-4 h-4" />
										Email Address
									</label>
									<input
										type="email"
										id="email"
										name="email"
										required
										value={formData.email}
										onChange={(e) =>
											handleChange({
												target: {
													name: e.target.name,
													value: e.target.value
												}
											} as React.ChangeEvent<
												| HTMLInputElement
												| HTMLTextAreaElement
												| HTMLSelectElement
											>)
										}
										placeholder="john@example.com"
										className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat text-zinc-900 placeholder:text-zinc-400"
									/>
								</div>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<div className="space-y-2">
									<label
										htmlFor="discord"
										className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
									>
										<FaDiscord className="mr-2 text-blue-500 w-4 h-4" />
										Discord Username
									</label>
									<input
										type="text"
										id="discord"
										name="discord"
										required
										value={formData.discord}
										onChange={(e) =>
											handleChange({
												target: {
													name: e.target.name,
													value: e.target.value
												}
											} as React.ChangeEvent<
												| HTMLInputElement
												| HTMLTextAreaElement
												| HTMLSelectElement
											>)
										}
										placeholder="username#0000"
										className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat text-zinc-900 placeholder:text-zinc-400"
									/>
								</div>

								<Dropdown
									id="role"
									name="role"
									label="Applying For"
									icon={<MdWork className="w-4 h-4" />}
									required
									value={formData.role}
									onChange={(e) =>
										handleChange({
											target: {
												name: e.target.name || '',
												value: e.target.value
											}
										} as React.ChangeEvent<
											| HTMLInputElement
											| HTMLTextAreaElement
											| HTMLSelectElement
										>)
									}
									options={[
										{
											label: 'Developer',
											value: 'Developer'
										},
										{
											label: 'Support Member',
											value: 'Support Member'
										},
										{
											label: 'Moderator',
											value: 'Moderator'
										},
										{ label: 'Other', value: 'Other' }
									]}
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="languages"
									className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
								>
									<MdCode className="mr-2 text-blue-500 w-4 h-4" />
									Programming Languages / Tools
								</label>
								<input
									type="text"
									id="languages"
									name="languages"
									value={formData.languages}
									onChange={handleChange}
									placeholder="e.g. TypeScript, React, Node.js, Python..."
									className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat text-zinc-900 placeholder:text-zinc-400"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="experience"
									className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
								>
									<MdHistory className="mr-2 text-blue-500 w-4 h-4" />
									Relevant Experience
								</label>
								<textarea
									id="experience"
									name="experience"
									rows={3}
									value={formData.experience}
									onChange={handleChange}
									placeholder="Briefly describe your past work or projects..."
									className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat resize-none text-zinc-900 placeholder:text-zinc-400"
								/>
							</div>

							<div className="space-y-2">
								<label
									htmlFor="message"
									className="flex items-center text-xs font-bold uppercase tracking-wider text-zinc-500 ml-1 font-montserrat"
								>
									<MdMessage className="mr-2 text-blue-500 w-4 h-4" />
									Why do you want to join?
								</label>
								<textarea
									id="message"
									name="message"
									required
									rows={5}
									value={formData.message}
									onChange={handleChange}
									placeholder="Tell us about your experience and motivation..."
									className="w-full px-5 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 focus:bg-white outline-none transition-all font-montserrat resize-none text-zinc-900 placeholder:text-zinc-400"
								/>
							</div>

							<div className="pt-4 pb-12">
								<Button
									type="submit"
									variant="primary"
									disabled={loading}
									className="w-full py-4 rounded-2xl flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
								>
									<MdSend
										className={`w-5 h-5 ${loading ? 'animate-pulse' : ''}`}
									/>
									{loading
										? 'Submitting...'
										: 'Submit Application'}
								</Button>
							</div>
						</div>
					</form>
				</div>
			</section>
		</div>
	);
}
