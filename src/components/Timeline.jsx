import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';
import { images1,images2,images3 } from '../data/event_image';
import { useNavigate } from 'react-router-dom';

export const Timeline = () => {
  const [day, setDay] = useState("day1");
  const navigate = useNavigate();
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
    navigate(`/event_${day}/${index+1}`);
  };

  return (
    <section className='flex items-center justify-center h-screen snap-start text-white overflow-hidden'>
      <div className="lg:p-16 p-4 w-screen relative flex items-center justify-center flex-col">
        <StyleRoot>
          <Coverflow
            displayQuantityOfSide={3}
            enableHeading={false}
            enableScroll={false}
            active={day === "day2" ? 3 : day === "day3" ? 2 : day === "day1" ? 2 : 1}
            media={{
              '@media (min-width: 1024px)': {
                width: '100vw',
                height: '70vh',
                scale: '1',
              },
              '@media (max-width: 1024px)': {
                width: '100vw',
                height: '50vh',
                scale: '2.2',
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
                <img key={index} src={image.image} alt={`Slide ${index}`} className='block md:w-full items-center' loading='lazy' />
              </div>
            ))}
          </Coverflow>
        </StyleRoot>

        <div className="text-5xl md:text-7xl font-extrabold md:tracking-wide py-3 z-40">
          TIMELINE
        </div>
        <div className="relative text-l md:text-xl font-extrabold tracking-wide text-red-700 flex items-center justify-center gap-3 md:gap-6 max-[500px]:gap-6">
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute md:w-20 w-24 h-8 max-[500px]:w-20 h-bg-transparent border-2 border-solid border-red-700 rounded-2xl"
            style={{ left: `calc(${days.indexOf(day) * (100 / days.length)}% + ${days.indexOf(day) * (0.45)}rem)` }}
          />
          {days.map((d, index) => (
            <div
              key={d}
              id={d}
              className={`cursor-pointer px-4 text-xl md:text-lg max-[500px]:px-2 font-extrabold tracking-wide ${day === d ? "text-red-700" : "text-white"}`}
              onClick={handleClick}
            >
              Day {index + 1}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};