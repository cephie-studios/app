import { NextResponse } from 'next/server';

export async function POST(req: Request) {
	try {
		const body = await req.json();
		const { name, email, discord, role, languages, experience, message } = body;

		const webhookUrl = process.env.WEBHOOK_APPLICATIONS;

		if (!webhookUrl) {
			console.error('WEBHOOK_APPLICATIONS is not defined');
			return NextResponse.json(
				{ error: 'Webhook configuration error' },
				{ status: 500 }
			);
		}

		const embed = {
			title: 'New Team Application',
			color: 0x3b82f6,
			fields: [
				{
					name: 'Full Name',
					value: name || 'N/A',
					inline: true
				},
				{
					name: 'Email Address',
					value: email || 'N/A',
					inline: true
				},
				{
					name: 'Discord Username',
					value: discord || 'N/A',
					inline: true
				},
				{
					name: 'Role Applied For',
					value: role || 'N/A',
					inline: true
				},
				{
					name: 'Languages / Tools',
					value: languages || 'N/A'
				},
				{
					name: 'Relevant Experience',
					value: experience || 'N/A'
				},
				{
					name: 'Motivation',
					value: message || 'No message provided'
				}
			],
			timestamp: new Date().toISOString(),
			footer: {
				text: 'Cephie Studios Applications'
			}
		};

		const response = await fetch(webhookUrl, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				embeds: [embed]
			})
		});

		if (!response.ok) {
			const errorText = await response.text();
			console.error('Discord Webhook Error:', errorText);
			return NextResponse.json(
				{ error: 'Failed to send to Discord' },
				{ status: response.status }
			);
		}

		return NextResponse.json({ success: true });
	} catch (error) {
		console.error('Application submission error:', error);
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		);
	}
}
