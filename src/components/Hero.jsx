import React, { useEffect, useState } from 'react';
import { BackgroundGradientAnimation } from '../ui/background-gradiant-animation';
import { motion } from 'framer-motion';
import Timer from './timer';
import { Bookmark } from './Bookmark';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY+10 });
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  return (
    <section className="">
      <BackgroundGradientAnimation>
        <div className="absolute z-30 inset-0 flex flex-col items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
          <div className="lg:tracking-widest text-xs md:text-base tracking-wider pb-5">
            TECHNICAL FESTIVAL
          </div>
          <div className="text-5xl md:text-8xl font-extrabold tracking-wide py-5">SYNERGY</div>
          <div className="text-base md:text-xl font-extrabold tracking-wide text-red-700 shadow-red-700">
            <div className='heading3 mb-4'>Dates will be announced soon</div>
            {/* <div className='heading3 mb-4'>25-27 OCT 2024</div> */}
            {/* <Timer /> */} 
          </div>
        </div>
        <motion.div
          className="absolute z-40 bg-blue-600 rounded-full pointer-events-none shadow-2xl sm:visible invisible"
          style={{ height: 10, width: 10, x: mousePosition.x, y: mousePosition.y }}
        />
        <Bookmark/>
      </BackgroundGradientAnimation>
    </section>
  );
}

export default Hero;