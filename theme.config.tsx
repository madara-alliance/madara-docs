import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
	logo: <span>Madara</span>,
	project: {
		link: "https://github.com/keep-starknet-strange/madara",
	},
	chat: {
		link: "https://t.me/MadaraStarknet",
	},
	docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
	footer: {
		text: "Madara - Starknet App Stack",
  },
  primaryHue: 10,
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
