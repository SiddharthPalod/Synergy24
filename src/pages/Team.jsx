import React, { useState } from 'react'
import { design, media, webdev, marketing, organizers } from '../data/team';
import { LazyMotion, domAnimation, motion } from 'framer-motion';
import TeamCard from '../components/TeamCard';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import {Meteor} from '../ui/meteor'

const Team = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
    }
  }
  const [team, setTeam] = useState('Organizers');
  const handleClick = (e) => {
    setTeam(e.target.innerText);
  }
  return (
    <div className='text-white h-screen'>
      <Link className="fixed button-back-events z-50 top-0 left-0 text-xl md:text-4xl p-4 font-bold"
        to={'/'}>&lt; BACK</Link>
      <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          className="text-5xl md:text-7xl font-extrabold  text-center tracking-wide py-4">
        Team
      </motion.div>
      <div className='w-full h-[80%] flex justify-end'>
        <button onClick={toggleNavigation} className='min-sm:hidden hover:bg-sky-500 z-20'>
          <Menu openNavigation={openNavigation} flag={false} click={handleClick}/>
        </button>
        <div className='hidden absolute ml-5 w-[30%] lg:flex flex-col gap-4 font-semibold text-xl max-sm:text-lg max-md:text-xl top-[40%] left-[5vw]'>
          <button 
            onClick={handleClick} 
            className={`text-left hover:text-red-600 ${team === 'Organizers' ? 'opacity-100' : 'opacity-60'}`}
          >
            Organizers
          </button>
          <button 
            onClick={handleClick} 
            className={`text-left hover:text-red-600 ${team === 'Media' ? 'opacity-100' : 'opacity-60'}`}
          >
            Media
          </button>
          <button 
            onClick={handleClick} 
            className={`text-left hover:text-red-600 ${team === 'Design' ? 'opacity-100' : 'opacity-60'}`}
          >
            Design
          </button>
          <button 
            onClick={handleClick} 
            className={`text-left hover:text-red-600 ${team === 'Marketing' ? 'opacity-100' : 'opacity-60'}`}
          >
            Marketing
          </button>
          <button 
            onClick={handleClick} 
            className={`text-left hover:text-red-600 ${team === 'Webdev' ? 'opacity-100' : 'opacity-60'}`}
          >
            Webdev
          </button>
        </div>
        <LazyMotion features={domAnimation}>
        <motion.div
          className='w-full lg:w-[70%] md:m-6 lg:mr-10'
        >
          <div className='grid grid-cols-3 mx-2 gap-4 max-md:grid-cols-2 place-items-center'>
          {team === 'Organizers' && organizers.map((member,index) => (
            <TeamCard key={index} name={member.name} profile={member.profile}/>
          ))}
          {team === 'Media' && media.map((member,index) => (
            <TeamCard key={index} name={member.name} profile={member.profile}/>
          ))}
          {team === 'Design' && design.map((mem,index) => (
            <TeamCard key={index} name={mem.name} profile={mem.profile}/>
          ))}
          {team === 'Marketing' && marketing.map((mem,index) => (
            <TeamCard key={index} name={mem.name} profile={mem.profile}/>
          ))}
          {team === 'Webdev' && webdev.map((mem,index) => (
            <TeamCard key={index} name={mem.name} profile={mem.profile}/>
          ))}
        </div>
        </motion.div>
      </LazyMotion>
      </div>
      <Meteor/>
    </div>   
  )
}

export default Team