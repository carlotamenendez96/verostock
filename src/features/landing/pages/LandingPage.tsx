import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Solution from '../components/Solution';
import Benefits from '../components/Benefits';
import Pioneer from '../components/Pioneer';
import About from '../components/About';
import TechSpecs from '../components/TechSpecs';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background-dark overflow-x-hidden">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Benefits />
        <Pioneer />
        <About />
        <TechSpecs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
