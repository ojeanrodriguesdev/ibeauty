'use client';

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FormattedMessage } from "react-intl";
import LanguageSwitcher from '../ui/LanguageSwitcher';

const links = [
  { to: "/", labelId: "home" },
  { to: "#treatments-section", labelId: "services" },
  { to: "https://mst.link/ibeautycenter/price?cid=b6ajg9969jlib6k4r6caajthbq", labelId: "schedule", external: true },
  { to: "#about-section", labelId: "aboutUs" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isOpen]);

  return (
    <header
      className={`lg:absolute fixed top-0 left-0 w-full py-6 lg:px-8 z-[300] lg:backdrop-blur-0 backdrop-blur-sm transition-all duration-200 ease-in-out ${
        isOpen ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-8">
        <div className="hidden sm:hidden lg:block">
          <Image
            src="/images/header/ibeautylogo.png"
            alt="iBeauty Center Logo"
            width={282}
            height={25}
            className=""
          />
        </div>
        <button className="z-30">
          <Link href="/">
            <div className="lg:hidden md:block z-20">
              <Image
                src="/images/header/ibeautylogo.png"
                alt="iBeauty Center Logo"
                width={282}
                height={25}
                className="w-44 h-auto object-contain"
              />
            </div>
          </Link>
        </button>

        {/* Menu Desktop */}
        <nav className="hidden md:flex space-x-8 z-20">
          {links.map((link) => (
            <Link 
              key={link.to} 
              href={link.to} 
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              onClick={(e) => !link.external && link.to.startsWith('#') && handleSmoothScroll(e, link.to.substring(1))}
            >
              <span className="text-customGold font-poppins text-lg text-stroke bg-clip-text text-transparent bg-gradient-to-r from-customGold to-customYellow hover:from-customYellow hover:to-customGold transition duration-300 cursor-pointer drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                <FormattedMessage
                  id={link.labelId}
                  defaultMessage={link.labelId.toUpperCase()}
                />
              </span>
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        {/* Hamburger and LanguageSwitcher in Mobile */}
        <div className="flex items-center space-x-4 md:hidden z-20">
          <LanguageSwitcher />
          <button onClick={toggleMenu} className="focus:outline-none">
            <div className="space-y-1.5 mt">
              <span
                className={`block w-5 h-0.5 rounded-[25%] bg-customGold transform transition duration-300 ease-in-out ${
                  isOpen ? "rotate-45 translate-y-1.5" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 rounded-[25%] bg-customGold transform transition duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-5 h-0.5 rounded-[25%] bg-customGold transform transition duration-300 ease-in-out ${
                  isOpen ? "-rotate-45 -translate-y-2.5" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <nav
        className={`fixed w-[100%] rounded-b-[10%] p-10 md:hidden transition-all duration-200 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 bg-white border-b-2 border-customLightGray shadow-lg"
            : "max-h-0 opacity-0 bg-transparent pointer-events-none"
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col items-center space-y-4 mt-4 z-20 rounded-b-lg">
          {links.map((link) => (
            <Link 
              key={link.to} 
              href={link.to} 
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              onClick={(e) => !link.external && link.to.startsWith('#') && handleSmoothScroll(e, link.to.substring(1))}
            >
              <span className="text-customGold font-poppins text-lg text-stroke rounded-b-lg bg-clip-text text-transparent bg-gradient-to-r from-customGold to-customYellow hover:from-customYellow hover:to-customGold transition duration-300 cursor-pointer drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]">
                <FormattedMessage
                  id={link.labelId}
                  defaultMessage={link.labelId.toUpperCase()}
                />
              </span>
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
