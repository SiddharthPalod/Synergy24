import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets';
import { Icon } from '@iconify/react';

function Navbar() {
        const scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              };
return (
        <nav className="pt-1 flex font-bold items-center justify-between px-4 fixed top-0 w-full z-50 bg-transparent">
                
                <Link to={'/'} className="flex-none w-40 scroll-smooth" onClick={scrollToTop}>
                        <img src={logo} alt="Logo" />
                </Link>
                <div className="dropdown lg:hidden">
                        <div tabIndex={0} role="button" className="btn btn-circle btn-ghost">
                                <Icon icon="fe:bar"  style={{color: 'white', scale: '2'}} />
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 right-0 bg-white rounded-box">
                                {navItems.map((item, index) => (
                                        <li key={index} className={`nav-item`} onClick={() => setActiveTab(index)}>
                                                {item.href[0] === '#' ? (
                                                        <a href={item.href} className={`nav-link flex items-center py-5 px-5 text-blue-950 hover:text-red-600 transition duration-600 scroll-smooth ease-in-out ${item.active ? 'text-red-600' : ''}`}>
                                                                {item.text}
                                                        </a>
                                                ) : (
                                                        <Link to={item.href} className={`nav-link flex items-center py-5 px-5 text-blue-950 hover:text-red-600 transition duration-600 scroll-smooth ease-out ${item.active ? 'text-red-600' : ''}`}>
                                                                {item.text}
                                                        </Link>
                                                )}
                                        </li>
                                ))}
                        </ul>
                </div>


                <div className="hidden lg:flex lg:flex-grow lg:items-center backdrop-blur-sm" id="navbarSupportedContent">
                        <ul className="flex flex-col lg:flex-row list-none ml-auto">
                                {navItems.map((item, index) => (
                                        <li key={index} className={`nav-item`} onClick={() => setActiveTab(index)}>
                                                {item.href[0] === '#' ? (
                                                        <a href={item.href} className={`nav-link flex items-center py-5 px-5 text-white hover:text-red-600 transition duration-600 scroll-smooth ease-in-out ${item.active ? 'text-red-600' : ''}`}>
                                                                {item.text}
                                                        </a>
                                                ) : (
                                                        <Link to={item.href} className={`nav-link flex items-center py-5 px-5 text-white hover:text-red-600 transition duration-600 scroll-smooth ease-out ${item.active ? 'text-red-600' : ''}`}>
                                                                {item.text}
                                                        </Link>
                                                )}
                                        </li>
                                ))}
                        </ul>
                </div>
        </nav>
);      
}

const navItems = [
    { text: 'Events', href: '/events' },
    { text: 'Workshops', href: '/workshop' },
    { text: 'FAQ',  href: '#faq' },
    { text: 'Team', href: '/team' },
//     { text: 'Sponsors', href: '#sponsors' },
    { text: 'Contact Us', href: '#contact' },
];
  

export default Navbar