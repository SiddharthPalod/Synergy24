import React, { useState, useEffect } from 'react';
import { LazyMotion, domAnimation, motion , useScroll , useTransform } from 'framer-motion';
import { faqData } from '../data/faq';
import Red from './Red';
function FAQ() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);
  const [animationKey, setAnimationKey] = useState(Date.now());

  useEffect(() => {
    setAnimationKey(Date.now());
  });

  const handleMouseEnter = () => {
    setIsVisible(true);
  };
  return (
    <section className='overflow-hidden'>
    <section className='py-16 flex flex-col items-center justify-center' id='faq' 
      onMouseEnter={handleMouseEnter} onMouseLeave={() => setIsVisible(false)}
    >
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="text-5xl md:text-7xl font-extrabold tracking-wide py-5 my-5"
      >
        FAQ
      </motion.div>
      <LazyMotion features={domAnimation}>
        <motion.div
          className='grid grid-cols-2 md:grid-cols-3 gap-3 pb-5 place-items-center font-bold'
          >
          {faqData.map((faq, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              key={index}
              className={`faq-box lg:w-64 hover:bg-transparent hover:py-0 hover:font-normal md:text-xl lg:p-8 md:p-4 p-1`}
              onMouseEnter={() => setSelectedQuestion(index)}
              onMouseLeave={() => setSelectedQuestion(null)}
              style={{
                fontSize: selectedQuestion === index ? '0.75em' : '1em',
                lineHeight: selectedQuestion === index ? '1.25em' : '1.5em',
              }}
            >
              <span>{selectedQuestion === index ? faq.answer : faq.question}</span>
            </motion.div>
          ))}
        </motion.div>
      </LazyMotion>
    </section>
    </section>
  );
}

export default FAQ;
