'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from './Button';

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 20) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<nav
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? 'bg-white backdrop-blur-md border-b border-zinc-200 py-0'
					: 'bg-transparent border-b border-transparent py-2'
			}`}
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="flex items-center">
						<Image
							src="/assets/icons/cephie-clean.avif"
							alt="Icon"
							width={44}
							height={44}
							className="inline-block mr-1"
						/>
						<Link
							href="/"
							className="text-xl font-bold text-zinc-900 font-montserrat tracking-tight"
						>
							Cephie Studios
						</Link>
					</div>
					<div className="hidden md:flex items-center space-x-8">
						<Link
							href="/products"
							className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
						>
							Products
						</Link>
						<Link
							href="/team"
							className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
						>
							Team
						</Link>
						<Link
							href="/legal"
							className="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
						>
							Legal
						</Link>
						<div className="flex gap-2">
							<Button
								variant="primary"
								href="/apply"
								className="px-4! py-2! rounded-xl! text-xs!"
							>
								Apply
							</Button>
							<Button
								variant="secondary"
								className="px-4! py-2! rounded-xl! text-xs!"
							>
								Join Discord
							</Button>
						</div>
					</div>
					<div className="md:hidden flex items-center">
						<Button
							variant="primary"
							href="/apply"
							className="px-4! py-2! rounded-xl! text-xs!"
						>
							Join
						</Button>
					</div>
				</div>
			</div>
		</nav>
	);
}
