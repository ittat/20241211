import { Config } from "next-i18n-router/dist/types";

export const supportLanguages = ['en', 'zh','ar','de','es','fr','it','jp','kr','pt']

const i18nConfig:Config = {
  locales: supportLanguages,
  defaultLocale: 'en',
  prefixDefault: true
};

export default  i18nConfig

