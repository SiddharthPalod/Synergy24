import React from 'react';
import Logos from '../assets/company_logos'
const CompanyCarousel = () => {
  return (
    <div className="overflow-hidden pt-24 pb-40 relative">
      <div className="hidden md:block absolute inset-y-0 left-0 w-64 bg-gradient-to-l from-transparent to-blue z-10"></div>
      <div className="hidden md:block absolute inset-y-0 right-0 w-64 bg-gradient-to-r from-transparent to-blue z-10"></div>
      <div className='flex whitespace-nowrap'>
        <div className="animate-slide flex logos-slide">
            {Logos.map((logo, index) => (
                <a href={logo.link} target='_blank'><img key={index} src={logo.img} className="h-16 mx-[2vw]" /></a>
            ))}
        </div>
        <div className="animate-slide flex logos-slide ">
            {Logos.map((logo, index) => (
                <a href={logo.link} target='_blank'><img key={index} src={logo.img} className="h-16 mx-[2vw]" /></a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyCarousel;
