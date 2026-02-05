import React from 'react';

const variantClasses: Record<
	'primary' | 'secondary' | 'success' | 'danger',
	string
> = {
	primary:
		'bg-zinc-950 text-white hover:bg-zinc-800 focus-visible:outline-zinc-900',
	secondary:
		'bg-zinc-200 text-zinc-900 hover:bg-zinc-300 focus-visible:outline-zinc-400',
	success:
		'bg-green-600 text-white hover:bg-green-700 focus-visible:outline-green-800',
	danger: 'bg-red-600 text-white hover:bg-red-700 focus-visible:outline-red-800'
};

export default function Button({
	variant = 'primary',
	href,
	newTab = false,
	className = '',
	style = {},
	children,
	...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'success' | 'danger';
	href?: string;
	newTab?: boolean;
}) {
	return (
		<a
			href={href}
			target={newTab ? '_blank' : '_self'}
			rel="noopener noreferrer"
		>
			<button
				className={`rounded-2xl px-6 py-3 text-sm font-semibold shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors duration-200 ${variantClasses[variant]} ${className}`}
				style={style}
				{...props}
			>
				{children}
			</button>
		</a>
	);
}
