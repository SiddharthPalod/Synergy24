import React from 'react'

const ImpInfo = ({impInfo}) => {
  return (
    <div className='flexCenter flex-col gap-10 text-left'>
        <div className='heading0 text-white'> Important Info </div>
        <div className='md:border-2 md:border-blue1 p-4 max-md:mx-4 md:w-3/5 heading2'>{impInfo}</div>
    </div>
  )
}

export default ImpInfo
