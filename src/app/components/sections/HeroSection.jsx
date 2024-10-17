'use client'
import Image from "next/image";
import SafeFormattedMessage from "../ui/SafeFormattedMessage";
import Buttons from "../ui/buttonsUi";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="aboslute inset-0">
        <Image
          src="/images/hero/backgroundhero.png"
          alt="Background iBeauty Center"
          layout={true}
          style={{ objectFit: "cover" }}
          className="lg:block hidden opacity-100 object-cover object-center h-auto"
          width={2560}
          height={1020}
          quality={100}
        />
        <Image
          src="/images/hero/backgroundheromobile.png"
          alt="Background iBeauty Center"
          layout={true}
          style={{ objectFit: "cover" }}
          className="lg:hidden relative opacity-100 object-cover object-center h-auto"
          width={1338}
          height={2764}
          quality={100}
        />
        <Image
          src="/images/hero/backgroundhero1.png"
          alt="Background iBeauty Center"
          layout={true}
          style={{ objectFit: "cover" }}
          className="lg:hidden relative opacity-100 object-cover object-center h-auto z-40"
          width={1338}
          height={2764}
          quality={100}
        />
        <div className="lg:hidden relative z-50 p-4 text-center mt-[-310px]">
        <h1 className="text-customBrown tracking-[0.16em] font-openSans font-bold text-[18px]">
          <SafeFormattedMessage id="heroSection.headline" />
        </h1>
        <h2 className="text-customBrown tracking-[0.16em] font-openSans text-[12px] pt-2">
          <SafeFormattedMessage id="heroSection.subheadline" />
        </h2>
      </div>
      </div>
      <div className="fixed bottom-4 right-4 z-[200]">
        <Buttons />
      </div>
    </section>
  );
};

export default HeroSection;
