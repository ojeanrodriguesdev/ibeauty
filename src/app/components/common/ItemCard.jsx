"use client";

import Image from "next/image";
import { FormattedMessage } from "react-intl";

const ItemCard = ({ imageSrc, titleId, descriptionId }) => {
  return (
    <div className="mx-5 py-10">
      <div className="w-[280px] h-[400px] mx-auto text-center bg-white  shadow-xl border-customLightBrown  rounded-[40px] overflow-hidden flex flex-col">
        <div className="relative w-full h-[200px] flex-shrink-0">
          <Image
            src={imageSrc}
            alt={titleId}
            layout="fill"
            objectFit="cover"
            quality={100}
            sizes="280px"
          />
        </div>
        <div className="p-4 flex flex-col flex-grow items-center justify-center">
          <h3 className="text-customBrown font-poppins text-lg font-medium mb-2">
            <FormattedMessage id={titleId} />
          </h3>
          <div className="flex-grow overflow-y-auto mb-4">
            <p className="text-customGray font-openSans text-sm">
              <FormattedMessage id={descriptionId} />
            </p>
          </div>
          <a
            href="https://mst.link/ibeautycenter/price?cid=b6ajg9969jlib6k4r6caajthbq"
            target="_blank"
            rel="noopener noreferrer"
            className="w-[200px] flex items-center justify-center h-14 py-2 bg-customLightBrown text-white rounded-full text-sm font-semibold hover:bg-customBrown transition-colors duration-300 text-center">
            <FormattedMessage id="button.schedule" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
