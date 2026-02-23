'use client';

import { Background } from 'cephie-ui';
import { Button } from 'cephie-ui';
import { products } from './data/products';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center h-[70vh] max-h-[70vh] px-6 text-center border-b border-zinc-200 overflow-hidden">
				<Background mode="light" />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat">
					Cephie Studios
				</h1>
				<p className="mt-6 text-lg text-zinc-600 max-w-2xl font-montserrat">
					We create applications and build thriving communities. While
					our expertise is in aviation, we also explore other
					innovative areas.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-4 z-10">
					<Button mode="light" variant="primary" href="/products">
						Our Products
					</Button>
					<Button
						mode="light"
						variant="secondary"
						href="https://cephie.app/discord"
						newTab
					>
						Join our Discord
					</Button>
				</div>
			</section>

			<section
				id="dashboard"
				className="flex items-center justify-center py-24 px-6 bg-white w-full"
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl text-zinc-900 sm:text-4xl font-montserrat">
						Manage the PFConnect Bot
					</h2>
					<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-5xl">
						Manage your virtual airline with ease using our
						comprehensive dashboard. Track flights, manage your
						staff and send welcome messages, all in one place. Join
						hundreds of virtual airlines already using PFConnect to
						streamline their operations and engage their community.
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Button
							mode="light"
							variant="primary"
							href="https://dash.cephie.app"
							newTab
						>
							Dashboard
						</Button>
					</div>
				</div>
			</section>

			<section
				id="team"
				className="flex items-center justify-center py-24 px-6 bg-white w-full"
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl text-zinc-900 sm:text-4xl font-montserrat">
						Who we are
					</h2>
					<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-5xl">
						We are a small team of passionate developers and
						aviation enthusiasts. We started Cephie Studios to
						create innovative applications that enhance the aviation
						experience for everyone.
					</p>
					<div className="mt-10 flex flex-wrap gap-4">
						<Button mode="light" variant="primary" href="/team">
							Meet the Team
						</Button>
						<Button mode="light" variant="secondary" href="/apply">
							Apply to Join
						</Button>
					</div>
				</div>
			</section>

			<section
				id="products"
				className="flex items-center justify-center py-24 px-6 bg-white w-full"
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl text-zinc-900 sm:text-4xl font-montserrat">
						Our projects
					</h2>
					<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-5xl">
						Our most successful project yet is PFControl, an ATC
						management Software for Project Flight. It is widely
						used by the community with over 7,500+ registered users
						and 15,000+ flights tracked.
					</p>
					<div></div>
					<div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
						{products.slice(0, 3).map((product) => (
							<div
								key={product.id}
								className="p-6 bg-zinc-100 border border-zinc-200 rounded-lg"
							>
								<h3 className="text-xl font-semibold text-zinc-900 font-montserrat">
									{product.name}
								</h3>
								<p className="mt-3 text-zinc-600">
									{product.description}
								</p>
							</div>
						))}
					</div>
					<div className="mt-10">
						<Button mode="light" variant="primary" href="/products">
							View all Products
						</Button>
					</div>
				</div>
			</section>

			<section
				id="legal"
				className="flex items-center justify-center py-24 px-6 bg-white w-full"
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl text-zinc-900 sm:text-4xl font-montserrat">
						Legal Information
					</h2>
					<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-5xl">
						Transparency and trust are at the core of what we do.
						Visit our legal page to learn more about our terms of
						service, privacy policy, and other important
						information.
					</p>
					<div className="mt-10">
						<Button mode="light" variant="primary" href="/legal">
							View Legal Information
						</Button>
					</div>
				</div>
			</section>

			<section className="relative py-24 px-6 bg-zinc-950 text-white overflow-hidden">
				<div className="max-w-6xl mx-auto relative z-10">
					<h2 className="text-3xl font-bold font-montserrat mb-6">
						Have an idea for a product?
					</h2>
					<p className="text-zinc-400 text-lg mb-10 font-montserrat max-w-2xl">
						We are always looking for new projects and
						collaborations. If you have a vision for a tool that can
						help the community, let&#39;s build it together.
					</p>
					<div className="flex flex-col sm:flex-row items-center gap-4">
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
