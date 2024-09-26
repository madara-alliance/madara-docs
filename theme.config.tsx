import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import Image from 'next/image';

const config: DocsThemeConfig = {
  // ... existing configurations,

  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh-CN', text: '中文' }
  ],

	logo: (
		<Image 
			src="/static/img/madara_logomark_red.png"
			style={{
				width: 'auto',
				height: 'auto',
			}}
			width={150}
			height={150} 
			alt={''}		
		/>
	  ),
	project: {
		link: "https://github.com/madara-alliance/madara",
	},
	chat: {
		link: "https://discord.gg/xubb6PNFsb",
	},
	docsRepositoryBase: "https://github.com/madara-alliance/madara-docs",
	footer: {
		text: (
			<span>MIT {new Date().getFullYear()} © Madara - Cairo-Powered Chains</span>
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
	sidebar: {
		defaultMenuCollapseLevel: 1
	  },
};

export default config
