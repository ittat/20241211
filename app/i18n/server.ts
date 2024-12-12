'use server';


import { createIntl } from '@formatjs/intl';

export default async function getIntl(locale: string) {
  const lng = locale ?? "en"
  return createIntl({
    locale: locale,
    messages: (await import(`./locales/${lng}.json`)).default
  });
}