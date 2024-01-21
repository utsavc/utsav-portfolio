import React from 'react';
import laravel from "../images/laravel.jpg";
import reactimg from "../images/reac.jpeg";
import springBoot from "../images/spring boot.png";
import MySQLImg from "../images/mysql.png";
import tailwind from "../images/tailwind.png";
import bootstrap from "../images/bootstrap.png";

const TechStack = () => {
  return (
    <div className="g-gray-100 bg-gray-700 p-16" id='techStack'>
      <div className="text-center mb-8">
        <h2 className="text-3xl text-white font-bold">Tech Stack</h2>
        <p className="text-white">Skills and technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <TechStackItem imageSrc={laravel} />
        <TechStackItem imageSrc={reactimg} />
        <TechStackItem imageSrc={springBoot} />
        <TechStackItem imageSrc={MySQLImg} />
        <TechStackItem imageSrc={tailwind} />
        <TechStackItem imageSrc={bootstrap} />
      </div>
    </div>
  );
};

const TechStackItem = ({ imageSrc, alt, title, description }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-6 tech-stack-item">
      <img className="mx-auto mb-4" src={imageSrc} alt={alt} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default TechStack;
