'use client';

import { Background } from '@cephie-studios/ui';
import Link from 'next/link';

export default function Forbidden() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
			<Background />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					403 - Forbidden
				</h1>
				<p className="text-lg text-zinc-600 font-montserrat">
					You do not have permission to access this page.
				</p>
				<Link
					href="/"
					className="inline-block px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors font-montserrat"
				>
					Return Home
				</Link>
			</div>
		</div>
	);
}
