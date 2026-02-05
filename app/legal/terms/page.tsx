import LegalPage from '@/app/components/LegalPage';
import { data } from '@/app/data/legal/terms';

export default function TermsPage() {
	return (
		<LegalPage
			title="Terms of Use"
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
