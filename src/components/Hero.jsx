import React,{useEffect} from 'react'
import { BackgroundGradientAnimation } from "../ui/background-gradiant-animation";
function Hero()  {
  return (
    <section className='md:cursor-none'  >
    <BackgroundGradientAnimation>
      <div className="absolute z-30 inset-0 flex flex-col items-center justify-center font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl">
        <div className="lg:tracking-widest lg:text-sm text-xs tracking-wider lg:mx-4 pb-5"> 
          TECHNICAL FESTIVAL
        </div>
        <div className="text-5xl md:text-7xl font-extrabold tracking-wide py-5">
          SYNERGY
        </div>
        <div className="text-xl font-extrabold tracking-wide text-red-700">
          {/* 25-27 OCT 2024 */}
          Dates announced soon
        </div>
      </div>
    </BackgroundGradientAnimation>
    </section>
  );
}

export default Hero