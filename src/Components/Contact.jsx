import React from 'react';
import './Startup.css';
import linkedinImage from '../images/linkedin.png';
import instagramImage from '../images/instagram.svg';
import githubImage from '../images/github-svgrepo-com.svg';
import emailImage from '../images/email.svg';

const Contact = () => {
  return (
    <div id="contact" className="bg-white text-black p-10 min-h-screen flex flex-col justify-center items-center">
      <div className="mb-6">
        <h2 className="text-3xl font-bold">Let's connect!</h2>
      </div>
      <p className="mb-3 text-center">
        I'm always open to new opportunities, collaborations, and discussions about technology.
      </p>

      <div className="flex flex-col md:flex-row md:space-x-4 text-center">
        {/* Email */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={emailImage}
            alt="Email"
            className="h-6 w-6 mr-2"
          />
          <a href="mailto:utsavmahato05@gmail.com" className="hover:text-gray-300">
            utsavmahato05@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={linkedinImage}
            alt="LinkedIn"
            className="h-6 w-6 mr-2"
          />
          <a href="https://www.linkedin.com/in/utsav-mahato" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src={instagramImage}
            alt="Instagram"
            className="h-6 w-6 mr-2 text-orange-400"
          />
          <a href="https://www.instagram.com/utsav_clicks" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Instagram
          </a>
        </div>

        {/* Github */}
        <div className="flex items-center">
          <img
            src={githubImage}
            alt="Github"
            className="h-6 w-6 mr-2"
          />
          <a href="https://www.github.com/utsavc" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
