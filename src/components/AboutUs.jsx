
import React, { useRef, useEffect } from 'react';
import AboutSynergy from './AboutSynergy';
import AboutIIITB from './AboutIIITB';

const AboutUs = () => {
  const leftRef = useRef(null);
  const handleMove = e => {
    if (leftRef.current) {
      leftRef.current.style.width = `${(e.clientX / window.innerWidth) * 100}%`;
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMove);
    document.addEventListener('touchmove', e => handleMove(e.touches[0]));

    return () => {
      document.removeEventListener('mousemove', handleMove);
      document.removeEventListener('touchmove', e => handleMove(e.touches[0]));
    };
  }, []);
    return (
    <section className="h-screen w-screen max-md:flex" >
      <div className="bg-redbg z-20 side w-screen overflow-hidden bg-red-700" ref={leftRef}>
        <AboutSynergy />
      </div>
      <div id="container">
        <div className="side">
          <AboutIIITB />
        </div>
      </div>
    </section>
    );
}

export default AboutUs;
