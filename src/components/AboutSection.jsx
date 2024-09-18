import React, { useState } from 'react';
import ProjectsSection from './ProjectsSection';
import ServicesSection from './ServicesSection';

// Dummy components for the tabs
const Service = () => <div>Service Content</div>;
const Resume = () => <div>Resume Content</div>;

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('Projects'); // Default tab

  // Handle tab switching
  const renderTabContent = () => {
    switch (activeTab) {
      case 'Projects':
        return <ProjectsSection />;
      case 'Service':
        return <ServicesSection />;
      case 'Resume':
        return <Resume />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <section className="about-section ftco-about img ftco-section ftco-no-pb py-10">
      <div className="container mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row">
          {/* Left Column: Contact Information */}
          <div className="w-full md:w-4/12 mb-8 md:mb-0 md:mr-8">
            <div className="card bg-gray-800 text-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl mb-4 text-center md:text-left">Contact Info</h3>
              <ul className="list-none leading-relaxed">
                <li className="mb-2"><strong>Phone:</strong> +233 200 037 753</li>
                <li className="mb-2"><strong>WhatsApp:</strong> +233 547 337 110</li>
                <li className="mb-2"><strong>Email:</strong> <a href="mailto:yengsebastians@gmail.com" className="text-blue-500">yengsebastians@gmail.com</a></li>
                <li className="mb-2"><strong>Git:</strong> <a href="https://github.com/YENG-SEBASTIAN" target="_blank" rel="noreferrer" className="text-blue-500">YENG-SEBASTIAN</a></li>
                <li><strong>Work:</strong> Available</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Tabs and Tab Content */}
          <div className="w-full md:w-8/12 flex flex-col items-center md:items-start">
            <div className="tabs w-full">
              <ul className="flex justify-center space-x-8 border-b-2 border-gray-300 pb-2 mb-6">
                <li
                  className={`cursor-pointer ${activeTab === 'Projects' ? 'font-bold text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('Projects')}
                >
                  Projects
                </li>
                <li
                  className={`cursor-pointer ${activeTab === 'Service' ? 'font-bold text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('Service')}
                >
                  Service
                </li>
                <li
                  className={`cursor-pointer ${activeTab === 'Resume' ? 'font-bold text-blue-600 border-b-2 border-blue-600' : 'text-gray-600'}`}
                  onClick={() => setActiveTab('Resume')}
                >
                  Resume
                </li>
              </ul>

              {/* Tab Content */}
              <div className="tab-content p-6 bg-white shadow rounded-lg w-full">
                {renderTabContent()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
