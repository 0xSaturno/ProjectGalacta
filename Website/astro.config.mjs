// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://0xsaturno.github.io',
	base: '/ProjectGalacta',
	integrations: [
		starlight({
			title: 'PROJECT GALACTA',
			description: 'Documentation and technical breakdowns for the Project Galacta mod system.',
			favicon: '/favicon.ico',
			logo: {
				src: './src/assets/logo.png',
				alt: 'Project Galacta',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/0xSaturno/ProjectGalacta' }],
			customCss: ['./src/styles/custom.css'],
			components: {
				Hero: './src/components/Hero.astro',
				PageTitle: './src/components/PageTitle.astro',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Getting Started', slug: 'docs/getting-started' },
						{ label: 'Mod Loader', slug: 'docs/mod-loader' },
						{ label: 'Skin Swapping', slug: 'docs/skin-swapping' },
						{ label: 'Companion App', slug: 'docs/companion-app' },
					],
				},
				{
					label: 'Technical',
					items: [
						{ label: 'Architecture', slug: 'technical/architecture' },
						{ label: 'Changelog', slug: 'technical/changelog' },
					],
				},
				{
					label: 'FAQ',
					slug: 'faq',
				},
				{
					label: 'Known Issues',
					slug: 'known-issues',
				},
				{
					label: 'Future Plans',
					slug: 'future-plans',
				},
			],
		}),
	],
});
