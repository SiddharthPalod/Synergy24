import React, { useState } from 'react'
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import { design, media, webdev, marketing } from '../data/team';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
const Team = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else {
      disablePageScroll();
      setOpenNavigation(true);
    }
  }
  const [team, setTeam] = useState('Media');
  const handleClick = (e) => {
    setTeam(e.target.innerText);
  }
  return (
    <div className='m-6'>
      <Link
          className="absolute z-50 button-back-events top-0 left-0 text-xl md:text-4xl p-4 font-bold"
          to={'/'}
          >
          &lt; BACK
      </Link>
      <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.1 }}
      className="text-5xl md:text-7xl font-extrabold text-center tracking-wide py-3 my-5"
      >
        Team
      </motion.div>
      <div className=''>
        <button onClick={toggleNavigation} className='min-sm:hidden hover:bg-sky-500 z-20'>
          <Menu openNavigation={openNavigation} flag={false} click={handleClick}/>
        </button>
        <div className='hidden lg:flex flex-col gap-4 font-semibold text-2xl max-sm:text-lg max-md:text-xl fixed top-[40%] left-[5vw]'>
          <button onClick={handleClick} className='text-left'>Media</button>
          <button onClick={handleClick} className='text-left'>Design</button>
          <button onClick={handleClick} className='text-left'>Marketing</button>
          <button onClick={handleClick} className='text-left'>Webdev</button>
        </div>
        <LazyMotion features={domAnimation}>
        <motion.div
          className='w-[80vw] lg:w-1/2 mx-auto'
        >
          <div className='grid grid-cols-3 gap-4 max-md:grid-cols-2'>
          {team === 'Media' && media.map((member,index) => (
            <TeamCard key={index} name={member.name}/>
          ))}
          {team === 'Design' && design.map((mem,index) => (
            <TeamCard key={index} name={mem.name}/>
          ))}
          {team === 'Marketing' && marketing.map((mem,index) => (
            <TeamCard key={index} name={mem.name}/>
          ))}
          {team === 'Webdev' && webdev.map((mem,index) => (
            <TeamCard key={index} name={mem.name}/>
          ))}
        </div>
        </motion.div>
      </LazyMotion>
      </div>
    </div>   
  )
}

export default Team