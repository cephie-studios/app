'use client';

import { useEffect } from 'react';
import { Background, Button } from 'cephie-ui';

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
			<Background mode="light" />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					500 - Internal Server Error
				</h1>
				<p className="text-lg text-zinc-600 font-montserrat">
					Something went wrong on our end. Please try again later.
				</p>
				<Button mode="light" variant="primary" onClick={() => reset()}>
					Try again
				</Button>
			</div>
		</div>
	);
}
