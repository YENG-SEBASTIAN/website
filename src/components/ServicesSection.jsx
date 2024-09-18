import React from 'react';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { FaDatabase, FaCode } from 'react-icons/fa';
import frontend from '../assets/images/frontend.jpg';
import backend from '../assets/images/backend.jpg';
import fullstack from '../assets/images/image_3.jpg';
import dataanalysis from '../assets/images/data_analysis.jpeg';

const ServicesSection = () => {
  return (
    <section className="ftco-section" id="services-section">
      <div className="container mx-auto">
        <div className="py-5 mt-5 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">What I do</h1>
          <p className="text-gray-600">Unlocking Success Through Exceptional Development Transforming Vision into Reality for Business Growth</p>
        </div>
        <div className="flex flex-wrap justify-center">
          <ServiceItem
            icon={<AiOutlineAntDesign className="text-5xl" />}
            title="Frontend"
            image={frontend}
          />
          <ServiceItem
            icon={<AiOutlineApi className="text-5xl" />}
            title="Backend"
            image={backend}
          />
          <ServiceItem
            icon={<FaCode className="text-5xl" />}
            title="Full Stack"
            image={fullstack}
          />
          {/* <ServiceItem
            icon={<FaDatabase className="text-5xl" />}
            title="Data Analysis"
            image={dataanalysis}
          /> */}
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, image }) => {
  return (
    <div className="w-full md:w-1/3 lg:w-1/3 p-4 text-center">
      <div
        className="block bg-gray-800 rounded-lg shadow-md overflow-hidden hover:bg-gray-700 transition duration-300"
      >
        <div className="relative w-full h-64 bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
          <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white">
            <span className="text-5xl mb-4">{icon}</span>
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
