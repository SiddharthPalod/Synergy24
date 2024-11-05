import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { EventInfo } from '../data/EventDetail';
import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react';
import { importSVG } from '../assets/event_specific/importSVG';
import { Eventdisplay,ToggleOption } from '../components';
import { dateSize } from '../data/event_image';
import { Link } from 'react-router-dom'

const EventPage = () => {
  const params = useParams();
  const [about, setAbout] = useState(false);
  const [rules, setRules] = useState(false);
  const [impInfo, setImpInfo] = useState(false);
  const [contact, setContact] = useState(false);
  const [event, setEvent] = useState(null);

  const handleClick = (state, setState) => {
    setState(!state);
  };

  useEffect(() => {
    const day = params.event_day.slice(-1);
    const id = params.event;
    const currentEvent = EventInfo[dateSize[day-1] + (id - 1)];

    const loadImage = async () => {
      const module = await importSVG(currentEvent.imageName);
      setEvent({ ...currentEvent, image: module.default });
    };

    loadImage();
  }, [params.event_day, params.event]);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <section className='flexCenter'>
      <Link className="fixed text-white button-back-events z-50 top-0 left-0 text-xl md:text-4xl p-4 font-bold"
        to={'/events'}>&lt; BACK</Link>
      <motion.div className='h-screen mb-4 flexBetween flex-col justify-evenly md:gap-2 pt-2 sm:pt-20 text-white'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className='hidden md:flexBetween absolute top-[27vh] w-3/5 h-2/5 mx-auto font-semibold heading3'>
          <div className='flexBetween flex-col h-full'>
            <button onClick={() => handleClick(about, setAbout)} className='flexCenter flex-col gap-3'>
              About
              <Icon icon="iconamoon:profile-fill" width="3.5rem" height="3.5rem" className='border-2 border-red1 rounded-lg p-1'/>
              <ToggleOption openNavigation={about}><Eventdisplay name="About Event" desc={event.about} mode="1" /></ToggleOption> 
            </button>
            <button onClick={() => handleClick(rules, setRules)} className='flexCenter flex-col gap-3'>
              Rules
              <Icon icon="carbon:rule-filled" width="3.5rem" height="3.5rem" className='border-2 border-red1 rounded-lg p-1'/>
              <ToggleOption openNavigation={rules}><Eventdisplay name="Rules" desc={event.rules} mode="1" /></ToggleOption>
            </button>
          </div>
          <div className='flexBetween flex-col h-full'>
            <button onClick={() => handleClick(impInfo, setImpInfo)} className='flexCenter flex-col gap-3'>
              Imp Info
              <Icon icon="fa-solid:exclamation" width="3.5rem" height="3.5rem" className='border-2 border-blue1 rounded-lg p-1'/>
              <ToggleOption openNavigation={impInfo}><Eventdisplay name="Important Info" desc={event.impInfo} mode="2" /></ToggleOption>
            </button>
            <button onClick={() => handleClick(contact, setContact)} className='flexCenter flex-col gap-3'>
              Contact
              <Icon icon="ph:phone-fill" width="3.5rem" height="3.5rem" className='border-2 border-blue1 rounded-lg p-1'/>
              <ToggleOption openNavigation={contact}><Eventdisplay name="Contact" desc={event.contact} mode="2" /></ToggleOption>
            </button>
          </div>
        </div>
        <motion.img
          src={event.image}
          alt={event.name}
          className='md:w-full md:h-3/5 h-1/2 flex px-6 sm:w-3/5 object-contain'
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <motion.div
          className='heading1 text-4xl lg:text-6xl text-white tracking-[.07em]'
          initial={{ y: -10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {event.name}
        </motion.div>
        
        
        
        <motion.button
          className='md:px-16 px-12 py-1.5 border-[3.5px] heading3 text-white font-semibold rounded-[1.25rem] border-blue1 tracking-[.07em]'
          whileHover={{ scale: 1.05 }}  
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open(event.link, '_blank')}
        >
          {event.name === "Lense Flare 3.0" ? "Submit" : "Register"}
        </motion.button>


        <div className='md:hidden gap-7 w-screen grid grid-cols-4 px-8 justify-evenly items-center '>
          <button onClick={() => handleClick(about, setAbout)} className='flex flex-col justify-end items-center h-full'>
            <div className='text-center leading-none pb-1'>About Event</div>
            <Icon icon="iconamoon:profile-fill" className='border-2 border-red1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={about}><Eventdisplay name="About Event" desc={event.about} mode="1" /></ToggleOption> 
          </button>
          <button onClick={() => handleClick(rules, setRules)} className='flex justify-end items-center flex-col h-full'>
            <div className='text-center leading-none pb-1'>Rules</div>
            <Icon icon="carbon:rule-filled" className='border-2 border-red1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={rules}><Eventdisplay name="Rules" desc={event.rules} mode="1" /></ToggleOption>
          </button>
          <button onClick={() => handleClick(impInfo, setImpInfo)} className='flex justify-end items-center flex-col h-full '>
            <div className='text-center leading-none pb-1'>Imp Info</div>
            <Icon icon="fa-solid:exclamation" className='border-2 border-blue1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={impInfo}><Eventdisplay name="Important Info" desc={event.impInfo} mode="2" /></ToggleOption>
          </button>
          <button onClick={() => handleClick(contact, setContact)} className='flex justify-end items-center flex-col h-full'>
            <div className='text-center leading-none pb-1'>Contact</div>
            <Icon icon="ph:phone-fill" className='border-2 border-blue1 rounded-lg p-1 md:w-14 md:h-14 w-10 h-10'/>
            <ToggleOption openNavigation={contact}><Eventdisplay name="Contact" desc={event.contact} mode="2" /></ToggleOption>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default EventPage;
