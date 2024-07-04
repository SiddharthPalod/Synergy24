import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { TiArrowDownThick } from "react-icons/ti";

const ArrowAnimation = () => {
  const arrowRef = useRef(null);

  useGSAP(() => {
    gsap.to(arrowRef.current, {
      y: [-30, -15, 0],
      duration: 2,
      repeat: -1, 
      ease: "power1.inOut",
      yoyo: true,
    });
  }, []);

  return (
    <div className="text-center mb-[4%]" ref={arrowRef}>
      <a href="#" className="text-white text-4xl no-underline"><TiArrowDownThick />
      </a>
    </div>
  );
};

export default ArrowAnimation;