import React from 'react';
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { FaDatabase, FaCode } from 'react-icons/fa';
import frontend from '../assets/images/frontend.jpg';
import backend from '../assets/images/backend.jpg';
import fullstack from '../assets/images/image_3.jpg';
import dataanalysis from '../assets/images/data_analysis.jpeg';

const ServicesSection = () => {
  return (
    <section className="ftco-section py-5 " id="services-section">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
          <ServiceItem
            icon={<FaDatabase className="text-5xl" />}
            title="Data Analysis"
            image={dataanalysis}
          />
        </div>
      </div>
    </section>
  );
};

const ServiceItem = ({ icon, title, image }) => {
  return (
    <div className="relative bg-gray-800 rounded-lg shadow-md overflow-hidden hover:bg-gray-700 transition duration-300">
      <div
        className="w-full h-64 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-white p-4">
          <span className="text-5xl mb-4">{icon}</span>
          <h3 className="text-xl font-semibold text-center">{title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
