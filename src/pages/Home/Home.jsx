import React from 'react';
import Hero from '../../components/home/Hero';
import Features from '../../components/home/Features';
import Productive from '../../components/home/Productive';
import Testimonials from '../../components/home/Testimonials';

const Home = () => {
  return (
    <div   >
      <Hero />
        <Features />
        <Productive />
        <Testimonials />
    </div>
  );
};

export default Home;