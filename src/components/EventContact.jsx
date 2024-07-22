import React from 'react'

const EventContact = ({contact}) => {
  return (
    <div className='flexCenter flex-col gap-10 text-left'>
        <div className='heading0 text-white'> Contact </div>
        <div className='md:border-2 md:border-blue1 p-4 max-md:mx-4 md:w-3/5 heading2'>{contact}</div>
    </div>
  )
}

export default EventContact
