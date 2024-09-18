// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import HireMeSection from './components/HireMeSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import MousePointerWave from './components/MousePointerWave';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SkillsSection />
      <HireMeSection />
      <ContactSection />
      <Footer />
      <MousePointerWave />
    </React.Fragment>
  );
}

export default App;
