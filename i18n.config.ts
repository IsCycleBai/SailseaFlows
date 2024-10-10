export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  locales: [
    { code: "en", file: "en.json", name: "English" },
    { code: "zh", file: "zh.json", name: "中文（简体）" },
  ],
  lazy: true,
  langDir: "lang/",
  defaultLocale: "en",
  strategy: "prefix_except_default",
  fallbackLocale: 'en',
}));
