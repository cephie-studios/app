import { auth } from '@/auth';
import AdminPanel from './AdminPanel';
import AdminLoginForm from './AdminLoginForm';
import fs from 'fs';
import path from 'path';

export default async function AdminPage() {
	const session = await auth();

	if (!session?.user?.isAdmin) {
		return <AdminLoginForm hasSession={!!session} />;
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
