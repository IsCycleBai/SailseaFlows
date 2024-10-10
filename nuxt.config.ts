// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/ui",
    "@nuxtjs/google-fonts",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/i18n",
  ],
  googleFonts: {
    families: {
      Roboto: [400, 500, 700], // 主字体
      "Noto+Sans+Simplified+Chinese": [700], // 标题字体
    },
  },
  css: ["~/assets/style.css", "~/assets/typography.css"],
  i18n: {
    vueI18n: "./i18n.config.ts",
    locales: [
      { code: "en", file: "en.json", name: "English" },
      { code: "zh", file: "zh.json", name: "Chinese Simplified - 中文（简体）" },
    ],
    lazy: true,
    langDir: "lang/",
    defaultLocale: "en",
    strategy: "prefix_except_default",
  },
});
