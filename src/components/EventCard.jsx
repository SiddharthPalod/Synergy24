import React, { useState } from 'react'
import { motion } from 'framer-motion';
const EventCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleMouse = (e) => {
        setIsFlipped(!prevState.isFlipped );
    }
    return (
      <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className='border-4'
        onMouseEnter={handleMouse}
        onMouseLeave={handleMouse}
      >
        <div className='bg-neutral-100 h-[45vh] max-md:h-[30vh] hover:bg-transparent text-center'></div>
      </motion.div>
    </>
      )
}

export default EventCard
