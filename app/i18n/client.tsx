
'use client';

import { PropsWithChildren } from 'react';
import { IntlProvider, MessageFormatElement } from 'react-intl';

export default function ServerIntlProvider(props: PropsWithChildren<{ messages:Record<string, string>|Record<string, MessageFormatElement[]>, locale:string }>) {
    const { children, messages, locale } = props;
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}