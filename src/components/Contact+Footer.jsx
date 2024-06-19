import React from 'react'
import { Icon } from '@iconify/react';
import { color, motion } from 'framer-motion';
import { contact_iiitb, contact_syn} from '../assets';

function Footer() {
return (
    <section id='contact' className="h-full" style={{backgroundColor:"#0075FF"}} >
        <footer className="footer max-md:footer-center md:justify-evenly items-center p-8 bg-none text-white" >
        <div className="text-5xl md:hidden block font-extrabold line-clamp-2">
                Contact Us 
        </div>
        <div className="w-40 md:block hidden"><img src={contact_iiitb} alt="Logo" /></div>
        <div className="w-64 md:block hidden"><img src={contact_syn} alt="Logo"/></div>
        <nav>
            <h6 className="footer-title opacity-100 md:block hidden ">Contact Us</h6> 
            <div className="grid grid-flow-col gap-4 z-20 max-md:scale-125">
                <a href="mailto:synergy@iiitb.ac.in" className='hover:-translate-y-1'>
                    <Icon icon="ri:mail-fill" width="1.5rem" height="1.5rem"/>
                </a>
                <a href="https://www.instagram.com/synergy_iiitb/" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:instagram-fill" width="1.5rem" height="1.5rem"/>
                </a>
                <a href="https://in.linkedin.com/company/synergy-iiitbangalore" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:linkedin-box-fill"width="1.5rem" height="1.5rem"/>
                </a>
                <a href="https://discord.com/channels/1158466913924558930/1158763053681225768" target="_blank" rel="noopener noreferrer"className='hover:-translate-y-1'>
                    <Icon icon="ri:discord-fill"width="1.5rem" height="1.5rem"/>
                </a>
            </div>
        </nav>
        <aside className='flex flex-row justify-evenly items-center md:hidden'>
             <div className="w-40"><img src={contact_syn} alt="Logo"/></div>
             <div className="w-40"><img src={contact_iiitb} alt="Logo" /></div>
        </aside> 
        </footer>    
    </section>
)
}

export default Footer