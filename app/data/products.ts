import { MdAirplaneTicket } from 'react-icons/md';
import { FaGlobeAmericas, FaBroadcastTower } from 'react-icons/fa';
import { IconType } from 'react-icons';
import { BsBoxes } from 'react-icons/bs';
import { ImFilePicture } from 'react-icons/im';

export interface Product {
	id: string;
	name: string;
	description: string;
	fullDescription: string;
	icon: IconType;
	link?: string;
	github?: string;
	status: 'Operational' | 'Maintenance' | 'Development';
}

export const products: Product[] = [
	{
		id: 'pfcontrol',
		name: 'PFControl',
		description: 'ATC management software for Project Flight.',
		fullDescription: 'PFControl is our flagship project, providing a comprehensive suite of tools for air traffic controllers in Project Flight. With over 7,500+ registered users, it features real-time flight tracking, integrated voice chat, and detailed user statistics.',
		icon: FaBroadcastTower,
		link: 'https://pfcontrol.com',
		github: 'https://github.com/PFConnect/pfcontrol-2',
		status: 'Operational'
	},
	{
		id: 'cephie-snap',
		name: 'Cephie Snap',
		description: 'Rapid image sharing made simple.\nUpload a picture and get an instant, permanent URL.',
		fullDescription: 'Cephie Snap is a free image hosting service that allows users to upload images and receive a permanent URL for sharing. It supports various image formats and provides a simple interface for quick uploads, making it ideal for sharing screenshots, artwork, and other images within the community.',
		icon: ImFilePicture,
		link: 'https://snap.cephie.app/',
		status: 'Operational'
	},
	{
		id: 'pfconnect-bot',
		name: 'PFConnect Bot',
		description: 'Discord bot for virtual airline management.',
		fullDescription: 'The PFConnect Bot was our first project, designed to help virtual airlines manage their operations through Discord. It offers features like flight logging, user role management and a ticketing system, making it an essential tool for virtual aviation communities.',
		icon: FaGlobeAmericas,
		link: 'https://cephie.app/discord',
		status: 'Operational'
	},
	{
		id: 'pfconnect-dashboard',
		name: 'PFConnect Bot Dashboard',
		description: 'Dashboard for managing PFConnect Bot settings.',
		fullDescription: 'The PFConnect Bot Dashboard is a web-based interface that allows administrators to manage their virtual airline\'s PFConnect Bot settings, view ticket transcript, and send automatic welcome messages to new users.',
		icon: BsBoxes,
		link: 'https://cephie.app/discord',
		status: 'Operational'
	},
	{
		id: 'pfconnect-api',
		name: 'PFConnect API',
		description: 'Secure, robust API for integrating PFConnect data and features into your own apps and tools.',
		fullDescription: 'A secure and centralized identity provider that allows users to access all Cephie Studios products with a single account, featuring OAuth2 support and multi-factor authentication.',
		icon: MdAirplaneTicket,
		link: 'https://pfconnect-api.cephie.app',
		status: 'Operational'
	}
];
