'use client';

import { useIntl, FormattedMessage } from 'react-intl';
import Flags from "./Flags";

const ExperienceClients = () => {
  const intl = useIntl();

  return (
    <section className="relative h-auto inset-0 z-0 tracking-wide bg-gradient-to-b from-[#FCFCFC] to-customWhiteAbout mt-24 sm:mt-0">
      <div className="flex lg:flex-row items-center lg:justify-around justify-center px-4 sm:px-24 md:px-32 lg:px-48 py-0 lg:py-0 mt-[-200px] lg:mt-0">
        <div className="flex flex-col text-customLightBrown items-center justify-around">
          <div className="flex font-openSans font-semibold">
            <h1 className="lg:text-[200px] text-[90px] font-openSans font-semibold">30</h1>
            <p className="absolute lg:text-[50px] font-normal text-[20px] lg:ml-[240px] ml-[100px] lg:mt-[85px] mt-[30px]">+</p>
          </div>
          <p className="absolute bg-[#FAFAFA] font-openSans font-semibold lg:text-[23px] text-[12px] lg:mt-14 mt-7">
            <FormattedMessage id="experience.years" />
          </p>
        </div>
        <span className="block text-customGray font-extralight font-openSans lg:text-[150px] text-[70px] lg:px-0 px-4">|</span>
        <div className="flex flex-col text-customLightBrown items-center justify-around">
          <div className="flex font-openSans font-semibold">
            <h1 className="lg:text-[200px] text-[90px] font-openSans font-semibold">20</h1>
            <p className="absolute lg:text-[50px] font-normal text-[20px] lg:ml-[240px] ml-[110px] lg:mt-[85px] mt-[30px]">
              <FormattedMessage id="experience.suffix" />
            </p>
          </div>
          <p className="absolute bg-[#FAFAFA] font-openSans font-semibold lg:text-[23px] text-[12px] lg:mt-14 mt-7">
            <FormattedMessage id="experience.clients" />
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center font-openSans">
        <p className="lg:text-[20px] text-[10px] text-customLightBrown">
          <FormattedMessage id="experience.worldwide" />
        </p>
      </div>
      <div className="flex items-center justify-center p-0 pb-10">
        <Flags />
      </div>
    </section>
  );
};

export default ExperienceClients;
