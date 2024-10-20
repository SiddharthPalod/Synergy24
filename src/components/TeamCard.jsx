import React, { useState } from 'react'
import { motion } from 'framer-motion';

const TeamCard = ({ name, profile }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className='cursor-pointer relative max-sm:h-[10rem] max-sm:w-[10rem] aspect-square bg-blue1 p-1 rounded-xl text-center'>
          <motion.div
            className='absolute h-[98%] w-[98%] rounded-2xl'
            animate={{ borderWidth: isHovered ? 20 : 0, borderColor: isHovered ? '#13003a' : 'transparent' }}
            transition={{ duration: 0.5 }}
          />
          <img 
            src={profile} 
            alt='profile' 
            loading='lazy' 
            className='rounded-2xl w-full h-full object-cover' 
          />
          {isHovered && (
            <motion.div
              className='bg-blue2 absolute inset-x-0 bottom-0 p-2 m-1 rounded-xl heading4 font-semibold rounded-t-none'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div>{name}</div>
            </motion.div>
          )}
        </div>
      </motion.div>
    </>
  )
}

export default TeamCard;
