import React from 'react';

const MyDetails = () => {
  const workHistory = [
    {
      id: 1,
      position: 'Software Developer',
      company: 'Intelzy Softwares',
      year: 'Sept 2020 - Sep 2023'
    },
    {
      id: 2,
      position: 'Intern',
      company: 'Khandekar Electronic Education Technology',
      year: '2018-2018'
    },
    {
      id: 3,
      position: 'Assistant Lecturer',
      company: 'Boston International College, United Technical College',
      year: '2018 - 2023',
    },
  ];

  return (
    <div className="flex items-center justify-center h-screen" id='about'>
      <div className="bg-white p-8 rounded-lg shadow-lg my-details-card">
        <h2 className="text-3xl font-bold mb-4">🚀 My Details</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4 my-details-card">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Personal Information</h3>
            <p className="text-gray-700">
              <strong>Name:</strong> Utsav Mahato
            </p>
            <p className="text-gray-700">
              <strong>Role:</strong> Software Developer
            </p>
            <p className="text-gray-700">
              <strong>Location:</strong> Brisbane, Queensland, Australia
            </p>
          </div>

          <div className="mb-4 my-details-card">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Educational Background</h3>
            <p className="text-gray-700">
              <strong>University:</strong> Bangalore University
            </p>
            <p className="text-gray-700">
              <strong>Degree:</strong> Master of Computer Application in Computer Science
            </p>
            <p className="text-gray-700">
              <strong>Year of Graduation:</strong> 2018
            </p>
          </div>

          <div className="my-details-card">
            <h3 className="text-xl font-bold mb-2 text-gray-800">Work History</h3>
            {workHistory.map((job) => (
              <div key={job.id} className="mb-4">
                <p className="text-lg font-bold text-gray-700">{job.position}</p>
                <p className="text-gray-600">{job.company}</p>
                <p className="text-gray-600">{job.year}</p>
                <p className="text-gray-700">{job.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDetails;
