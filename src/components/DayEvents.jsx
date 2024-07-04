import React from 'react'
import EventCard from './EventCard'
import { motion, LazyMotion, domAnimation } from 'framer-motion';
import { Link } from 'react-router-dom'
const DayEvents = ({day,images}) => {
  return (
    <div className='event my-10 py-10'>
      <Link
          className="static button-back-events top-0 left-0 text-xl md:text-4xl px-4 font-bold"
          to={'/'}
          >
          &lt; BACK
      </Link>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="text-5xl md:text-7xl font-extrabold text-center tracking-wide pt-5 my-5"
      >
        Events
      </motion.div>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className='font-bold text-4xl max-sm:text-2xl text-center py-4'
      >
        Day {day}
      </motion.div>
      <LazyMotion features={domAnimation}>
        <motion.div
        >
      <div className='grid grid-cols-3 gap-6 max-sm:grid-cols-2 lg:px-40 px-[7vw] lg:mx-40 mb-20'>
        {images.map((image,index) => (
          <EventCard key={index} image={image} />
        ))}
      </div>
      </motion.div>
      </LazyMotion>
    </div>
  )
}

export default DayEvents
