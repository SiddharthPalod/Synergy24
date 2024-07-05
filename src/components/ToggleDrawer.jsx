import React from 'react'
import { Link } from 'react-router-dom'
import {navItems} from '../data/navitem'
const ToggleDrawer = ({x,click}) => {
  const links = ['Media','Design','Marketing','Webdev'];
    return (
      <div className="absolute h-screen inset-0 lg:hidden opacity-95 bg-red-600">
        <div className="absolute h-screen inset-0 flex flex-col justify-center align-center">
          {x && navItems.map((item, index) => 
            (item.href[0] === '#'?<a href={item.href} className='text-2xl text-white font-bold py-4'>{item.text}</a>:<Link key={index} to={item.href} className='text-2xl text-white font-bold py-4'>{item.text}</Link>)
          )}
          {!x && links.map((item, index) =>
            (<button onClick={click} key={index} className='text-2xl text-white font-bold py-4'>{item}</button>)
          )}
        </div>
      </div>
    )
  }

export default ToggleDrawer
