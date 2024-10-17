'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../../context/LanguageProvider';
import { Menu } from '@headlessui/react';
import ReactCountryFlag from 'react-country-flag';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const LanguageSwitcher = () => {
  const { locale, switchLanguage } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const languages = [
    { code: 'de', label: 'DE', flag: 'DE' },
    { code: 'pt', label: 'PT', flag: 'BR' },
    { code: 'en', label: 'EN', flag: 'US' },
  ];

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button 
        className="flex items-center space-x-2"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="w-8 h-8 overflow-hidden rounded-full">
          <ReactCountryFlag countryCode={languages.find(lang => lang.code === locale)?.flag || 'US'} svg />
        </div>
        <motion.div
          animate={{ rotate: menuOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-[#DDC77E]"
        >
          <FaChevronDown size={12} />
        </motion.div>
      </Menu.Button>
      <AnimatePresence>
        {menuOpen && (
          <Menu.Items 
            as={motion.div}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute right-0 mt-2 origin-top-right bg-gradient-to-r from-[#FFEDC4] to-[#DDC77E] border-none rounded-md shadow-lg outline-none w-auto min-w-[120px] p-1"
            onClick={() => setMenuOpen(false)}
          >
            {languages.map((lang) => (
              <Menu.Item key={lang.code}>
                {({ active }) => (
                  <button
                    onClick={() => switchLanguage(lang.code)}
                    className="flex items-center space-x-2 w-full px-2 py-1 text-sm text-gray-700"
                  >
                    <div className="w-6 h-6 overflow-hidden rounded-full">
                      <ReactCountryFlag countryCode={lang.flag} svg />
                    </div>
                    <span>{lang.label}</span>
                  </button>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        )}
      </AnimatePresence>
    </Menu>
  );
};

export default LanguageSwitcher;
