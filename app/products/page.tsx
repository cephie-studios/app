'use client';

import { Background } from 'cephie-ui';
import { Button } from 'cephie-ui';
import { products } from '../data/products';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProductsPage() {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center py-20 px-6 pt-32 text-center border-b border-zinc-200 overflow-hidden">
				<Background mode="light" />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat z-10">
					Our Products
				</h1>
				<p className="mt-6 text-lg text-zinc-600 font-montserrat max-w-2xl mx-auto z-10">
					Discover the tools and applications we&#39;ve built to
					enhance the aviation experience and empower communities.
				</p>
			</section>

			<section className="py-24 px-6 bg-white">
				<div className="max-w-7xl mx-auto">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{products.map((product) => (
							<div
								key={product.id}
								className="flex flex-col p-8 rounded-3xl border border-zinc-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
							>
								<div className="flex items-start justify-between mb-6">
									<div className="p-3 bg-zinc-100 rounded-2xl text-zinc-900 text-2xl">
										<product.icon />
									</div>
									<span
										className={`px-3 py-1 rounded-full text-xs font-medium ${
											product.status === 'Operational'
												? 'bg-green-100 text-green-700'
												: product.status ===
													  'Development'
													? 'bg-blue-100 text-blue-700'
													: 'bg-yellow-100 text-yellow-700'
										}`}
									>
										{product.status}
									</span>
								</div>

								<h2 className="text-2xl font-bold text-zinc-900 font-montserrat mb-3">
									{product.name}
								</h2>
								<p className="text-zinc-600 font-montserrat mb-6 grow">
									{product.fullDescription}
								</p>

								<div className="flex items-center gap-4">
									<Button
										mode="light"
										variant="primary"
										href={product.link}
										newTab
										className="flex items-center gap-2"
									>
										<FaExternalLinkAlt className="text-xs" />
										Visit Site
									</Button>
									{product.github && (
										<Button
											mode="light"
											variant="secondary"
											href={product.github}
											newTab
											className="flex items-center gap-2"
										>
											<FaGithub size={16} />
											GitHub
										</Button>
									)}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="relative py-24 px-6 bg-zinc-950 text-white overflow-hidden">
				<div className="max-w-4xl mx-auto text-center relative z-10">
					<h2 className="text-3xl font-bold font-montserrat mb-6">
						Have an idea for a product?
					</h2>
					<p className="text-zinc-400 text-lg mb-10 font-montserrat">
						We are always looking for new projects and
						collaborations. If you have a vision for a tool that can
						help the community, let&#39;s build it together.
					</p>
					<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
						<Button
							variant="secondary"
							href="https://cephie.app/discord"
							newTab
							className="w-full sm:w-auto"
						>
							Join our Discord
						</Button>
						<Button
							variant="primary"
							href="/apply"
							className="w-full sm:w-auto"
						>
							Apply to Join
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
