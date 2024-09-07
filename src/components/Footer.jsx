import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaArrowRight,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_q8v57gh',
        'template_zoaro9b',
        formData,
        'nROTp691s-KD-RMUJ'
      )
      .then((result) => {
        setStatusMessage('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      })
      .catch((error) => {
        setStatusMessage('Failed to send the message. Please try again.');
      });
  };

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap mb-8">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div>
              <h2 className="text-xl font-bold mb-4">About</h2>
              <p>
                I am a passionate full-stack developer skilled in both front-end
                and back-end technologies. I excel in transforming complex
                problems into elegant solutions, with a strong focus on quality
                and detail.
              </p>
              <ul className="flex mt-5 space-x-3">
                <li>
                  <a href="#" className="text-blue-500 hover:text-white">
                    <FaTwitter size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-700 hover:text-white">
                    <FaFacebook size={20} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-pink-500 hover:text-white">
                    <FaInstagram size={20} />
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div>
              <h2 className="text-xl font-bold mb-4">Services</h2>
              <ul>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:text-gray-400">
                    <FaArrowRight className="mr-2" />
                    Frontend Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:text-gray-400">
                    <FaArrowRight className="mr-2" />
                    Backend/APIs Development
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center hover:text-gray-400">
                    <FaArrowRight className="mr-2" />
                    Full stack Development
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div>
              <h2 className="text-xl font-bold mb-4">Have a Questions?</h2>
              <ul>
                <li className="mb-3 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  <span>Kumasi, Oforikrom KNUST-Ayigya</span>
                </li>
                <li className="mb-3">
                  <a href="tel:+233547337110" className="flex items-center hover:text-gray-400">
                    <FaPhone className="mr-2" />
                    +233 54 733 7110
                  </a>
                </li>
                <li className="mb-3">
                  <a href="mailto:yengsebastians@gmail.com" className="flex items-center hover:text-gray-400">
                    <FaEnvelope className="mr-2" />
                    yengsebastians@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <div>
              <h2 className="text-xl font-bold mb-4">Contact Me</h2>
              <form onSubmit={handleSubmit} className="bg-gray-700 p-6 rounded-lg">
                <div className="mb-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Message"
                    rows="4"
                    required
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-lg transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
                {statusMessage && <p className="text-center mt-4">{statusMessage}</p>}
              </form>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
