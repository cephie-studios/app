'use client';

import {
	Footer as FooterContainer,
	FooterLinkHeader,
	FooterLink
} from 'cephie-ui';

export default function Footer() {
	return (
		<FooterContainer
			mode="light"
			title="Cephie Studios"
			subtitle="Building tools that empower aviation communities."
			iconLight="/assets/icons/cephie-clean.avif"
			iconDark="/assets/icons/cephie-clean.avif"
			copyright={`© ${new Date().getFullYear()} Cephie Studios. All rights reserved.`}
			bottomRight="Designed and built by Cephie Studios."
		>
			<FooterLinkHeader title="Company">
				<FooterLink href="/products">Products</FooterLink>
				<FooterLink href="/team">Team</FooterLink>
				<FooterLink href="/apply">Apply</FooterLink>
				<FooterLink href="https://dash.cephie.app" newTab>
					Dashboard
				</FooterLink>
			</FooterLinkHeader>
			<FooterLinkHeader title="Legal">
				<FooterLink href="/legal/terms">Terms of Service</FooterLink>
				<FooterLink href="/legal/privacy">Privacy Policy</FooterLink>
				<FooterLink href="/legal/cookies">Cookie Policy</FooterLink>
				<FooterLink href="/legal">All Legal</FooterLink>
			</FooterLinkHeader>
			<FooterLinkHeader title="Connect">
				<FooterLink href="https://cephie.app/discord" newTab>
					Discord
				</FooterLink>
				<FooterLink href="https://cephie.app/github" newTab>
					GitHub
				</FooterLink>
				<FooterLink href="/assets">Assets</FooterLink>
			</FooterLinkHeader>
		</FooterContainer>
	);
}
