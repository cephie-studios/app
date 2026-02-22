import { auth, signIn } from '@/auth';
import AdminPanel from './AdminPanel';
import { Background } from '@cephie-studios/ui';
import { Button } from '@cephie-studios/ui';
import fs from 'fs';
import path from 'path';

export default async function AdminPage() {
	const session = await auth();

	if (!session?.user?.isAdmin) {
		return (
			<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
				<Background />
				<div className="z-10 text-center space-y-6 p-8">
					<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
						Admin Panel
					</h1>
					<p className="text-zinc-600 mb-4">
						{session &&
							'You do not have permission to access this page.'}
					</p>
					<form
						action={async () => {
							'use server';
							await signIn('discord');
						}}
					>
						<Button type="submit">
							{session ? 'Switch Account' : 'Login with Discord'}
						</Button>
					</form>
				</div>
			</div>
		);
	}

	interface LegalSection {
		title: string;
		content: string;
		lastUpdated?: string;
	}

	const legalDir = path.join(process.cwd(), 'app', 'data', 'legal');
	let allLegalData: Record<string, LegalSection[]> = {};

	try {
		const legalFiles = fs
			.readdirSync(legalDir)
			.filter((f) => f.endsWith('.json'));

		for (const file of legalFiles) {
			try {
				const key = file.replace('.json', '');
				const content = fs.readFileSync(
					path.join(legalDir, file),
					'utf8'
				);
				allLegalData[key] = JSON.parse(content) as LegalSection[];
			} catch (error) {
				console.error(`Error processing file ${file}:`, error);
			}
		}
	} catch (error) {
		console.error('Error reading legal directory:', error);
		allLegalData = {};
	}

	return <AdminPanel user={session.user} initialData={allLegalData} />;
}
