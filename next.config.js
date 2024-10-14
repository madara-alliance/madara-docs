const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
});

module.exports = withNextra({
  i18n: {
    locales: ["en", "zh-CN"],
    defaultLocale: "en",
  },
  async redirects() {
    return [
      {
        source: "/launcher.sh",
        destination:
          "https://raw.githubusercontent.com/madara-alliance/madara/refs/heads/main/scripts/launcher",
        permanent: false,
      },
    ];
  },
});
