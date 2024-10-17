'use client';

import { FormattedMessage, useIntl } from 'react-intl';
import SafeFormattedMessage from '../ui/SafeFormattedMessage';

const Steps = () => {
  const intl = useIntl();

  return (
    <div className="flex flex-col items-center bg-customLightGray p-8 pb-20">
      <h2 className="text-[30px] md:text-[50px] font-openSans text-customBrown mb-8 tracking-[0.16em] text-center">
        <SafeFormattedMessage id="steps.title" />
      </h2>
      <div className="flex flex-col md:flex-row justify-center items-center mb-8 w-full space-y-4 md:space-y-0 md:space-x-8">
        {[
          intl.formatMessage({ id: 'steps.step1' }),
          intl.formatMessage({ id: 'steps.step2' }),
          intl.formatMessage({ id: 'steps.step3' })
        ].map((text, index) => (
          <div
            key={index}
            className="relative w-[236px] h-[216px] flex-shrink-0 rounded-[30px] bg-customBlue/50 shadow-md p-4"
          >
            <div className="absolute top-1 -left-4 transform -translate-y-1/2 w-[36px] h-[36px] rounded-full bg-customBrown text-customWhite flex items-center justify-center font-openSans">
              {index + 1}
            </div>
            <p className="text-center text-customGray font-poppins mt-8">
              {text}
            </p>
          </div>
        ))}
      </div>
      <p className="mx-3 md:mx-18 text-[22px] text-customBrown font-openSans text-center tracking-[0.11em] mb-18 mt-18">
        <SafeFormattedMessage id="steps.footer" />
      </p>
      <a
        href="https://mst.link/ibeautycenter/price?cid=b6ajg9969jlib6k4r6caajthbq"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-customBrown text-customWhite font-poppins w-[274px] h-[71px] rounded-full shadow-md hover:bg-customGray flex items-center justify-center"
      >
        <SafeFormattedMessage id="steps.button" />
      </a>
    </div>
  );
};

export default Steps;
