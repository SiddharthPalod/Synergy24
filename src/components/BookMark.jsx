import React from 'react'
import {book2 } from '../assets'

export const Bookmark = () => {
  return (
    <a href='https://drive.google.com/file/d/15eoag6GCNBWqgCOsAR_Zbt8kFVZ0qSWT/view' target="_blank" className='bg-white rounded-full p-2 fixed bottom-10 right-10 z-10'>
      <img src={book2} alt="book" className="w-[10vw] sm:w-[7vw] lg:w-[5vw]"/>
    </a>
  )
}
