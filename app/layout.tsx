import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';
import '@/app/globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Providers from './providers';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin']
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin']
});

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['400', '700', '900']
});

export const metadata: Metadata = {
	title: {
		default: 'Cephie Studios',
		template: '%s | Cephie Studios'
	},
	description:
		'Cephie Studios creates applications and builds thriving communities — with a strong focus on aviation and innovative tools for enthusiasts and organizations.',
	keywords: [
		'Cephie Studios',
		'PFControl',
		'Project Flight',
		'aviation software',
		'ATC management',
		'community tools',
		'Next.js apps'
	],
	authors: [{ name: 'Cephie Studios' }],
	creator: 'Cephie Studios',
	publisher: 'Cephie Studios',
	metadataBase: new URL(
		process.env.NEXT_PUBLIC_SITE_URL || 'https://cephie.app'
	),
	alternates: {
		canonical: '/'
	},
	openGraph: {
		title: 'Cephie Studios',
		description:
			'We create applications and build thriving communities. Our flagship project PFControl powers ATC management for Project Flight.',
		type: 'website',
		url: '/',
		locale: 'en_US',
		siteName: 'Cephie Studios'
	},
	twitter: {
		card: 'summary',
		title: 'Cephie Studios',
		description:
			'We create applications and build thriving communities. Our flagship project PFControl powers ATC management for Project Flight.',
		images: ['/assets/icons/cephie.avif']
	},
	icons: {
		icon: '/favicon.ico'
	},
	robots: {
		index: true,
		follow: true
	},
	other: {
		'google-adsense-account': 'ca-pub-3075420086521736'
	}
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}
			>
				<Providers>
					<Navbar />
					{children}
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
