'use client';

import { useEffect } from 'react';
import { Background } from '@cephie-studios/ui';

export default function Error({
	error,
	reset
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	useEffect(() => {
		console.error(error);
	}, [error]);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
			<Background />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					500 - Internal Server Error
				</h1>
				<p className="text-lg text-zinc-600 font-montserrat">
					Something went wrong on our end. Please try again later.
				</p>
				<button
					onClick={() => reset()}
					className="px-4 py-2 bg-zinc-900 text-white rounded-md hover:bg-zinc-800 transition-colors font-montserrat"
				>
					Try again
				</button>
			</div>
		</div>
	);
}
