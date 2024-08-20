import React from 'react';
import Logos from '../assets/company_logos'
const CompanyCarousel = () => {
  return (
    <div className="overflow-hidden py-16 relative flex gap-72">
      <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-l from-transparent to-blue z-10"></div>
      <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-r from-transparent to-blue z-10"></div>
      <div className="flex logos-slide animate-slide">
        {Logos.map((logo, index) => (
            <img key={index} src={logo} className="h-12 mx-10" />
        ))}
      </div>
      <div className="flex logos-slide animate-slide">
        {Logos.map((logo, index) => (
            <img key={index} src={logo} className="h-12 mx-10" />
        ))}
      </div>
    </div>
  );
};

export default CompanyCarousel;
