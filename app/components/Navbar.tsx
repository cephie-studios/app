'use client';

import {
	Navbar as NavbarContainer,
	NavbarLeft,
	NavbarRight,
	NavbarRightMobile,
	NavbarActions,
	NavbarBrand,
	NavbarLink,
	NavbarButton
} from 'cephie-ui';

export default function Navbar() {
	return (
		<NavbarContainer mode="light">
			<NavbarLeft>
				<NavbarBrand
					title="Cephie Studios"
					href="/"
					iconLight="/assets/icons/cephie-clean.avif"
					iconDark="/assets/icons/cephie-clean.avif"
				/>
			</NavbarLeft>
			<NavbarRight>
				<NavbarLink href="/products" mode="light">
					Products
				</NavbarLink>
				<NavbarLink href="/team" mode="light">
					Team
				</NavbarLink>
				<NavbarLink href="/legal" mode="light">
					Legal
				</NavbarLink>
				<NavbarActions>
					<NavbarButton mode="light" variant="primary" href="/apply">
						Apply
					</NavbarButton>
					<NavbarButton
						mode="light"
						variant="secondary"
						href="https://cephie.app/discord"
						newTab
					>
						Join Discord
					</NavbarButton>
				</NavbarActions>
			</NavbarRight>
			<NavbarRightMobile>
				<NavbarActions>
					<NavbarButton mode="light" variant="primary" href="/apply">
						Join
					</NavbarButton>
				</NavbarActions>
			</NavbarRightMobile>
		</NavbarContainer>
	);
}
