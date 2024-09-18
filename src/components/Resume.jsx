import React from 'react';
import { FaPython, FaJs, FaReact, FaNodeJs, FaDatabase, FaGit, FaGithub, FaBootstrap } from 'react-icons/fa';
import { DiDjango, DiPhp, DiCss3, DiHtml5 } from 'react-icons/di';
import { SiTensorflow, SiPostgresql, SiMongodb, SiOracle } from 'react-icons/si';

const Resume = () => {
return (
<div className="resume-content bg-gray-800 text-white p-6 rounded-lg shadow-lg">
    <section className="mb-8">
    <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
    <ul className="list-none space-y-4">
        <li>
        <span className="text-gray-400"><i>November 2023 - September 2024</i></span>
        <h5 className="text-lg font-semibold">Software Engineer</h5>
        <span className="text-gray-400">National Service Personnel</span>
        <h6 className="font-semibold mt-2">Kwame Nkrumah University of Science and Technology</h6>
        <ul className="list-disc ml-6 mt-2 space-y-2">
            <li><strong>Mass SMS Message Application (TekNotify)</strong></li>
            <li><strong>Asset Tracking</strong></li>
        </ul>
        <p className="mt-2">
            Developed and maintained TekNotify, a web-based SMS messaging application, and an asset tracking system using Django and .NET. Applied various technologies for system enhancement, gained hands-on experience with Agile methodologies, and collaborated with teams to support project goals.
        </p>
        </li>

        <li>
        <span className="text-gray-400"><i>January 2024 - April 2024</i></span>
        <h5 className="text-lg font-semibold">Software Engineer</h5>
        <span className="text-gray-400">Freelance</span>
        <h6 className="font-semibold mt-2">Clinical Communication Network (CCN)</h6>
        <p className="mt-2">
            Worked on a Flutter-based chat app with a Node.js backend, implementing real-time communication features and detailed API documentation.
        </p>
        </li>

        <li>
        <span className="text-gray-400"><i>November 2023 - December 2023</i></span>
        <h5 className="text-lg font-semibold">Software Engineer</h5>
        <span className="text-gray-400">Freelance</span>
        <h6 className="font-semibold mt-2">FEAD-Ghana Website</h6>
        <p className="mt-2">
            Developed web-based solutions for FEAD Ghana using HTML, Bootstrap, and Django, enhancing their online presence.
        </p>
        </li>

        <li>
        <span className="text-gray-400"><i>October 2022 - December 2022</i></span>
        <h5 className="text-lg font-semibold">Software Engineer</h5>
        <span className="text-gray-400">Internship</span>
        <h6 className="font-semibold mt-2">Hepeps Solution</h6>
        <p className="mt-2">
            Contributed to the development of a project management system with React.js and Django, including frontend, backend, and deployment.
        </p>
        </li>
    </ul>
    </section>

    <section>
    <h3 className="text-xl font-semibold mb-4">Skills & Technologies</h3>
    <ul className="flex flex-wrap gap-4">
        <li className="flex items-center"><FaPython className="text-2xl mr-2" /> Python</li>
        <li className="flex items-center"><FaJs className="text-2xl mr-2" /> JavaScript</li>
        <li className="flex items-center"><FaReact className="text-2xl mr-2" /> React.js</li>
        <li className="flex items-center"><FaNodeJs className="text-2xl mr-2" /> Node.js</li>
        <li className="flex items-center"><DiDjango className="text-2xl mr-2" /> Django</li>
        <li className="flex items-center"><DiHtml5 className="text-2xl mr-2" /> HTML</li>
        <li className="flex items-center"><DiCss3 className="text-2xl mr-2" /> CSS</li>
        <li className="flex items-center"><DiCss3 className="text-2xl mr-2" /> Tailwind CSS</li>
        <li className="flex items-center"><FaDatabase className="text-2xl mr-2" /> MySQL</li>
        <li className="flex items-center"><SiPostgresql className="text-2xl mr-2" /> PostgreSQL</li>
        <li className="flex items-center"><SiOracle className="text-2xl mr-2" /> Oracle</li>
        <li className="flex items-center"><SiMongodb className="text-2xl mr-2" /> MongoDB</li>
        <li className="flex items-center"><FaGit className="text-2xl mr-2" /> Git</li>
        <li className="flex items-center"><FaGithub className="text-2xl mr-2" /> GitHub</li>
        <li className="flex items-center"><FaBootstrap className="text-2xl mr-2" /> Bootstrap</li>
        <li className="flex items-center"><SiTensorflow className="text-2xl mr-2" /> TensorFlow</li>
        <li className="flex items-center"><DiPhp className="text-2xl mr-2" /> PHP</li>
    </ul>
    </section>
</div>
);
};

export default Resume;
