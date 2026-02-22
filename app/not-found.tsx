'use client';

import { Background } from '@cephie-studios/ui';

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
			<Background />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					404 - Page Not Found
				</h1>
				<p className="text-lg text-zinc-600 font-montserrat">
					Sorry, the page you are looking for does not exist.
				</p>
			</div>
		</div>
	);
}
