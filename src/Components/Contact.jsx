import React from 'react';
import './Startup.css';
import linkedinImage from '../images/linkedin.png';
import instagramImage from '../images/instagram.svg';
import githubImage from '../images/github-svgrepo-com.svg';
import emailImage from '../images/email.svg';  // Update the path to your Instagram image

const Contact = () => {
  return (
    <div id="contact" className="bg-white text-black p-10 h-screen flex flex-col justify-center items-center">
      <div>
        <h2 className="text-3xl font-bold mb-6"> Let's connect!</h2>
      </div>
      <p className='mb-3'>
        I'm always open to new opportunities, collaborations, and discussions about technology
      </p>

      <div className="flex space-x-4">
        {/* Email */}
        <div className="flex items-center">
        <img
            src={emailImage}
            alt="Instagram"
            className="h-6 w-6 mr-2"
          />
          <a href="mailto:utsavmahato05@gmail.com" className="hover:text-gray-300">
            utsavmahato05@gmail.com
          </a>
        </div>

        {/* LinkedIn */}
        <div className="flex items-center">
          <img
            src={linkedinImage}
            alt="LinkedIn"
            className="h-6 w-6 mr-2"
          />
          <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            LinkedIn
          </a>
        </div>

        {/* Instagram */}
        <div className="flex items-center">
          <img
            src={instagramImage}
            alt="Instagram"
            className="h-6 w-6 mr-2"
          />
          <a href="https://www.instagram.com/your.instagram.handle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Instagram
          </a>
        </div>
        {/* Github */}
        <div className="flex items-center">
          <img
            src={githubImage}
            alt="Instagram"
            className="h-6 w-6 mr-2"
          />
          <a href="https://www.instagram.com/your.instagram.handle" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
