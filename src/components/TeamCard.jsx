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
          className='border-4'
          onMouseEnter={handleMouse}
          onMouseLeave={handleMouse}
        >
          <div className='max-sm:h-[27vh] bg-neutral-100 h-[37vh] hover:bg-transparent text-center'>{name}</div>
        </motion.div>
      </>
    )
}

export default TeamCard
