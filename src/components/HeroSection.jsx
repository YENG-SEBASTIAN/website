import React from 'react';
import { FaFileAlt, FaWhatsapp } from 'react-icons/fa';
import bg1 from '../assets/images/bg_1.png';
import cv from '../assets/files/SEBASTIAN_YENG.pdf';

const HeroSection = () => {
  return (
    <section id="home-section" className="hero bg-gray-800 text-white min-h-screen relative">
      <div className="slider-item h-screen">
        <div className="container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-center">
          <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start h-full px-5 md:px-10 mt-10 md:mt-0 md:ml-16">
            <div className="text-left">
              <span className="subheading text-gray-400 block">Hello!</span>
              <h1 className="mb-4 mt-3 text-4xl md:text-5xl font-bold">I'm <span className="text-blue-500">Yeng Sebastian</span></h1>
              <h5 className="mb-4 text-2xl md:text-3xl font-semibold">Software Engineer</h5>
              <p>
                With a knack for innovation and an eye for detail, I specialize in building software 
                solutions that transform ideas into reality. My passion lies in solving challenges and 
                delivering user-centric experiences that drive success. Always staying ahead of the curve, 
                I’m committed to pushing the limits of technology to create a better future.
              </p>
              <div className="flex space-x-4 mt-5">
                <a href={cv} download className="btn btn-primary bg-blue-600 text-white py-3 px-6 rounded-full flex items-center">
                  <FaFileAlt className="mr-2" /> Download CV
                </a>
                <a href="https://wa.me/233547337110" target='_blank' className="btn btn-outline border-2 border-white text-white py-3 px-6 rounded-full flex items-center">
                  <FaWhatsapp className="mr-2" /> Let's talk
                </a>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full flex justify-center h-full">
            <img 
              src={bg1} 
              alt="Yeng Sebastian" 
              className="h-auto w-full max-w-md object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
