import React from 'react'
import {DayEvents} from '../components'
import { images1,images2,images3 } from '../data/event_image'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
// import {Red} from '../components'
const Events = () => {
  return (
    <div>
      <Link className="fixed text-white button-back-events z-50 top-0 left-0 text-xl md:text-4xl p-4 font-bold"
        to={'/'}>&lt; BACK</Link>
      <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="w-full mt-4 text-white text-5xl md:text-7xl font-extrabold text-center tracking-wide">
        Events
      </motion.div>
      <DayEvents day={1} images={images1}/>
      <DayEvents day={2} images={images2}/>
      <DayEvents day={3} images={images3}/>
    </div>
  )
}

export default Events
