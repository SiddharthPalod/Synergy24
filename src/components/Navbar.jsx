import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets';
import Menu from './Menu';
import {navItems} from '../data/navitem';
function Navbar() {
        const [openNavigation, setOpenNavigation] = useState(false);
        const toggleNavigation = () => {
        if (openNavigation) {
                setOpenNavigation(false);
        } else {
                setOpenNavigation(true);
        }
        };
        const scrollToTop = () => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        return (
        <nav className="pt-4 flex font-bold items-center justify-between px-4 fixed top-0 w-full z-50 bg-transparent backdrop-blur-lg ">
                
                <Link to={'/'} className="w-40 max-sm:w-1/2 scroll-smooth" onClick={scrollToTop}>
                        <img src={logo} alt="Logo" />
                </Link>
                <button onClick={toggleNavigation} className='min-sm:hidden hover:bg-sky-500 z-20'>
                        <Menu openNavigation={openNavigation} flag={true}/>
                </button>

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

export default Navbar