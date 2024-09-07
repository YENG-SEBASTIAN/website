import React from 'react';

const SkillsSection = () => {
  return (
    <section className="ftco-section mt-16 mb-16 bg-gray-100 py-12" id="skills-section">
      <div className="container mx-auto px-4">
        <div className="pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Skills</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            I specialize in developing responsive, dynamic, and scalable web applications. My expertise spans full-stack development, data analysis, and machine learning, ensuring that business goals are met through innovative and efficient coding practices.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <SkillItem title="HTML5 & CSS" description="Crafting modern, responsive web layouts with clean, semantic code." />
          <SkillItem title="JavaScript & ES6+" description="Developing dynamic applications using modern JavaScript and ES6+ features." />
          <SkillItem title="React.js & Redux" description="Building modern, scalable user interfaces and managing state with Redux." />
          <SkillItem title="Python-Django/Rest API" description="Creating powerful, scalable back-end systems using Django." />
          <SkillItem title="Node.js & Express" description="Building robust back-end applications and APIs using Node.js." />
          <SkillItem title="PostgreSQL, MySQL, SQLite" description="Designing and managing relational databases for high performance." />
          <SkillItem title="Data Analysis & Pandas" description="Processing and analyzing data with Pandas and other Python libraries." />
          <SkillItem title="Machine Learning with Scikit-Learn/Tensorflow" description="Developing machine learning models to extract insights and drive decisions." />
          <SkillItem title="Celery & RabbitMQ" description="Implementing task queues and background jobs using Celery and RabbitMQ." />
        </div>
      </div>
    </section>
  );
};

const SkillItem = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 text-center hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-semibold mb-3 text-blue-600">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default SkillsSection;
