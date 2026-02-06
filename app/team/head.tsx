export default function Head() {
	const title = 'Our Team | Cephie Studios';
	const description =
		'Meet the people behind Cephie Studios — developers, designers, and aviation enthusiasts building innovative applications.';
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content="index,follow" />
		</>
	);
}
