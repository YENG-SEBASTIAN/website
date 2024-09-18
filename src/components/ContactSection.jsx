import React from 'react';
import { FaMapSigns, FaPhone, FaWhatsapp, FaPaperPlane } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <section className="ftco-section contact-section ftco-no-pb mt-10 mb-5" id="contact-section">
      <div className="container">
        <div className="row justify-center mb-5 pb-3">
          <div className="col-md-7 text-center">
            <h1 className="text-5xl font-bold">Contact</h1>
            <p className="text-gray-600">You can reach out to me through the below addresses or contacts</p>
          </div>
        </div>

        <div className="row flex flex-wrap justify-center mb-5">
          <ContactInfo
            Icon={FaMapSigns}
            title="Address"
            description="Kumasi, Oforikrom KNUST-Ayigya"
          />
          <ContactInfo
            Icon={FaPhone}
            title="Contact Number"
            description={<a href="tel://233200037753">+233200037753 / +233547337110</a>}
          />
          <ContactInfo
            Icon={FaWhatsapp}
            title="WhatsApp"
            description={<a href="#">+233547337110</a>}
          />
          <ContactInfo
            Icon={FaPaperPlane}
            title="Email Address"
            description={<a href="mailto:yengsebastians@gmail.com">yengsebastians@gmail.com</a>}
          />
        </div>

      </div>
    </section>
  );
};

const ContactInfo = ({ Icon, title, description }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
      <div className="p-4 text-center bg-gray-800 shadow-lg rounded-lg">
        <div className="icon mb-4 flex justify-center items-center text-4xl text-white">
          <Icon />
        </div>
        <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
};

export default ContactSection;
