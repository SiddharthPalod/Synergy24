import React from 'react'

const Rules = ({rules}) => {
  return (
    <div className='flexCenter flex-col gap-10 text-left'>
        <div className='heading0 text-white'> Rules </div>
        <div className='md:border-2 md:border-red1 p-4 max-md:mx-4 md:w-3/5 heading2'>{rules}</div>
    </div>
  )
}

export default Rules
