import React from 'react';
import bg3 from '../assets/images/bg_3.png';

const AboutSection = () => {
  return (
    <section className="ftco-about img ftco-section ftco-no-pb" id="about-section">
      <div className="container mx-auto">
        <div className="md:flex">
          {/* Image Section */}
          <div className="md:w-1/2 relative">
            <div className="img-about img relative h-full">
              <div className="overlay absolute inset-0 bg-gray-800 opacity-75"></div>
              <div
                className="img h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${bg3})`,
                  width: '100%',
                  height: '100%',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              ></div>
            </div>
          </div>
          {/* Content Section */}
          <div className="md:w-1/2 pl-8 flex items-center">
            <div className="pt-20 md:pt-0">
              <div className="mb-8 text-center md:text-left"> {/* Center text on mobile, left align on md and larger screens */}
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 relative inline-block after:absolute after:left-0 after:top-0 after:bottom-0 after:z-[-1] after:w-full after:h-full mt-3">About</h1>
              </div>
              <div className="text-gray-700 leading-relaxed">
                <p className="mb-4">
                  I am a passionate and dedicated full-stack developer with a strong foundation in both front-end and back-end technologies with a keen eye for detail and a commitment to delivering high-quality work, I thrive on transforming complex problems into elegant, efficient solutions. My journey in development has equipped me with a diverse skill set, enabling me to build robust, scalable applications from scratch.
                </p>
                <p className="mb-4">
                  I am always eager to learn and stay updated with the latest industry trends and technologies. This continuous learning mindset ensures that I bring innovative solutions to the projects I work on, making sure they are future-proof and maintainable. Whether I'm working independently or as part of a collaborative team, my goal is always the same: to create exceptional digital experiences that exceed expectations and deliver real value to users.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
