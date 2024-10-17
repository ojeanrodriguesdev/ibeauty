'use client';

import { FormattedMessage } from 'react-intl';
import Section from './Section';
import ItemCard from './ItemCard';
import SafeFormattedMessage from '../ui/SafeFormattedMessage';

const itemsMakeUp = [
  { imageSrc: '/images/sections/treatments/sobrancelhas.png', titleId: 'treatments.items.sobrancelhas.title', descriptionId: 'treatments.items.sobrancelhas.description' },
  { imageSrc: '/images/sections/treatments/labios.png', titleId: 'treatments.items.labios.title', descriptionId: 'treatments.items.labios.description' },
  { imageSrc: '/images/sections/treatments/olhos.png', titleId: 'treatments.items.olhos.title', descriptionId: 'treatments.items.olhos.description' },
  { imageSrc: '/images/sections/treatments/areola.png', titleId: 'treatments.items.areola.title', descriptionId: 'treatments.items.areola.description' },
  { imageSrc: '/images/sections/treatments/vitiligo.png', titleId: 'treatments.items.vitiligo.title', descriptionId: 'treatments.items.vitiligo.description' },
  { imageSrc: '/images/sections/treatments/cicatriz.png', titleId: 'treatments.items.cicatriz.title', descriptionId: 'treatments.items.cicatriz.description' },
];

const itemsPele = [
  { imageSrc: '/images/sections/treatments/peelings.png', titleId: 'treatments.items.peelings.title', descriptionId: 'treatments.items.peelings.description' },
  { imageSrc: '/images/sections/treatments/plasmalifting.png', titleId: 'treatments.items.plasmalifting.title', descriptionId: 'treatments.items.plasmalifting.description' },
  { imageSrc: '/images/sections/treatments/limpeza.png', titleId: 'treatments.items.limpeza.title', descriptionId: 'treatments.items.limpeza.description' },
  { imageSrc: '/images/sections/treatments/rejuvi-botox.png', titleId: 'treatments.items.rejuvi_botox.title', descriptionId: 'treatments.items.rejuvi_botox.description' },
  { imageSrc: '/images/sections/treatments/microagulhamento.png', titleId: 'treatments.items.microagulhamento.title', descriptionId: 'treatments.items.microagulhamento.description' },
  { imageSrc: '/images/sections/treatments/bb-glow.png', titleId: 'treatments.items.bb_glow.title', descriptionId: 'treatments.items.bb_glow.description' },
];

const itemsBeleza = [
  { imageSrc: '/images/sections/treatments/tratamentos-capilares.png', titleId: 'treatments.items.tratamentos_capilares.title', descriptionId: 'treatments.items.tratamentos_capilares.description' },
  { imageSrc: '/images/sections/treatments/massagem.png', titleId: 'treatments.items.massagem.title', descriptionId: 'treatments.items.massagem.description' },
  { imageSrc: '/images/sections/treatments/reposicao-colageno.png', titleId: 'treatments.items.reposicao_colageno.title', descriptionId: 'treatments.items.reposicao_colageno.description' },
  { imageSrc: '/images/sections/treatments/depilacao.png', titleId: 'treatments.items.depilacao.title', descriptionId: 'treatments.items.depilacao.description' },
  { imageSrc: '/images/sections/treatments/manicure.png', titleId: 'treatments.items.manicure.title', descriptionId: 'treatments.items.manicure.description' },
  { imageSrc: '/images/sections/treatments/remocao-pigmento.png', titleId: 'treatments.items.remocao_pigmento.title', descriptionId: 'treatments.items.remocao_pigmento.description' },
];

const renderItems = (items) => {
  return items.map((item, index) => (
    <ItemCard
      key={index}
      imageSrc={item.imageSrc}
      titleId={item.titleId}
      descriptionId={item.descriptionId}
    />
  ));
};

const Treatments = () => {
  return (
    <div
      id="treatments-section"
      className="min-h-screen w-full"
      style={{
        backgroundImage: 'linear-gradient(to bottom, white 0%, white 33%, #F9F9F9 66%, #F9F9F9 100%)',
      }}
    >
      <div className="text-center py-8 w-full">
        <h1 className="mt-[100px] text-center text-2xl sm:text-4xl md:text-4xl lg:text-[55px] font-bold text-customBrown mb-2 tracking-[0.16em]">
          <SafeFormattedMessage id="treatments.title" />
        </h1>
        <h1 className="text-center text-[12px] sm:text-xl md:text-2xl lg:text-[25px] text-customGray mb-8 tracking-[0.16em]">
          <FormattedMessage id="treatments.subtitle" />
        </h1>
        <Section titleId="treatments.permanent_makeup.title" items={renderItems(itemsMakeUp)} initialSlide={1} />
        <Section titleId="treatments.skin_treatments.title" items={renderItems(itemsPele)} initialSlide={2} />
        <Section titleId="treatments.beauty_care.title" items={renderItems(itemsBeleza)} initialSlide={2} />
      </div>
    </div>
  );
};

export default Treatments;
