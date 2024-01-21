import React from 'react';

const projectsData = [
  {
    id: 1,
    name: 'Easy Multi Trade',
    description: 'Built a responsive web application using Laravel and Bootstrap for trading of different items with members of a cooperative organization in Nepal ',
  },
  {
    id: 2,
    name: 'QR Coupon Verifier',
    description: 'A Coupon verifier using QR scanner, built for BIC Hackathon using PHP, MySQL ',
  },
  {
    id: 3,
    name: 'Blog Platform',
    description: 'Created a blog platform using PHP, MySQL and React JS with CRUD operations.',
  },
  {
    id: 4,
    name: 'Webull Scrapper',
    description: 'A Webull data scrapping application built using Java 8, Spring boot and PostgreSQL',
  },
  {
    id: 5,
    name: 'Portfolio Website',
    description: 'Designed and developed a personal portfolio website showcasing skills, projects, and contact information.',
  },
  {
    id: 6,
    name: 'Research Assessment Project',
    description: 'Built a social media dashboard with data visualization using chart libraries and React.',
  },
  {
    id: 7,
    name: 'Smart Spend',
    description: 'Developed an App in Laravel which tracks the expenses and lets authority reject or accept expenses',
  },
  {
    id: 8,
    name: 'Inventory Management',
    description: 'Developed a desktop application using C#, MySQL which helps to manage the inventory.',
  },
  // {
  //   id: 9,
  //   name: 'Accounting Software',
  //   description: 'Developed a job search platform that aggregates job listings from various sources and provides search functionality.',
  // },
];

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white p-10 rounded-md shadow-md myproject">
      <h3 className="text-xl font-bold mb-2">{project.name}</h3>
      <p className="text-gray-600">{project.description}</p>
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-100 p-10 min-h-screen pt-16" id="projects">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-gray-600">Check out some of my projects</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
