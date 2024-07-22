import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import Back from '../components/Back';
import { EventInfo } from '../data/EventDetail';
import { Icon } from '@iconify/react'; 
import { useRef, useState } from 'react';
import ToggleOption from '../components/ToggleOption';
import AboutEvent from '../components/AboutEvent';
import Rules from '../components/Rules';
import ImpInfo from '../components/ImpInfo';
import EventContact from '../components/EventContact';

const EventPage = () => {
  const params = useParams();
  const [about,setAbout] = useState(false);
  const [rules,setRules] = useState(false);
  const [impInfo,setImpInfo] = useState(false);
  const [contact,setContact] = useState(false);

  const handleClick = (state,setState) => {
    setState(!state);
  }

  const day = params.event_day.slice(-1);
  const id = params.event;
  const event = EventInfo[(day-1)*8+(id-1)];

  return (
    <div className='h-screen w-screen flexCenter'>
      <Back />
      <motion.div className='flexBetween flex-col md:gap-8 gap-6 pt-20 text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className='hidden md:flexBetween absolute top-[27vh] w-3/5 h-2/5 mx-auto font-semibold heading3'>
          <div className='flexBetween flex-col h-full'>
            <button onClick={()=>handleClick(about,setAbout)} className='flexCenter flex-col gap-3'>About<Icon icon="iconamoon:profile-fill" width="3.5rem" height="3.5rem" className='border-2 border-red1 rounded-lg p-1'/>
              <ToggleOption openNavigation={about}><AboutEvent event={event}/></ToggleOption> 
            </button>
            <button onClick={()=>handleClick(rules,setRules)} className='flexCenter flex-col gap-3'>Rules<Icon icon="carbon:rule-filled" width="3.5rem" height="3.5rem" className='border-2 border-red1 rounded-lg p-1'/>
              <ToggleOption openNavigation={rules}><Rules rules={event.rules}/></ToggleOption>
            </button>
          </div>
          <div className='flexBetween flex-col h-full'>
            <button onClick={()=>handleClick(impInfo,setImpInfo)} className='flexCenter flex-col gap-3'>Imp Info<Icon icon="fa-solid:exclamation" width="3.5rem" height="3.5rem" className='border-2 border-blue1 rounded-lg p-1'/>
              <ToggleOption openNavigation={impInfo}><ImpInfo impInfo={event.impInfo}/></ToggleOption>
            </button>
            <button onClick={()=>handleClick(contact,setContact)} className='flexCenter flex-col gap-3'>Contact<Icon icon="ph:phone-fill" width="3.5rem" height="3.5rem" className='border-2 border-blue1 rounded-lg p-1'/>
              <ToggleOption openNavigation={contact}><EventContact contact={event.contact}/></ToggleOption>
            </button>
          </div>
        </div>
        <motion.img
          src={event.image}
          alt={event.name}
          className='sm:w-2/5 sm:h-2/5 md:w-1/3 md:h-1/3 w-3/5'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className='heading1 text-white tracking-[.07em]'
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {event.name}
        </motion.div>
        <motion.button
          className='md:px-16 px-12 py-1.5 border-[3.5px] heading3 text-white font-semibold rounded-[1.25rem] border-blue1 tracking-[.07em]'
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}
        >
          Register
        </motion.button>
        <div className='md:hidden gap-7 w-screen grid grid-cols-4 px-8 '>
          <button onClick={()=>handleClick(about,setAbout)} className='flexBetween flex-col'><div className='text-center leading-none'>About Event</div><Icon icon="iconamoon:profile-fill" className='border-2 border-red1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={about}><AboutEvent event={event}/></ToggleOption> 
          </button>
          <button onClick={()=>handleClick(rules,setRules)} className='flexBetween flex-col'><div className='text-center leading-none mt-2'>Rules</div><Icon icon="carbon:rule-filled" className='border-2 border-red1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={rules}><Rules rules={event.rules}/></ToggleOption>
          </button>
          <button onClick={()=>handleClick(impInfo,setImpInfo)} className='flexBetween flex-col gap-1'><div className='text-center leading-none'>Imp Info</div><Icon icon="fa-solid:exclamation" className='border-2 border-blue1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={impInfo}><ImpInfo impInfo={event.impInfo}/></ToggleOption>
          </button>
          <button onClick={()=>handleClick(contact,setContact)} className='flexBetween flex-col'><div className='text-center leading-none mt-2'>Contact</div><Icon icon="ph:phone-fill" className='border-2 border-blue1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={contact}><EventContact contact={event.contact}/></ToggleOption>
          </button>
        </div>
      </motion.div>
    </div>
  );
}

export default EventPage;