'use client';

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FormattedMessage } from "react-intl";
import SafeFormattedMessage from "../ui/SafeFormattedMessage";

const faqData = [
  {
    question: "faq.question1",
    answer: "faq.answer1",
  },
  {
    question: "faq.question2",
    answer: "faq.answer2",
  },
  {
    question: "faq.question3",
    answer: "faq.answer3",
  },
  {
    question: "faq.question4",
    answer: "faq.answer4",
  },
  {
    question: "faq.question5",
    answer: "faq.answer5",
  },
];

const FAQItem = ({ question, answer, isOpen, toggle }) => (
  <div className="mb-4 mx-10">
    <div
      className={`m-1 cursor-pointer border-2 shadow-lg rounded-[20px] bg-white border-customBrown ${
        isOpen ? "bg-white" : ""
      }`}
      onClick={toggle}>
      <button
        className={`w-full text-left p-5 flex justify-between items-center ${
          isOpen
            ? ""
            : "rounded-[10px] border-opacity-50"
        }`}
        onClick={toggle}>
        <span className="text-customBrown text-[75%] font-bold">
          <SafeFormattedMessage id={question} />
        </span>
        <motion.span
          className="ml-auto"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}>
          <FontAwesomeIcon icon={faAngleDown} style={{ color: "#B6A196" }} />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden text-[75%] pb-3 px-3">
            <p className="pt-1 text-customGray">
              <FormattedMessage id={answer} />
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </div>
);

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-customOffWhite px-8"
      style={{
        backgroundImage: "url('/images/sections/bgfaqs.png')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}>
      <div className="max-w-2xl mx-auto h-[974px] flex flex-col justify-center">
        <h2 className="text-3xl font-openSans text-customBrown text-center mb-8">
          <SafeFormattedMessage id="faq.title" />
        </h2>
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            question={item.question}
            answer={item.answer}
            isOpen={openIndex === index}
            toggle={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
