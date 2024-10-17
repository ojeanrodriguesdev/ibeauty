'use client'

import Image from 'next/image'
import { useIntl, FormattedMessage } from 'react-intl'
import SafeFormattedMessage from '../ui/SafeFormattedMessage'

const Card = ({ title, description, imageUrl, isConsulting }) => (
  <div
    className={`w-full bg-customWhiteFC border-customGray border-opacity-20 border-2 rounded-[40px] shadow-xl overflow-hidden p-4  md:w-[75%] lg:h-[800px] lg:w-[400px] md:flex md:flex-col md:items-center  ${
      isConsulting ? 'md:items-start' : 'md:items-center'
    } md:p-6`}
  >
    <div
      className={`relative w-full flex justify-center items-center h-[250px] md:h-[350px] ${
        isConsulting ? 'md:justify-start' : ''
      }`}
    >
      <div
        className={`relative w-[80%] h-[80%] mb-[-4px] md:mb-0 ${isConsulting ? 'md:w-full' : ''}`}
      >
        <Image src={imageUrl} alt={title} layout="fill" objectFit="contain" quality={100} />
      </div>
    </div>
    <div className={`relative p-4 md:p-6 ${isConsulting ? 'pt-4' : ''}`}>
      <div className="absolute inset-0 h-[3px] bg-customBrown opacity-50"></div>
      <div>
        <h2
          className="font-openSans text-xl md:text-2xl text-customBrown mb-4 text-center tracking-wide break-words"
          dangerouslySetInnerHTML={{ __html: title }}
        />
        <p
          className="text-customBrown tracking-wide text-[15px] text-left break-words font-extralight"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      </div>
    </div>
  </div>
)

export default function CardAbout() {
  const intl = useIntl()

  return (
    <div className="flex flex-col items-center bg-customWhite px-4 md:px-14 pt-[150px] md:pt-[250px] xl:pt-64">
      {/* Título e Subtítulo */}
      <div className="text-center text-customBrown font-openSans text-[18px] md:text-[25px] font-semibold leading-[34.04px] tracking-[0.16em] w-full mb-20 hidden xl:block">
        <SafeFormattedMessage
          id="card.about"
          values={{
            span: chunks => <span className="block w-full text-center">{chunks}</span>,
          }}
        />
        <h2 className="text-customBrown tracking-[0.16em] font-openSans text-[12px] pt-2">
          <SafeFormattedMessage id="heroSection.subheadline" />
        </h2>
      </div>

      {/* Cards para Mobile, Tablet e Desktop */}
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-6 space-y-4 md:space-y-0 justify-center items-center xl:flex-nowrap lg:">
        <Card
          title={intl.formatMessage({ id: 'card.facial.title' })}
          description={intl.formatMessage({ id: 'card.facial.description' })}
          imageUrl="/images/About/esteticafacial.png"
        />
        <Card
          title={intl.formatMessage({ id: 'card.consulting.title' })}
          description={intl.formatMessage({ id: 'card.consulting.description' })}
          imageUrl="/images/About/consultoria.png"
          isConsulting={true}
        />
        <Card
          title={intl.formatMessage({ id: 'card.body.title' })}
          description={intl.formatMessage({ id: 'card.body.description' })}
          imageUrl="/images/About/esteticacorporal.png"
        />
      </div>
    </div>
  )
}
