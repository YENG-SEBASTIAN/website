import React from 'react';
import { FaEye, FaGithub } from 'react-icons/fa';
import bg1 from '../assets/images/feadghana.png';
import bg2 from '../assets/images/yenko.jpeg';
import bg3 from '../assets/images/aensongahearts.png';
import bg4 from '../assets/images/invoice.jpeg';
import bg5 from '../assets/images/manageTool.png';
import bg6 from '../assets/images/diet.png';

const ProjectsSection = () => {
  return (
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container mx-auto">
        <div className="pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Projects</h1>
          <p>Some sample projects I have worked on</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard
            image={bg1}
            title="Fead Ghana"
            category="Website Design"
            liveUrl="https://www.feadghana.org/"
            // githubUrl=""
          />
          <ProjectCard
            image={bg6}
            title="Diet Recommender"
            category="AI diet recommener web app"
            liveUrl="https://ml-diet.onrender.com/"
            githubUrl="https://github.com/YENG-SEBASTIAN/ML-diet"
          />
          <ProjectCard
            image={bg5}
            title="Project management tool"
            category="Web App"
            liveUrl="https://project-management-tool-indol.vercel.app/"
            githubUrl="https://github.com/YENG-SEBASTIAN/project-management-tool-API"
          />
          <ProjectCard
            image={bg3}
            title="Aensonga Hearts"
            category="Website Design"
            liveUrl="https://www.aensongahearts.org/"
            // githubUrl="https://github.com/user/aensongahearts"
          />
          <ProjectCard
            image={bg4}
            title="Invoice App"
            category="Invoice Management app"
            // liveUrl="https://invoiceapp.com"
            // githubUrl="https://github.com/user/invoiceapp"
          />
            <ProjectCard
            image={bg2}
            title="Yenko"
            category="Web App"
            liveUrl="https://yennko.netlify.app"
            // githubUrl="https://github.com/user/yenko"
          />
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ image, title, category, liveUrl, githubUrl }) => {
  return (
    <div className="relative group max-w-sm mx-auto mb-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Image section */}
        <div className="relative h-64">
          <img
            src={image}
            className="w-full h-full object-cover object-center"
            alt={title}
            style={{ height: '100%' }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
            <div className="flex space-x-4">
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-blue-500"
              >
                <FaEye />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white text-2xl hover:text-blue-500"
              >
                <FaGithub />
              </a>
            </div>
          </div>
        </div>
        {/* Text section */}
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 mb-2">{category}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
