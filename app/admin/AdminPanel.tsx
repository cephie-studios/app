'use client';

import { useState, useEffect } from 'react';
import { MdAdd, MdDelete, MdSave, MdLogout } from 'react-icons/md';
import { signOut } from 'next-auth/react';
import Button from '../components/Button';

interface Subsection {
	title: string;
	content: string;
}

interface LegalSection {
	title: string;
	content?: string;
	subsections?: Subsection[];
}

export default function AdminPanel({ user, initialData }: { user: { name?: string | null, email?: string | null, image?: string | null }, initialData: Record<string, LegalSection[]> }) {
	const [activeTab, setActiveTab] = useState<string>(Object.keys(initialData)[0] || 'terms');
	const [data, setData] = useState<LegalSection[]>([]);
	const [isSaving, setIsSaving] = useState(false);
	const [message, setMessage] = useState<{
		type: 'success' | 'error';
		text: string;
	} | null>(null);

	useEffect(() => {
		if (initialData[activeTab]) {
			setData(initialData[activeTab]);
		}
	}, [activeTab, initialData]);

	const handleSave = async () => {
		setIsSaving(true);
		setMessage(null);
		try {
			const response = await fetch('/api/admin/legal', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ type: activeTab, data })
			});

			if (response.ok) {
				setMessage({ type: 'success', text: 'Saved successfully!' });
			} else {
				setMessage({ type: 'error', text: 'Failed to save.' });
			}
		} catch (error) {
			setMessage({
				type: 'error',
				text: 'An error occurred while saving.'
			});
		}
		setIsSaving(false);
	};

	const updateSection = (
		index: number,
		field: keyof LegalSection,
		value: string | Subsection[]
	) => {
		const newData = [...data];
		newData[index] = { ...newData[index], [field]: value };
		setData(newData);
	};

	const addSection = (index?: number) => {
		const newSection = { title: 'New Section', content: '' };
		if (typeof index === 'number') {
			const newData = [...data];
			newData.splice(index, 0, newSection);
			setData(newData);
		} else {
			setData([...data, newSection]);
		}
	};

	const removeSection = (index: number) => {
		setData(data.filter((_, i) => i !== index));
	};

	const addSubsection = (sectionIndex: number) => {
		const newData = [...data];
		const section = newData[sectionIndex];
		if (!section.subsections) section.subsections = [];
		section.subsections.push({ title: 'New Subsection', content: '' });
		setData(newData);
	};

	const updateSubsection = (
		sectionIndex: number,
		subIndex: number,
		field: keyof Subsection,
		value: string
	) => {
		const newData = [...data];
		const subsections = [...(newData[sectionIndex].subsections || [])];
		subsections[subIndex] = { ...subsections[subIndex], [field]: value };
		newData[sectionIndex].subsections = subsections;
		setData(newData);
	};

	const removeSubsection = (sectionIndex: number, subIndex: number) => {
		const newData = [...data];
		newData[sectionIndex].subsections = newData[
			sectionIndex
		].subsections?.filter((_, i) => i !== subIndex);
		setData(newData);
	};

	return (
		<div className="min-h-screen bg-zinc-50 pt-24 pb-12 px-6">
			<div className="max-w-6xl mx-auto space-y-8">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
							Admin Panel
						</h1>
						<p className="text-zinc-500">
							Logged in as{' '}
							{user?.name || user?.email || 'Unknown User'}
						</p>
					</div>
					<div className="flex gap-4">
						<Button
							variant="secondary"
							onClick={() => signOut()}
							className="flex items-center gap-2"
						>
							<MdLogout /> Logout
						</Button>
						<Button
							variant="primary"
							onClick={handleSave}
							disabled={isSaving}
							className="flex items-center gap-2"
						>
							<MdSave /> {isSaving ? 'Saving...' : 'Save Changes'}
						</Button>
					</div>
				</div>

				{message && (
					<div
						className={`p-4 rounded-lg ${message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
					>
						{message.text}
					</div>
				)}

				<div className="flex border-b border-zinc-200 overflow-x-auto">
					{Object.keys(initialData).sort().map(tab => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`px-6 py-3 font-semibold transition-colors border-b-2 whitespace-nowrap capitalize ${activeTab === tab ? 'border-blue-600 text-blue-600' : 'border-transparent text-zinc-500 hover:text-zinc-700'}`}
						>
							{tab.replace(/-/g, ' ')}
						</button>
					))}
				</div>

				<div className="space-y-6">
					<button
						onClick={() => addSection(0)}
						className="w-full py-2 border border-dashed border-zinc-300 rounded-lg text-zinc-500 hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center gap-2 font-medium text-sm"
					>
						<MdAdd /> Add Section Here
					</button>

					{data.map((section, idx) => (
						<div key={idx} className="space-y-6">
							<div
								className="bg-white p-6 rounded-xl border border-zinc-200 shadow-sm space-y-4"
							>
								<div className="flex justify-between gap-4">
									<input
										value={section.title}
										onChange={(e) =>
											updateSection(
												idx,
												'title',
												e.target.value
											)
										}
										className="text-xl font-bold w-full bg-zinc-50 px-3 py-2 rounded border border-zinc-100 focus:outline-none focus:border-blue-300"
										placeholder="Section Title"
									/>
									<button
										onClick={() => removeSection(idx)}
										className="text-red-500 hover:bg-red-50 p-2 rounded transition-colors"
									>
										<MdDelete size={20} />
									</button>
								</div>

								<textarea
									value={section.content || ''}
									onChange={(e) =>
										updateSection(
											idx,
											'content',
											e.target.value
										)
									}
									className="w-full h-32 bg-zinc-50 px-3 py-2 rounded border border-zinc-100 focus:outline-none focus:border-blue-300 resize-none text-zinc-600"
									placeholder="Section Content"
								/>

								<div className="pl-8 space-y-4 border-l-2 border-zinc-100">
									{section.subsections?.map((sub, subIdx) => (
										<div
											key={subIdx}
											className="space-y-2 p-4 bg-zinc-50/50 rounded-lg border border-zinc-100 relative"
										>
											<button
												onClick={() =>
													removeSubsection(
														idx,
														subIdx
													)
												}
												className="absolute top-2 right-2 text-red-400 hover:text-red-600 transition-colors"
											>
												<MdDelete size={16} />
											</button>
											<input
												value={sub.title}
												onChange={(e) =>
													updateSubsection(
														idx,
														subIdx,
														'title',
														e.target.value
													)
												}
												className="text-lg font-semibold w-full bg-transparent border-b border-transparent focus:border-blue-200 focus:outline-none"
												placeholder="Subsection Title"
											/>
											<textarea
												value={sub.content}
												onChange={(e) =>
													updateSubsection(
														idx,
														subIdx,
														'content',
														e.target.value
													)
												}
												className="w-full h-20 bg-transparent resize-none text-zinc-600 focus:outline-none"
												placeholder="Subsection Content"
											/>
										</div>
									))}
									<button
										onClick={() => addSubsection(idx)}
										className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-700 font-medium"
									>
										<MdAdd /> Add Subsection
									</button>
								</div>
							</div>

							<button
								onClick={() => addSection(idx + 1)}
								className="w-full py-2 border border-dashed border-zinc-300 rounded-lg text-zinc-500 hover:border-blue-400 hover:text-blue-500 transition-all flex items-center justify-center gap-2 font-medium text-sm"
							>
								<MdAdd /> Add Section Here
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
