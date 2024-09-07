import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from '../assets/images/bg_1.png';
import bg2 from '../assets/images/bg_2.png';

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: false,
        }
      }
    ]
  };

  return (
    <section id="home-section" className="hero bg-gray-800 text-white min-h-screen relative">
      <Slider {...settings}>
        {/* First Slide */}
        <div className="slider-item h-screen">
          <div className="container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start h-full px-5 md:px-10 mt-10 md:mt-0 md:ml-16">
              <div className="text-left">
                <span className="subheading text-gray-400 block">Hello!</span>
                <h1 className="mb-4 mt-3 text-4xl md:text-5xl font-bold">I'm <span className="text-blue-500">Yeng Sebastian</span></h1>
                <h2 className="mb-4 text-2xl md:text-3xl font-semibold">A Software Engineer</h2>
                <div className="flex space-x-4 mt-5">
                  <a href="#contact-section" className="btn btn-primary bg-blue-600 text-white py-3 px-6 rounded-full">Hire me</a>
                  <a href='#projects-section' className="btn btn-outline border-2 border-white text-white py-3 px-6 rounded-full">My works</a>
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

        {/* Second Slide */}
        <div className="slider-item h-screen">
          <div className="container mx-auto h-full flex flex-col-reverse md:flex-row items-center justify-center">
            <div className="md:w-1/2 w-full flex items-center justify-center md:justify-start h-full px-5 md:px-10 mt-10 md:mt-0 md:ml-16">
              <div className="text-left">
                <span className="subheading text-gray-400 block">Hello!</span>
                <h1 className="mb-4 mt-3 text-4xl md:text-5xl font-bold">I'm a <span className="text-blue-500">Fullstack Developer</span> based in Ghana</h1>
                <div className="flex space-x-4 mt-5">
                  <a href='#contact-section' className="btn btn-primary bg-blue-600 text-white py-3 px-6 rounded-full">Hire me</a>
                  <a href='#projects-section' className="btn btn-outline border-2 border-white text-white py-3 px-6 rounded-full">My works</a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex justify-center h-full">
              <img 
                src={bg2} 
                alt="Fullstack Developer" 
                className="h-auto w-full max-w-md object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default HeroSection;
