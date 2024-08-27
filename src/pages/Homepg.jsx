import React from 'react'
import { Provider } from 'react-redux';
import {Hero,FAQ, Timeline, Footer, Navbar,AboutUs} from '../components';
import LazyComponent from '../LasyComponent';
import store from '../store';
import CompanyCarousel from '../components/CompanyCarousel';

const Homepg = () => {
  return (
    <Provider store={store}>
      <main className="app transition-all ease-in">
        <div className="content">
          <Navbar/>
          <Hero />
          <LazyComponent id="about">
          <AboutUs/>
          </LazyComponent>
          <LazyComponent id="timeline">
          <Timeline />
          </LazyComponent>
          <FAQ />
          <CompanyCarousel/>
          <Footer/>
        </div>
      </main>
    </Provider>
    )
}

export default Homepg