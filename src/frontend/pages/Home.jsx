import React from 'react';

import Hero from '../components/Hero';
import About from '../components/About';
import Work from '../components/Work';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import Background from '../components/Background';

import '../styles/main.scss';

const Home = () => {
  return (
    <div className='App'>
      <Background />
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
