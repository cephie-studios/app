export interface TeamMember {
	name: string;
	role: string;
	description: string;
	image: string;
	socials?: {
		discord?: string;
		github?: string;
		linkedin?: string;
		website?: string;
	};
}

export const team: TeamMember[] = [
	{
		name: 'devbanane',
		role: 'Lead Developer and Founder',
		description:
			'Lead Developer and Founder of Cephie Studios, passionate about creating innovative solutions and a love for aviation.',
		image: '/assets/people/devbanane.avif',
		socials: {
			discord: 'https://discord.com/users/798485492621770792',
			github: 'https://github.com/dev-banane',
			website: 'https://devbanane.com'
		},
	},
	{
		name: 'Linus',
		role: 'Lead Developer and Community Manager',
		description:
			'Lead Developer and Community Manager dedicated to building strong connections and fostering collaboration.',
		image: '/assets/people/linuss.avif',
		socials: {
			discord: 'https://discord.com/users/841541609052307458',
			github: 'https://github.com/CoolerMinecraft',
		},
	},
	{
		name: 'Emanuel',
		role: 'UI/UX Designer',
		description:
			'UI/UX Designer focused on creating intuitive and engaging user experiences.',
		image: '/assets/people/emanuel.avif',
		socials: {
			discord: 'https://discord.com/users/1263756486660587543',
			github: 'https://github.com/EELE14',
			website: 'https://eele14.dev'
		},
	},
];
