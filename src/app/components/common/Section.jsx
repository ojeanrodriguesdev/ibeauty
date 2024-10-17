"use client";

import { useRef, useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SafeFormattedMessage from "../ui/SafeFormattedMessage";

const Section = ({ titleId, items, initialSlide = 2 }) => {
  const intl = useIntl();
  const title = intl.formatMessage({ id: titleId });
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  let inactivityTimer = useRef(null);

  const [navReady, setNavReady] = useState(false);

  useEffect(() => {
    setNavReady(true);
  }, []);

  useEffect(() => {
    if (navReady) {
      const swiper = swiperRef.current?.swiper;

      if (swiper) {
        swiper.params.navigation.prevEl = prevRef.current;
        swiper.params.navigation.nextEl = nextRef.current;
        swiper.navigation.update();
      }
    }
  }, [navReady, prevRef, nextRef]);

  useEffect(() => {
    const swiper = swiperRef.current?.swiper;

    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    }

    const resetSwiperPosition = () => {
      swiper.slideToLoop(initialSlide, 500); 
    };

    const handleInteraction = () => {
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
      inactivityTimer.current = setTimeout(resetSwiperPosition, 10000);
    };

    const swiperElement = swiper.el;

    swiperElement.addEventListener("mouseenter", handleInteraction);
    swiperElement.addEventListener("mouseleave", handleInteraction);
    swiperElement.addEventListener("touchstart", handleInteraction);
    swiperElement.addEventListener("touchend", handleInteraction);
    swiperElement.addEventListener("mousedown", handleInteraction);
    swiperElement.addEventListener("mouseup", handleInteraction);

    swiper.on("slideChangeTransitionStart", handleInteraction);

    return () => {
      swiperElement.removeEventListener("mouseenter", handleInteraction);
      swiperElement.removeEventListener("mouseleave", handleInteraction);
      swiperElement.removeEventListener("touchstart", handleInteraction);
      swiperElement.removeEventListener("touchend", handleInteraction);
      swiperElement.removeEventListener("mousedown", handleInteraction);
      swiperElement.removeEventListener("mouseup", handleInteraction);
      swiper.off("slideChangeTransitionStart", handleInteraction);
      if (inactivityTimer.current) {
        clearTimeout(inactivityTimer.current);
      }
    };
  }, [initialSlide]);

  return (
    <div className="my-16">
      <h2 className="2xl:lg-3xl lg:text-3xl text-lg font-semibold font-openSans mb-8 tracking-[0.16em] text-center text-customBrown">
        <SafeFormattedMessage id={titleId} />
      </h2>
      <div className="relative">
        <Swiper
          ref={swiperRef}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          initialSlide={initialSlide}
          slidesPerView={1.2}
          loop={true}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            el: `.swiper-pagination-${titleId}`,
            renderBullet: (index, className) =>
              `<span class="${className} swiper-pagination-bullet-custom"></span>`,
          }}
          navigation={{
            nextEl: nextRef.current,
            prevEl: prevRef.current,
          }}
          modules={[Pagination, Navigation, EffectCoverflow]}
          className="mySwiper "
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}>
          {items.map((item, index) => (
            <SwiperSlide key={index}>{item}</SwiperSlide>
          ))}
        </Swiper>
        <div
          ref={prevRef}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 no-select">
          <button className="text-6xl text-customBrown">&#8249;</button>
        </div>
        <div
          ref={nextRef}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 no-select">
          <button className="text-6xl text-customBrown">&#8250;</button>
        </div>
        <div
          className={`swiper-pagination-${titleId} mt-4 flex justify-center`}></div>
      </div>
    </div>
  );
};

export default Section;
