import React, { useState } from 'react'
import { motion } from 'framer-motion';
const TeamCard = ({name,profile}) => {
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
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <div className='max-sm:h-[10rem] max-sm:w-[10rem] bg-neutral-100 w-[12rem] h-[12rem] hover:bg-transparent border-2 text-center'>{name}</div>
        </motion.div>
      </>
    )
}

export default TeamCard
