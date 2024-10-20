import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cardTexture } from '../assets';

const EventCard = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouse = () => {
    setIsFlipped(prevState => !prevState);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onMouseEnter={handleMouse}
      onMouseLeave={handleMouse}
      className='cursor-pointer perspective-1000 w-[10rem] h-[10rem] sm:w-[14rem] sm:h-[14rem] md:w-[18rem] md:h-[18rem] lg:w-[20rem] lg:h-[20rem]'
    >
      <div className={`relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d shadow-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full bg-red-700 backface-hidden">
          <img src={data.image} loading='lazy' alt="Event_Image_Not_Found" className="object-contain" />
        </div>
        <div className="absolute w-full h-full bg-red-700 text-white rotate-y-180 backface-hidden flex flex-col justify-center text-left">
          <img src={cardTexture} alt="Card Texture" className="w-full h-full absolute -z-10" />
          <h1 className="md:text-2xl text-sm font-bold px-4">{data.name}</h1>
          <p className='font-bold md:text-sm text-xs px-4'>Prize Pool: {data.prize}</p>
          <p className='md:text-xs text-[0.5rem] px-4'>{data.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default EventCard;
