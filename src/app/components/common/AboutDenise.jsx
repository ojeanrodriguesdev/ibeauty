'use client'

import Image from 'next/image'
import SafeFormattedMessage from '../ui/SafeFormattedMessage'
import ButtonKnowMore from './ButttonKnowMore'

const AboutSection = () => {
  return (
    <section className="relative min-h-screen w-full flex flex-col justify-around">
      {/* Imagem de fundo para desktop */}
      <div className="hidden xl:block absolute inset-0">
        <Image
          src="/images/About/backgroundAboutDenise.png"
          alt="iBeauty Center Background"
          layout="fill"
          objectFit="cover"
          objectPosition="right"
          loading="eager"
          priority={true}
          className="opacity-100"
          quality={100}
        />
      </div>

      {/* Imagem de fundo para mobile e tablet (tablet usa mobile) */}
      <div className="xl:hidden block absolute inset-0">
        <Image
          src="/images/About/backgroundAboutDeniseMobile.png"
          alt="iBeauty Center Background"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
          loading="eager"
          priority={true}
          className="opacity-100"
          quality={100}
        />
      </div>

      {/* Título no topo */}
      <div className="relative z-10 flex flex-col items-center justify-start mt-0 md:mt-28 lg:mt-44 xl:mt-10">
        <div className="w-full flex items-start justify-center">
          <div className="flex flex-col">
            <h1 className="text-customLightBrown text-center mx-5 font-openSans text-[25px] md:text-[40px] tracking-[0.16em]">
              <SafeFormattedMessage id="about.heading" />
            </h1>
            <span className="text-customBrown font-light font-openSans tracking-wide text-[10px] md:text-[16px] text-center">
              <SafeFormattedMessage id="about.subheading" />
            </span>
          </div>
        </div>
      </div>

      {/* Descrição e Botão na parte inferior (alinhamento em 3 colunas e 4 linhas para desktops) */}
      <div className="relative w-auto px-4 py-4 flex flex-col items-center mt-auto xl:mt-0 xl:grid xl:grid-cols-2 xl:gap-4 md:mx-10 lg:mx-10 xl:mx-0">
        {/* Container da descrição ocupando 50% da tela */}
        <div className="container shadow-xl bg-customWhite py-3 px-4 md:py-6 md:px-12 md:mx-18 lg:mx-24 xl:col-span-1 xl:row-span-1 border-2 rounded-3xl w-full">
          <p className="text-customBrown text-center text-[10px] md:text-[18px] lg:text-[23px] xl:text-[20px] 2xl:text-[24px] tracking-[0.11em]">
            <SafeFormattedMessage id="about.description" />
          </p>
        </div>

        {/* Botão de saber mais centralizado abaixo da descrição */}
      </div>
      <div className="w-full flex justify-center pb-10 xl:col-span-1 xl:row-span-1">
        <ButtonKnowMore />
      </div>
    </section>
  )
}

export default AboutSection
