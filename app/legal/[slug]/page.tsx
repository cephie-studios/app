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

const LAST_UPDATED_BY_SLUG: { [key: string]: string } = {
	cookies: 'February 5, 2026',
	pfconnect: 'February 5, 2026',
	pfcontrol: 'February 5, 2026',
	privacy: 'February 5, 2026',
	snap: 'February 26, 2026',
	terms: 'February 5, 2026'
};

const DEFAULT_LAST_UPDATED = 'February 5, 2026';

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

	const lastUpdated = LAST_UPDATED_BY_SLUG[slug] ?? DEFAULT_LAST_UPDATED;

	return (
		<LegalPage
			title={getTitle(slug)}
			lastUpdated={lastUpdated}
			data={data}
		/>
	);
}
