import React from 'react'

const ToggleOption = ({openNavigation,children}) => {
  return (
    <div>
    {openNavigation && 
      <div className="absolute w-screen h-screen md:-top-[27vh] md:-left-1/3 left-0 top-0 backdrop-filter backdrop-blur-lg bg-opacity-10 bg-neutral-900 flexCenter flex-col text-center">
        {children}
      </div>  
    }
    </div>
  )
}

export default ToggleOption
