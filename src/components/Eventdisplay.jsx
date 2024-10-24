import React from 'react';

const Eventdisplay = ({ name, desc, mode }) => {
  // Determine the border color based on the mode
  const borderColor = mode === "1" ? 'border-red1' : mode === "2" ? 'border-blue1' : 'border-gray-500';
  return (
    <div className='flex flex-col h-screen justify-center items-center gap-10 text-left'>
      <div className='text-4xl md:text-6xl font-bold text-white'>{name}</div>
      <div className={`overflow-scroll border-2 ${borderColor} p-4 mx-16 md:mx-32 lg:mx-64 text-sm text-left  md:text-lg`}>{desc}</div>
    </div>
  );
};

export default Eventdisplay;
