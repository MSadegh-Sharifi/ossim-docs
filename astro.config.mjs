import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'داکیومنت فارسی OSSIM',
			locales: {
				root: {
				  label: 'فارسی',
				  lang: 'fa-IR',
				  dir: 'rtl'
				},
			  },
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: 'معرفی',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'OSSIM چیست؟', link: '/guides/example/' },
					],
				},
				{
					label: 'نصب و راه اندازی',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'نصب ماشین مجازی', link: '/reference/example/' },
					],
				},
			],
			customCss: [
				'./src/tailwind.css',
				'./src/fonts/font-face.css',
			],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
