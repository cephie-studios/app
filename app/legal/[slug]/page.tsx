import LegalPage from '@/app/components/LegalPage';
import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';

export async function generateStaticParams() {
	const directoryPath = path.join(process.cwd(), 'app/data/legal');
	const files = fs.readdirSync(directoryPath);
	return files
		.filter(file => file.endsWith('.json'))
		.map(file => ({
			slug: file.replace('.json', '')
		}));
}

function getTitle(slug: string) {
	const titles: { [key: string]: string } = {
		cookies: 'Cookie Policy',
		pfconnect: 'PFConnect Terms & Policies',
		pfcontrol: 'PFControl Terms & Policies',
		privacy: 'Privacy Policy',
		snap: 'Cephie Snap',
		terms: 'Terms of Use'
	};
	return titles[slug] || slug.charAt(0).toUpperCase() + slug.slice(1);
}

export default async function LegalDynamicPage({
	params
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const filePath = path.join(process.cwd(), 'app/data/legal', `${slug}.json`);

	if (!fs.existsSync(filePath)) {
		notFound();
	}

	const fileContent = fs.readFileSync(filePath, 'utf8');
	const data = JSON.parse(fileContent);

	return (
		<LegalPage
			title={getTitle(slug)}
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
