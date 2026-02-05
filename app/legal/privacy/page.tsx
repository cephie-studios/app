import LegalPage from '@/app/components/LegalPage';
import { data } from '@/app/data/legal/privacy';

export default function PrivacyPage() {
	return (
		<LegalPage
			title="Privacy Policy"
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
