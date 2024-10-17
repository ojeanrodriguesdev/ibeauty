'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import iconwpp from '../../../../public/images/sections/iconwpp.png';
import iconagen from '../../../../public/images/sections/iconagen.png';

const AnimatedButton = ({ iconSrc, link, alt }) => {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-customOffWhite text-customBrown shadow-md m-2 sm:m-4"
      initial={{ y: 0 }}
      animate={{ y: [0, -5, 0] }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    >
      <div className="w-8 h-8 sm:w-10 sm:h-10">
        <Image src={iconSrc} alt={alt} width={40} height={40} className="w-full h-full" />
      </div>
    </motion.a>
  );
};

const Buttons = () => {
  return (
    <div className="flex flex-col items-center">
      <AnimatedButton
        iconSrc={iconagen}
        alt="Calendar Icon"
        link="https://mst.link/ibeautycenter/price?cid=b6ajg9969jlib6k4r6caajthbq"
      />
      <AnimatedButton
        iconSrc={iconwpp}
        alt="WhatsApp Icon"
        link="https://wa.me/41762283656"
      />
    </div>
  );
};

export default Buttons;
