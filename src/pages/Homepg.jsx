import React,{ useRef,useState, useEffect } from 'react'
import { Provider } from 'react-redux';
import {Hero,FAQ, Timeline, Footer, Navbar,AboutUs} from '../components';
import LazyComponent from '../LasyComponent';
import store from '../store';
import AboutUsMobile from '../components/AboutUsMobile';
import Red from '../components/Red';

const Homepg = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 768);  // Adjust height threshold as needed

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Provider store={store}>
      <main className="app transition-all ease-in">
        <div className="content" on>
          <Navbar/>
          <Hero />
          <LazyComponent id="about">
          {isMobile ? <AboutUsMobile/> : <AboutUs />}
          </LazyComponent>
          <LazyComponent id="timeline">
            <Timeline />
          </LazyComponent>
          <LazyComponent id="faq">
            <FAQ />
          </LazyComponent>
          <Footer/>
        </div>
      </main>
    </Provider>
    )
}

export default Homepg