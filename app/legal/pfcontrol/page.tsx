import LegalPage from '@/app/components/LegalPage';
import { data } from '@/app/data/legal/pfcontrol';

export default function PFControlPage() {
	return (
		<LegalPage
			title="PFControl Terms & Policies"
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
