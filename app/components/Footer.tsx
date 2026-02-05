import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
	return (
		<footer className="bg-white border-t border-zinc-200">
			<div className="max-w-7xl mx-auto px-6 py-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
					<div>
						<div className="flex items-center mb-4">
							<Image
								src="/assets/icons/cephie-clean.avif"
								alt="Icon"
								width={40}
								height={40}
								className="inline-block mr-1"
							/>
							<h3 className="text-sm font-semibold text-zinc-900 font-montserrat">
								Cephie Studios
							</h3>
						</div>
						<p className="text-sm text-zinc-600 font-montserrat">
							Building tools that empower aviation communities.
						</p>
					</div>

					<div></div>

					<div>
						<h4 className="text-sm font-semibold text-zinc-900 font-montserrat mb-3">
							Company
						</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/products"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Products
								</Link>
							</li>
							<li>
								<Link
									href="/#team"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Team
								</Link>
							</li>
							<li>
								<Link
									href="/apply"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Apply
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-zinc-900 font-montserrat mb-3">
							Legal
						</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<Link
									href="/legal/terms"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Terms of Service
								</Link>
							</li>
							<li>
								<Link
									href="/legal/privacy"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Privacy Policy
								</Link>
							</li>
							<li>
								<Link
									href="/legal/cookies"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Cookie Policy
								</Link>
							</li>
							<li>
								<Link
									href="/legal"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									All Legal
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h4 className="text-sm font-semibold text-zinc-900 font-montserrat mb-3">
							Connect
						</h4>
						<ul className="space-y-2 text-sm">
							<li>
								<a
									href="https://cephie.app/discord"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									Discord
								</a>
							</li>
							<li>
								<a
									href="https://cephie.app/github"
									className="text-zinc-600 hover:text-zinc-900 font-montserrat"
								>
									GitHub
								</a>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-10 pt-6 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-xs text-zinc-500 font-montserrat">
						© {new Date().getFullYear()} Cephie Studios. All rights
						reserved.
					</p>
					<div className="text-xs text-zinc-500 font-montserrat">
						Designed and built by the Cephie Studios.
					</div>
				</div>
			</div>
		</footer>
	);
}
