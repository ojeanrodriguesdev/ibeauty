'use client';

import { useTranslation } from 'next-i18next';
import { appWithTranslation } from 'next-i18next';
import { LanguageProvider } from '../context/LanguageProvider';
import { metadata } from './metadata';
import './globals.css';

const RootLayout = ({ children }) => {
  const { t } = useTranslation('common');

  return (
    <html lang="de">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content="Im iBeauty Center finden Sie die besten ästhetischen Behandlungen, um Ihre Schönheit zu betonen. Unsere Klinik bietet eine breite Palette von Verfahren an, darunter Permanent Make-Up, Gesichtsverjüngung, Körperbehandlungen und Hautpflege. Vereinbaren Sie eine Beratung für einen individuellen Plan. Erleben Sie modernste Technologie und hochwertige Pflege. Entdecken Sie die beste Version Ihrer selbst!" />
        <link rel="icon" href="/favi.ico" />
      </head>
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
};

export default appWithTranslation(RootLayout);
