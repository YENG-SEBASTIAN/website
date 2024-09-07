import React from 'react';
import bg1 from '../assets/images/bg_1.jpg';

const HireMeSection = () => {
  return (
    <section
      className="ftco-section ftco-hireme img bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg1})`, height: '400px' }}
    >
      <div className="container text-center">
        <h2 className="text-3xl font-bold text-white">
          I'm <span className="text-primary">Available</span> for job opportunities
        </h2>
        <p className="text-gray-200 mb-5">
          Passionate about building innovative and scalable web applications. <br></br> I’m always on the lookout for new opportunities to contribute to impactful projects. Let’s work together to bring your ideas to life.
        </p>
        <p className="mb-0">
          <a href="#" className="btn btn-primary py-3 px-5">
            Hire me
          </a>
        </p>
      </div>
    </section>
  );
};

export default HireMeSection;
