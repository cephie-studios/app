import LegalPage from '@/app/components/LegalPage';
import { data } from '@/app/data/legal/cookies';

export default function CookiesPage() {
	return (
		<LegalPage
			title="Cookie Policy"
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
