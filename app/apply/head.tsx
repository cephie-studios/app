export default function Head() {
	const title = 'Join the Team | Cephie Studios';
	const description =
		"We're always looking for talented individuals to join our growing community. Tell us a bit about yourself and apply today.";
	return (
		<>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="robots" content="index,follow" />
		</>
	);
}
