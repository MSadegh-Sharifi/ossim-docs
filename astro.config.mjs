import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'آموزش AlienVault OSSIM',
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
				github: 'https://github.com/MSadegh-Sharifi/ossim-docs',
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
						{ label: 'نصب Kali Linux', link: '/installation/install-kali' },
					],
				},
				{
					label: 'تنظیمات و پیکربندی',
					items: [
						{ label: 'پیکربندی OSSIM Server', link: '/configuration/configure-server' },
						{ label: 'پیکربندی OSSIM Sensor', link: '/configuration/configure-sensor' },
						{ label: 'پیکربندی Ubuntu Webserver', link: '/configuration/configure-webserver' },
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
