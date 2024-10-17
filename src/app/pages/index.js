
'use client';

import '../globals.css';
import { LanguageProvider } from '../../context/LanguageProvider';
import { appWithTranslation } from 'next-i18next';
import { useTranslation } from 'react-i18next';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
      <title>iBeauty Center</title>
        <meta name="description" content={t('description.website')} />
        <link rel="icon" href="/favi.ico" />
      </Head>
      <LanguageProvider>
        <Component {...pageProps} />
      </LanguageProvider>
    </>
  );
}

export default appWithTranslation(MyApp);
