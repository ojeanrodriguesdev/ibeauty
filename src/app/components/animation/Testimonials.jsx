'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import SafeFormattedMessage from '../ui/SafeFormattedMessage';

const testimonials = [
  { name: "Luca Brkic", feedbackId: "feedback.1" },
  { name: "Elisabeth Salche", feedbackId: "feedback.2" },
  { name: "Vith Erika", feedbackId: "feedback.3" },
  { name: "Rejane Rotert", feedbackId: "feedback.4" },
  { name: "Alexa Theiner", feedbackId: "feedback.5" },
  { name: "Denise Karin", feedbackId: "feedback.6" },
  { name: "Nina", feedbackId: "feedback.7" },
  { name: "Jeliz", feedbackId: "feedback.8" },
  { name: "Thirsa Dutchie", feedbackId: "feedback.9" },
  { name: "Marion Cosmetics", feedbackId: "feedback.10" },
  { name: "Gabriela Memeti", feedbackId: "feedback.11" },
  { name: "Brigitte", feedbackId: "feedback.12" },
  { name: "Charlotte", feedbackId: "feedback.13" },
  { name: "Emanuelle Rosa", feedbackId: "feedback.14" },
];

const duplicateArray = (arr, times) => [].concat(...Array(times).fill(arr));

const Testimonials = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [cardWidth, setCardWidth] = useState(300);
  const animationControls1 = useAnimation();
  const animationControls2 = useAnimation();
  const containerRef1 = useRef(null);
  const containerRef2 = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setCardWidth(window.innerWidth <= 768 ? 350 : 450);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const duplicatedTestimonials = duplicateArray(testimonials, 2);
  const totalCards = duplicatedTestimonials.length;
  const totalWidth = totalCards * cardWidth;
  const baseSpeed = 50;
  const animationDuration = totalWidth / baseSpeed;

  useEffect(() => {
    const startAnimation1 = () => {
      animationControls1.start({
        x: -(totalWidth - 2 * cardWidth),
        transition: { repeat: Infinity, duration: animationDuration, ease: 'linear' }
      });
    };

    const stopAnimation1 = () => {
      animationControls1.stop();
    };

    const startAnimation2 = () => {
      animationControls2.start({
        x: 0,
        transition: { repeat: Infinity, duration: animationDuration, ease: 'linear' }
      });
    };

    const stopAnimation2 = () => {
      animationControls2.stop();
    };

    const containerElement1 = containerRef1.current;
    const containerElement2 = containerRef2.current;

    if (containerElement1 && containerElement2) {
      containerElement1.addEventListener('mouseenter', stopAnimation1);
      containerElement1.addEventListener('mouseleave', startAnimation1);
      containerElement1.addEventListener('touchstart', stopAnimation1);
      containerElement1.addEventListener('touchend', startAnimation1);

      containerElement2.addEventListener('mouseenter', stopAnimation2);
      containerElement2.addEventListener('mouseleave', startAnimation2);
      containerElement2.addEventListener('touchstart', stopAnimation2);
      containerElement2.addEventListener('touchend', startAnimation2);

      startAnimation1();
      startAnimation2();

      return () => {
        containerElement1.removeEventListener('mouseenter', stopAnimation1);
        containerElement1.removeEventListener('mouseleave', startAnimation1);
        containerElement1.removeEventListener('touchstart', stopAnimation1);
        containerElement1.removeEventListener('touchend', startAnimation1);

        containerElement2.removeEventListener('mouseenter', stopAnimation2);
        containerElement2.removeEventListener('mouseleave', startAnimation2);
        containerElement2.removeEventListener('touchstart', stopAnimation2);
        containerElement2.removeEventListener('touchend', startAnimation2);
      };
    }
  }, [animationControls1, animationControls2, totalWidth, cardWidth, animationDuration]);

  return (
    <div className="pb-32 pt-[50px]" style={{ backgroundImage: "url('/images/sections/bgtestimonials.png')" }}>
      <h2 className={`text-customLightBrown font-openSans pb-5 tracking-[0.16em] text-center ${isMobile ? 'text-2xl' : 'text-[40px]'}`}>
        <SafeFormattedMessage id="testimonials.heading" />
      </h2>
      <p className="text-center text-customGray font-poppins mb-[50px]">
        <SafeFormattedMessage id="testimonials.subtitle" />
      </p>
      <div className="overflow-hidden relative" ref={containerRef1}>
        <motion.div
          className="flex space-x-4"
          initial={{ x: 0 }}
          animate={animationControls1}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ width: `${cardWidth}px` }}
              className="h-[300px] sm:h-[262px] flex-shrink-0 rounded-[30px] bg-white p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-customBrown">{testimonial.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
              <p className={`text-customGray font-poppins mt-auto mb-auto text-center overflow-hidden overflow-ellipsis ${isMobile ? 'text-xs' : 'lg:text-xs'}`}>
                <SafeFormattedMessage id={testimonial.feedbackId} />
              </p>
            </div>
          ))}
        </motion.div>
      </div>
      <div className={`overflow-hidden relative ${isMobile ? 'mt-2' : 'mt-8'}`} ref={containerRef2}>
        <motion.div
          className="flex space-x-4"
          initial={{ x: -(totalWidth - 2 * cardWidth) }}
          animate={animationControls2}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              style={{ width: `${cardWidth}px` }}
              className="h-[300px] sm:h-[262px] flex-shrink-0 rounded-[30px] bg-white p-4 flex flex-col justify-between"
            >
              <div className="flex justify-between items-center">
                <p className="font-bold text-customBrown">{testimonial.name}</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-300">★</span>
                  ))}
                </div>
              </div>
              <p className={`text-customGray font-poppins mt-auto mb-auto text-center overflow-hidden overflow-ellipsis ${isMobile ? 'text-xs' : 'lg:text-xs'}`}>
                <SafeFormattedMessage id={testimonial.feedbackId} />
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;
