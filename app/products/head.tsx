export default function Head() {
	const title = 'Our Products | Cephie Studios';
	const description =
		"Discover the tools and applications we've built to enhance the aviation experience and empower communities.";
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content="index,follow" />
		</>
	);
}
