import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'داکیومنت فارسی OSSIM',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/logo.png',
			  },
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
						{ label: 'OSSIM چیست؟', link: '/introduction/intro' },
						{ label: 'بخش‌ها و اجزا', link: '/introduction/components' },
						{ label: 'نحوه پیاده سازی', link: '/introduction/deployment' },
					],
				},
				{
					label: 'نصب و راه اندازی',
					items: [
						{ label: 'پیش نیازها', link: '/installation/pre-requisites' },
						{ label: 'پیکربندی VirtualBox', link: '/installation/configure-vm' },
						{ label: 'نصب OSSIM Server', link: '/installation/install-ossim-server' },
						{ label: 'نصب OSSIM Sensor', link: '/installation/install-ossim-sensor' },
						{ label: 'نصب Ubuntu Webserver', link: '/installation/install-webserver' },
					],
				},
				{
					label: 'تنظیمات و پیکربندی',
					items: [
						{ label: 'پیکربندی OSSIM Server', link: '/configuration/configure-server' },
						{ label: 'پیکربندی OSSIM Sensor', link: '/configuration/configure-sensor' },
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
