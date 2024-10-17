"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaInstagram,
  FaFacebook,
  FaMapMarkedAlt,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { FormattedMessage } from "react-intl";

const Footer = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-customOffWhite w-full font-openSans">
      <div className="flex items-center justify-center bg-customGray w-full h-[75px] lg:pt-1 pt-5 pb-5 lg:pb-0">
        <Image
          src="/images/header/ibeautylogo.png"
          alt="footer logo"
          width={285}
          height={38}
          quality={100}
          className="object-contain w-[200px] sm:w-[285px] h-auto 2xl:block lg:block hidden"
        />
        <Image
          src="/images/header/ibeautylogo.png"
          alt="footer logo"
          width={285}
          height={38}
          quality={100}
          className="object-contain w-[180px] h-auto 2xl:hidden lg:hidden block"
        />
      </div>
      <div className="container mx-auto px-4 py-[70px]">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 border-b-2 border-b-customLightBrown pb-10">
          <div className="flex flex-col justify-center gap-3">
            <div className="flex items-center">
              <Link
                href="https://www.instagram.com/ibeautyswiss/?igshid=Z3ZvbHFoeGZwb2U2"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customLightBrown hover:underline">
                <FaInstagram className="text-2xl" />
                <span className="text-sm ml-4">@iBeautyswiss</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="https://wa.me/41762283656"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customLightBrown hover:underline">
                <FaPhone className="text-2xl" />
                <span className="text-sm ml-4">
                  <FormattedMessage
                    id="footer.phone"
                    defaultMessage="+41 76 228 36 56"
                  />
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="https://www.facebook.com/ibeautycenterch"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customLightBrown hover:underline">
                <FaFacebook className="text-2xl" />
                <span className="text-sm ml-4">iBeauty Center CH</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="mailto:ibeautycenterch@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customLightBrown hover:underline">
                <FaMailBulk className="text-2xl" />
                <span className="text-sm ml-4">
                  <FormattedMessage
                    id="footer.email"
                    defaultMessage="ibeautycenterch@gmail.com"
                  />
                </span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                href="https://maps.google.com/?q=Churerstrasse+35,+9470+Buchs,+Switzerland"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customLightBrown hover:underline">
                <FaMapMarkedAlt className="text-2xl" />
                <span className="text-sm ml-4">
                  <FormattedMessage
                    id="footer.address"
                    defaultMessage="Churerstrasse 35, 9470 Buchs, Switzerland"
                  />
                </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-row justify-center items-end lg:text-lg text-sm lg:gap-16 2xl:pr-36 lg:pr-36 pr-0 gap-5 lg:mr-10">
            <a
              href="#treatments-section"
              onClick={(e) => handleSmoothScroll(e, "treatments-section")}
              className="text-customLightBrown hover:underline">
              <FormattedMessage
                id="footer.resources"
                defaultMessage="Recursos"
              />
            </a>
            <Link
              href="https://mst.link/ibeautycenter/price?cid=b6ajg9969jlib6k4r6caajthbq"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customLightBrown hover:underline">
              <FormattedMessage id="footer.prices" defaultMessage="Preços" />
            </Link>
            <Link
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-customLightBrown hover:underline">
              <FormattedMessage
                id="footer.privacy"
                defaultMessage="Privacidade"
              />
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end mt-[25px]">
            <Image
              src="/images/Footer/logoibeauty.png"
              alt="iBeauty Logo"
              width={135}
              height={105}
              quality={100}
              className="object-contain w-[90px] h-auto lg:w-[135px]"
            />
          </div>
        </div>
        <div className="flex justify-around items-center">
          <div className="flex items-center justify-center text-center lg:text-[15px] text-[12px] font-openSans text-customLightBrown mt-10">
            <p>
              ©{" "}
              <FormattedMessage
                id="footer.copyright"
                defaultMessage="Copyright 2024. All rights reserved."
              />
            </p>
          </div>
          <div className="flex items-center justify-center text-center lg:text-[15px] text-[12px] font-openSans text-customLightBrown mt-10">
            <p>
              <FormattedMessage
                id="footer.developedBy"
                defaultMessage="Developed by DEVCORE®"
              />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
