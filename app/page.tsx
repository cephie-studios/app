import Background from './components/Background';
import Button from './components/Button';
import Image from 'next/image';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen bg-white">
			<section className="relative flex flex-col items-center justify-center h-[70vh] max-h-[70vh] px-6 text-center border-b border-zinc-200 overflow-hidden">
				<Background />
				<h1 className="text-4xl tracking-tight text-zinc-900 sm:text-6xl font-montserrat">
					Cephie Studios
				</h1>
				<p className="mt-6 text-lg text-zinc-600 max-w-2xl font-montserrat">
					We create applications and build thriving communities. While
					our expertise is in aviation, we also explore other
					innovative areas.
				</p>
				<div className="mt-10 flex items-center justify-center gap-x-4 z-10">
					<Button variant="primary" href="/products">
						Our Products
					</Button>
					<Button variant="secondary">Join our Discord</Button>
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
					<div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
						<div className="p-6 border border-zinc-200 rounded-lg bg-zinc-50">
							<Image
								src="/assets/people/devbanane.avif"
								alt="devbanane"
								width={64}
								height={64}
								className="w-12 h-12 rounded-full mb-4 object-cover"
							/>
							<h3 className="font-semibold text-zinc-900">
								devbanane
							</h3>
							<p className="mt-2 text-zinc-600">
								Lead Developer and Founder of Cephie Studios,
								passionate about creating innovative solutions
								and a love for aviation.
							</p>
						</div>
						<div className="p-6 border border-zinc-200 rounded-lg bg-zinc-50">
							<Image
								src="/assets/people/linuss.avif"
								alt="Linus"
								width={64}
								height={64}
								className="w-12 h-12 rounded-full mb-4 object-cover"
							/>
							<h3 className="font-semibold text-zinc-900">
								Linus
							</h3>
							<p className="mt-2 text-zinc-600">
								Lead Developer and Community Manager dedicated
								to building strong connections and fostering
								collaboration.
							</p>
						</div>
						<div className="p-6 border border-zinc-200 rounded-lg bg-zinc-50">
							<Image
								src="/assets/people/emanuel.avif"
								alt="Emanuel"
								width={64}
								height={64}
								className="w-12 h-12 rounded-full mb-4 object-cover"
							/>
							<h3 className="font-semibold text-zinc-900">
								Emanuel
							</h3>
							<p className="mt-2 text-zinc-600">
								UI/UX Designer focused on creating intuitive and
								engaging user experiences.
							</p>
						</div>
					</div>
					<Button variant="primary" href="/apply" className="mt-10">
						Apply to Join
					</Button>
				</div>
			</section>

			<section
				id="products"
				className="flex items-center justify-center py-24 px-6 bg-white w-full"
			>
				<div className="max-w-6xl w-full">
					<h2 className="text-3xl text-zinc-900 sm:text-4xl font-montserrat">
						Our flagship project
					</h2>
					<p className="mt-6 text-lg leading-8 text-zinc-600 max-w-5xl">
						Our most successful project yet is PFControl, an ATC
						management Software for Project Flight. It is widely
						used by the community with over 7,500+ registered users
						and 15,000+ flights tracked.
					</p>
					<div className="mt-10">
						<Button variant="primary" href="/products">
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
						<Button variant="primary" href="/legal">
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
							className="bg-white text-zinc-950 hover:bg-zinc-100 w-full sm:w-auto"
						>
							Join our Discord
						</Button>
						<Button
							variant="primary"
							href="/apply"
							className="border border-zinc-800 w-full sm:w-auto"
						>
							Apply to Join
						</Button>
					</div>
				</div>
			</section>
		</div>
	);
}
