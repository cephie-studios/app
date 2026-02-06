import { auth, signIn } from '@/auth';
import AdminPanel from './AdminPanel';
import Background from '../components/Background';
import Button from '../components/Button';
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
						{session ? "You do not have permission to access this page." : "Please login to access the admin panel."}
					</p>
					<form
						action={async () => {
							'use server';
							await signIn('discord');
						}}
					>
						<Button
							type="submit"
							className="px-8 py-3 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-lg font-semibold transition-colors shadow-lg"
						>
							{session ? "Switch Account" : "Login with Discord"}
						</Button>
					</form>
				</div>
			</div>
		);
	}

	const legalDir = path.join(process.cwd(), 'app', 'data', 'legal');
	const legalFiles = fs
		.readdirSync(legalDir)
		.filter((f) => f.endsWith('.json'));

	const allLegalData: Record<string, Record<string, unknown>> = {};
	legalFiles.forEach((file) => {
		const key = file.replace('.json', '');
		const content = fs.readFileSync(path.join(legalDir, file), 'utf8');
		allLegalData[key] = JSON.parse(content) as Record<string, unknown>;
	});

	return <AdminPanel user={session.user} initialData={allLegalData} />;
}
