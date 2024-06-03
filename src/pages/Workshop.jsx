import React from 'react'
import { Link } from 'react-router-dom';

const Workshop = () => {
  return (
    <section>
      <Link
          className="absolute z-50 button-back-events top-0 left-0 text-xl md:text-4xl p-4 font-bold"
          to={'/'}
          >
          &lt; BACK
      </Link>
      <div className="flex flex-col items-center justify-center h-screen" id='contact'>

      <div className="relative z-50 flex flex-col items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="text-5xl md:text-7xl font-extrabold tracking-wide py-5">
          WORKSHOPS
        </div>
        <div className="text-xl font-extrabold tracking-wide text-red-700">
          Coming Soon
        </div>
      </div>
      </div>
    </section>  
    )
}

export default Workshop