import React from 'react';
import NavBar from '../components/NavBar';
import HeroSection from '../components/HeroSection';
import Reviews from '../components/Reviews';
import Feature from '../components/Feature';
import Use from '../components/Use';
import Support from '../components/Support';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='min-h-screen flex flex-col bg-[#0E0F1A]'>
      <div className='flex-grow w-full px-[16%] font-sora'>
        <NavBar />
        <HeroSection />
        <Reviews />
        <Feature />
        <Use />
        <Support />
        <Features />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
