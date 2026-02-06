export default function Head() {
	const title = 'Legal Information | Cephie Studios';
	const description =
		'Learn about our terms of service, privacy policy, cookies policy, and other important legal information.';
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content="index,follow" />
		</>
	);
}
