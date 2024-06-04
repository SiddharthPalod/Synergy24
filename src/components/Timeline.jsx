import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import { Link } from 'react-router-dom';
import { images1,images2,images3 } from '../data/event_image';

export const Timeline = () => {
  const [day, setDay] = useState("day1");

  const handleClick = (e) => {
    setDay(e.target.id);
  };

  const getImages = () => {
    if (day === "day1") {
      return images1;
    } else if (day === "day2") {
      return images2;
    } else if (day === "day3") {
      return images3;
    }
  };

  const images = getImages();
  const days = ["day1", "day2", "day3"];

  const fn = (day, index) => {
    window.open(`/event_${day}/${index}`, '_blank');
  };

  return (
    <section className='flex items-center justify-center h-screen snap-start text-white overflow-hidden'>
      <div className="lg:p-16 p-4 w-screen relative flex items-center justify-center flex-col">
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={3}
            enableHeading={false}
            enableScroll={false}
            media={{
              '@media (min-width: 1024px)': {
                width: '100vw',
                height: '20rem',
                scale: '1',
              },
              '@media (max-width: 1024px)': {
                width: '100vw',
                height: '50vh',
                scale: '2',
              },
              '@media (max-width: 720px)': {
                width: '100vw',
                height: '60vh',
                scale: '2.5',
              },
            }}
          >
            {images.map((image, index) => (
              <div key={index} onDoubleClick={() => fn(day, index)}>
                <img key={index} src={image} alt={`Slide ${index}`} className='block md:w-full' loading='lazy' />
              </div>
            ))}
          </Coverflow>
        </StyleRoot>

        <div className="text-5xl md:text-7xl font-extrabold md:tracking-wide py-3 z-50">
          TIMELINE
        </div>
        <div className="relative text-l md:text-xl font-extrabold tracking-wide text-red-700 flex items-center justify-center gap-3 md:gap-6">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute md:w-20 w-16 h-6 md:h-8 bg-transparent border-2 border-solid border-red-700 rounded-2xl"
            style={{ left: `calc(${days.indexOf(day) * (100 / days.length)}% + ${days.indexOf(day) * (0.3333333)}rem)` }}
          />
          {days.map((d, index) => (
            <span
              key={d}
              id={d}
              className={`cursor-pointer ${day === d ? 'px-2 py-1' : 'px-2 py-1'}`}
              onClick={handleClick}
            >
              Day {index + 1}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
