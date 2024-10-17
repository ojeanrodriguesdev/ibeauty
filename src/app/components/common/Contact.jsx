"use client";

import React from "react";
import { FormattedMessage } from "react-intl";
import {
  FaInstagram,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-customOffWhite">
      <div className="bg-customLightBrown p-4 sm:p-8 flex flex-col lg:flex-row">
        <div className="items-center justify-center lg:flex-row lg:w-1/2">
          <h2 className="text-[36px] sm:text-[70px] font-extralight font-openSans text-customWhite mb-4 sm:px-18 px-4 tracking-[0.16em]">
            <FormattedMessage id="contact.ourContact" />
            <br />
            <span className="font-extralight">
              <FormattedMessage id="contact.contact" />
            </span>
          </h2>
          <div className="flex items-center text-customWhite mb-4 sm:px-18 px-4">
            <a
              href="https://www.instagram.com/ibeautyswiss/?igsh=Z3ZvbHFoeGZwb2U2"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <FaInstagram
                className="mr-2 text-customBrown"
                style={{ width: "28px", height: "28px" }}
              />
              <p className="text-white w-[150px] sm:w-[300px] h-[31px]">
                @iBeautycenterch
              </p>
            </a>
          </div>
        </div>
        <div className="lg:w-1/2 flex items-center justify-center sm:px-18 px-4 pb-5 lg:pb-0">
          <p className="text-customWhite font-openSans lg:text-left text-start text-[12px] sm:text-[17px] leading-relaxed tracking-[0.11em] max-w-xs sm:max-w-lg">
            <FormattedMessage id="contact.invitation" />
          </p>
        </div>
      </div>
      <div className="relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.927486403213!2d9.462014316002812!3d47.1661607791578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b4a8e3f497f3f%3A0xf1c89c2c5dbcd418!2sChurerstrasse%2035%2C%209470%20Buchs%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1599635421167!5m2!1sen!2sus"
          width="100%"
          height="450"
          frameBorder="0"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:-translate-x-1/3 left-[120px] w-[200px] sm:w-[350px] bg-customWhite p-5 ml-5 sm:p-6 rounded-xl shadow-lg">
          <div className="mb-4">
            <div className="flex items-center text-customBrown text-sm sm:text-lg mb-2 font-bold">
              <FaPhoneAlt className="mr-2" />
              <FormattedMessage id="contact.phone" />
            </div>
            <p className="text-customGray text-xs sm:text-base">+41 76 228 36 56</p>
          </div>
          <div className="mb-4">
            <div className="flex items-center text-customBrown text-sm sm:text-lg mb-2 font-bold">
              <FaMapMarkerAlt className="mr-2" />
              <FormattedMessage id="contact.address" />
            </div>
            <p className="text-customGray text-xs sm:text-base">
              Churerstrasse 35, 9470 Buchs, Switzerland
            </p>
          </div>
          <div>
            <div className="flex items-center text-customBrown text-sm sm:text-lg mb-2 font-bold">
              <FaClock className="mr-2" />
              <FormattedMessage id="contact.hours" />
            </div>
            <p className="text-customGray text-xs sm:text-base">
              <FormattedMessage id="contact.hours.week" />
            </p>
            <p className="text-customGray text-xs sm:text-base">
              <FormattedMessage id="contact.hours.saturday" />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
