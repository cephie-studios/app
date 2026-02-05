import LegalPage from '@/app/components/LegalPage';
import { data } from '@/app/data/legal/pfconnect';

export default function PFConnectPage() {
	return (
		<LegalPage
			title="PFConnect Terms & Policies"
			lastUpdated="February 5, 2026"
			data={data}
		/>
	);
}
