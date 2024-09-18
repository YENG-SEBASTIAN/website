import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import MousePointerWave from './components/MousePointerWave';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Footer />
      <MousePointerWave />
    </React.Fragment>
  );
}

export default App;
