import React from 'react'
import {Book} from '../assets/index'
// import { Book2 } from '../assets/index'
import { Book3 } from '../assets/index'
const BookMark = () => {
  return (
    <div className='absolute bottom-10 right-10 z-10'>
      <img src={Book3} alt="book" className="w-20 h-20"/>
    </div>
  )
}

export default BookMark
