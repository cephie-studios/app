import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://cephie.app';
	const now = new Date();
	const staticRoutes = ['', '/products', '/team', '/apply', '/legal'];
	const legalDocs = ['/terms', '/privacy', '/cookies', '/pfcontrol', '/pfconnect', '/snap'];

	const staticEntries = staticRoutes.map((route) => ({
		url: `${base}${route}`,
		lastModified: now,
		changeFrequency: route === '' ? 'weekly' : 'monthly',
		priority: route === '' ? 1.0 : 0.7
	}));

	const legalEntries = legalDocs.map((slug) => ({
		url: `${base}/legal${slug}`,
		lastModified: now,
		changeFrequency: 'monthly',
		priority: 0.5
	}));

	return [...staticEntries, ...legalEntries] as MetadataRoute.Sitemap;
}
