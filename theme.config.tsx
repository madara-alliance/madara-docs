import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';

const config: DocsThemeConfig = {
	logo: <span>Madara</span>,
	project: {
		link: "https://github.com/keep-starknet-strange/madara",
	},
	chat: {
		link: "https://t.me/MadaraStarknet",
	},
	docsRepositoryBase: "https://github.com/EvolveArt/madara-docs",
	footer: {
		text: (
			<span>MIT {new Date().getFullYear()} © Madara - Starknet App Stack</span>
		),
	},
	editLink: {
		text: (
			<span>Contribute to Madara | Edit on GitHub</span>
		),
	},
	primaryHue: 10,
	useNextSeoProps() {
		const { asPath } = useRouter();
		if (asPath !== "/") {
			return {
				titleTemplate: "%s",
			};
		}
	},
	themeSwitch: {
		useOptions() {
			return {
				light: "Light",
				dark: "Dark",
				system: "System",
			};
		},
	},
};

export default config
