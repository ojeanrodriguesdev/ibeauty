"use client"

import { createContext, useContext, useState, useEffect } from 'react';
import { IntlProvider } from 'react-intl';
import enMessages from '../../public/locales/en/messages.json';
import ptMessages from '../../public/locales/pt/messages.json';
import deMessages from '../../public/locales/de/messages.json';

const messages = {
  en: enMessages,
  pt: ptMessages,
  de: deMessages,
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState('de');

  useEffect(() => {
    const storedLocale = localStorage.getItem('locale');
    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const switchLanguage = (newLocale) => {
    setLocale(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  return (
    <LanguageContext.Provider value={{ locale, switchLanguage }}>
      <IntlProvider locale={locale} messages={messages[locale]}>
        {children}
      </IntlProvider>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
