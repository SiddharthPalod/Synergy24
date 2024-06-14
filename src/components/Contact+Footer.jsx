import React from 'react'
import { Icon } from '@iconify/react';
import { color, motion } from 'framer-motion';
import { contact_iiitb, contact_syn } from '../assets';

function Footer() {
return (
    <section id='contact'  className="flex flex-col items-center justify-end h-full" style={{backgroundColor:"#0075FF"}} >
        <footer className="footer footer-center p-8 bg-none text-white" >
        <div
            className="text-5xl md:text-7xl font-extrabold md:tracking-wide line-clamp-2">
                Contact Us 
        </div>
        <nav>
            <div className="grid grid-flow-col gap-4 scale-150 z-20">
                <a href="mailto:synergy@iiitb.ac.in" className='hover:-translate-y-1'>
                    <Icon icon="ri:mail-fill" width="1.3rem" height="1.3rem"/>
                </a>
                <a href="https://www.instagram.com/synergy_iiitb/" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:instagram-fill" width="1.3rem" height="1.3rem"/>
                </a>
                <a href="https://in.linkedin.com/company/synergy-iiitbangalore" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:linkedin-box-fill"width="1.3rem" height="1.3rem"/>
                </a>
                <a href="https://discord.com/channels/1158466913924558930/1158763053681225768" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:discord-fill" width="1.3rem" height="1.3rem"/>
                </a>
            </div>
        </nav>
        <aside className='min-[890px]:absolute mx-4 flex flex-row justify-between'>
             <div className="flex-initial w-1/3 md:w-1/4  flex justify-center items-center"><img src={contact_syn} alt="Logo"/></div>
             <div className="flex-initial w-1/3 md:w-1/4 flex justify-center items-center"><img src={contact_iiitb} alt="Logo" /></div>
        </aside> 
        </footer>    
    </section>
)
}

export default Footer