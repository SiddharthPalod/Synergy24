import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { cardTexture } from '../assets';
const EventCard = ({ image }) => {
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
      className='perspective-1000 w-[10rem] h-[10rem] md:w-[14rem] md:h-[14rem]'
    >      
    <div className={`relative w-full h-full text-center transition-transform duration-600 transform-style-preserve-3d shadow-lg ${isFlipped ? 'rotate-y-180' : ''}`}>
        <div className="absolute w-full h-full bg-green-500 backface-hidden">
        <img src={image} loading='lazy' alt="Event_Image_Not_Found" className="object-contain" />
        </div>
        <div className="absolute w-full h-full bg-red-700 text-white rotate-y-180 backface-hidden flex flex-col justify-center text-left">
        <img src={cardTexture} alt="Card Texture" className="w-full h-full absolute -z-10" />
        {/* Make these also dynamic: {title} {prize} {desc} */}
        <h1 className="md:text-2xl text-sm font-bold px-4">Profit Pursuit</h1> 
        <p className='font-bold md:text-sm text-xs px-4'>Prize Pool: 4k</p> 
        <p className='md:text-xs text-[0.5rem] px-4'>Explore the vibrant world of street theater with 'NUKKAD NAATAK.' This event invites you to harness the power of compelling performances to raise your voice and drive societal change.</p>
        </div>
    </div>
    </motion.div>
  );
};

export default EventCard;
