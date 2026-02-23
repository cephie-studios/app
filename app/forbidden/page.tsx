'use client';

import { Background, Button } from 'cephie-ui';

export default function Forbidden() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
			<Background mode="light" />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					403 - Forbidden
				</h1>
				<p className="text-lg text-zinc-600 font-montserrat">
					You do not have permission to access this page.
				</p>
				<Button mode="light" variant="primary" href="/">
					Return Home
				</Button>
			</div>
		</div>
	);
}
