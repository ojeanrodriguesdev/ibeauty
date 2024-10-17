'use client';

import Image from "next/image";
import SafeFormattedMessage from '../ui/SafeFormattedMessage'; 
import ButtonKnowMore from './ButttonKnowMore';


const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full">
      <div className="lg:block hidden absolute inset-0">
        <Image
          src="/images/About/backgroundAboutDenise.png"
          alt="iBeauty Center Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
          quality={100}
        />
      </div>
      <div className="lg:hidden block absolute inset-0">
        <Image
          src="/images/About/backgroundAboutDeniseMobile.png"
          alt="iBeauty Center Background"
          layout="fill"
          objectFit="cover"
          className="opacity-100"
          quality={100}
        />
      </div>
      <div className="relative z-10 flex flex-col lg:items-start items-center justify-center 2xl:pt-44">
        <div className="w-full flex lg:items-start items-center lg:justify-start justify-center">
          <div className="flex flex-col 2xl:mb-5 lg:mb-5 mb-48">
            <h1 className="text-customLightBrown text-center 2xl:pl-[350px] lg:pl-[350px] pl-0 mx-5 font-openSans text-[25px] lg:text-6xl tracking-[0.16em]">
              <SafeFormattedMessage id="about.heading" />
            </h1>
            <span className="lg:hidden block text-customBrown font-light font-openSans tracking-wide text-[12px] text-center">
              <SafeFormattedMessage id="about.subheading" />
            </span>
          </div>
        </div>
        <div className="relative lg:pl-48 px-16 flex flex-col items-center">
          <div className="container shadow-xl bg-customWhite lg:mt-[72px] mt-[380px] mb-8 lg:py-[36px] py-3 lg:px-[65px] px-12 border-2 rounded-3xl max-w-[800px]">
            <p className="text-customBrown text-center lg:text-[22px] text-[10px] tracking-[0.11em]">
              <SafeFormattedMessage id="about.description" />
            </p>
          </div>
          <div className="lg:pr-[650px] mt-8 mb-20 right-[50px]">
            <ButtonKnowMore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
