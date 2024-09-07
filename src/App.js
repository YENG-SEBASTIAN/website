// App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection';
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
      <ProjectsSection />
      {/* <BlogSection /> */}
      <HireMeSection />
      <ContactSection />
      <Footer />
      <MousePointerWave />
    </React.Fragment>
  );
}

export default App;
