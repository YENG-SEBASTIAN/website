import React from 'react';
import { FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import bg1 from '../assets/images/bg_1.png';
import cv from '../assets/files/SEBASTIAN_YENG.pdf';

const HeroSection = () => {
  return (
    <section id="home-section" className="hero bg-gray-800 text-white min-h-screen relative">
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-center px-4 md:px-8">
        {/* Text Content */}
        <div className="md:w-1/2 w-full flex flex-col items-center md:items-start text-center md:text-left mb-10 md:mb-0">
          <span className="subheading text-gray-400 block mb-2">Hello!</span>
          <h1 className="mb-4 text-3xl md:text-5xl font-bold">
            I'm <span className="text-blue-500">Yeng Sebastian</span>
          </h1>
          <h5 className="mb-4 text-xl md:text-3xl font-semibold">Software Engineer</h5>
          <p className="mb-6">
            With a knack for innovation and an eye for detail, I specialize in building software 
            solutions that transform ideas into reality. My passion lies in solving problems and 
            delivering user-centric experiences that drive success. Always staying ahead of the curve, 
            I’m committed to pushing the limits of technology to create a better future.
          </p>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <a 
              href={cv} 
              download 
              className="btn btn-primary bg-blue-600 text-white py-3 px-6 rounded-full flex items-center justify-center"
            >
              <FaFileAlt className="mr-2" /> Download CV
            </a>
            <a 
              href="https://wa.me/233547337110" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline border-2 border-white text-white py-3 px-6 rounded-full flex items-center justify-center"
            >
              <FaWhatsapp className="mr-2" /> Let's talk
            </a>
          </div>
        </div>
        {/* Image */}
        <div className="md:w-1/2 w-full flex justify-center">
          <img 
            src={bg1} 
            alt="Yeng Sebastian" 
            className="h-auto w-full max-w-xs md:max-w-md object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
