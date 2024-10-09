import React from 'react'
import EventCard from './EventCard'
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const DayEvents = ({day,images}) => {
  const navigate = useNavigate();
  const fn = (day, index) => {
    navigate(`/event_day${day}/${index+1}`);
  };
  return (
    <div className='event h-full text-white'>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className='font-bold text-4xl max-sm:text-2xl text-center py-4 md:py-8'
      >
      Day {day} 
      </motion.div>
      <LazyMotion features={domAnimation}>
        <motion.div
            className='flex justify-center items-center w-full h-full'
        >
        <div className='grid grid-cols-3 max-[677px]:grid-cols-2 place-items-center gap-x-4 gap-y-8 md:gap-10 mb-20'>
        {images.map((image,index) => (
          <div onDoubleClick={() => fn(day, index)}><EventCard key={index} data={image}/></div>
        ))}
        </div>
      </motion.div>
      </LazyMotion>
    </div>
  )
}

export default DayEvents;