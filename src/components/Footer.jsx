import React from 'react';
import { FaTwitter, FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Availability Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">
            I'm <span className="text-blue-500">Available</span> for job opportunities
          </h2>
          <p className="text-gray-300 mb-5">
            Enthusiastic about crafting cutting-edge and scalable web solutions. <br />
            I am eager to explore new opportunities that allow me to contribute to meaningful and transformative projects.
          </p>
          <a
            href="https://wa.me/233547337110"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            <FaWhatsapp className="mr-2" size={20} />
            Let's Talk
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a href="https://twitter.com" className="text-blue-500 hover:text-blue-400">
            <FaTwitter size={24} />
          </a>
          <a href="https://facebook.com" className="text-blue-700 hover:text-blue-600">
            <FaFacebook size={24} />
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Copyright */}
        <div>
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
