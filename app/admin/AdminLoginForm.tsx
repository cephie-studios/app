'use client';

import { signIn } from 'next-auth/react';
import { Background, Button } from 'cephie-ui';

export default function AdminLoginForm({
	hasSession
}: {
	hasSession: boolean;
}) {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white relative overflow-hidden">
			<Background mode="light" />
			<div className="z-10 text-center space-y-6 p-8">
				<h1 className="text-3xl font-bold text-zinc-900 font-montserrat">
					Admin Panel
				</h1>
				<p className="text-zinc-600 mb-4">
					{hasSession
						? 'You do not have permission to access this page.'
						: 'Sign in to continue.'}
				</p>
				<Button
					mode="light"
					variant="primary"
					type="button"
					onClick={() => signIn('discord')}
				>
					{hasSession ? 'Switch Account' : 'Login with Discord'}
				</Button>
			</div>
		</div>
	);
}
