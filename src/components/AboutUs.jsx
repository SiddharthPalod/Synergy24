import { motion } from 'framer-motion';
import React from 'react';
import { about_syn } from '../assets';

const AboutUs = () => {
    return (
        <section  className="flex justify-center items-center h-full md:h-screen" >
                <div className="py-16 px-4">
                    <div className="md:gap-10 flex flex-col md:flex-row font-bold px-1 md:px-4  text-center">
                        <motion.div
                                            initial={{ opacity: 0.5, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                            delay: 0.1,
                                              duration: 0.5,
                                              ease: "easeInOut",}}
                        className="flex flex-col justify-center text-xs tracking-wide md:py-5 text-center">
                        <div className="card md:scale-100 scale-75 md:w-96 glass">
                            <div className="card-body">
                            <h2 className="card-title">About Synergy</h2>
                            <p className=' text-left font-light'>
                            Synergy'24 is the annual techfest of IIIT-Bangalore, bringing together innovation and collaboration in an exciting event. <br/>It includes hackathons, coding competitions, and entrepreneurial challenges, giving students a chance to show off their skills and creativity. <br/>Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration.<br/> The event also celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a fun and creative technical festival.<br/>    Synergy'24 showcases the power of teamwork and effort in shaping the future of technology and society.</p>
                                <div className="card-actions justify-end">
                                <a href='#contact' className="scroll-smooth btn bg-violet-700 hover:bg-purple-700 border-violet-950 text-white border-2 rounded-2xl">Contact now!</a>
                                </div>
                            </div>
                            </div>

                        </motion.div>

                        <motion.div
                                            initial={{ opacity: 0.5, y: 100 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{
                                            delay: 0.1,
                                              duration: 0.5,
                                              ease: "easeInOut",}}
                        className="flex flex-col justify-center text-xs font-extrabold tracking-wide md:py-5 text-center">
                        <div className="card md:scale-100 scale-75 md:w-96 glass">
                            <div className="card-body">
                            <h2 className="card-title">About IIIT-Bangalore</h2>
                            <p className=' text-left font-light'>
                            The International Institute of Information Technology Bangalore, also referred to as IIIT-B, is a deemed university that was founded in 1998 with the goal of advancing innovation, entrepreneurship, and education and research in the field of information technology.<br/> The Karnataka government and the IT sector jointly sponsor the Institute, which is a registered not-for-profit society.<br/>The institute has a lot of technical clubs and committees run by students in the fields of algorithms, competitive programming, development, open-source, robotics, entrepreneurship, and inclusivity in tech.                                
                            </p>    
                            <div className="card-actions justify-end">
                            <a href='https://www.iiitb.ac.in/' target="_blank" className="btn bg-violet-700 hover:bg-purple-700 border-violet-950 text-white border-2 rounded-2xl ">Visit Site!</a>
                                </div>
                                </div>
                        </div>

                        </motion.div>
                    </div>
                </div>
        </section>
    );
}

export default AboutUs;
