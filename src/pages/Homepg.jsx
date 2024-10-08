import React from 'react'
import {Hero,FAQ, Timeline, Footer, Navbar,AboutUs} from '../components';
import CompanyCarousel from '../components/CompanyCarousel';

const Homepg = () => {
  return (
      <main className="app transition-all ease-in">
        <div className="content">
          <Navbar/>
          <Hero />
          <AboutUs/>
          <Timeline />
          <FAQ />
          <CompanyCarousel/>
          <Footer/>
        </div>
      </main>
    )
}

export default Homepg