import React from 'react';

const AboutIIITB = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className='w-2/3'>
            <p className="text-lg ">
              The International Institute of Information Technology Bangalore, also referred to as IIIT-B, is a deemed university that was founded in 1998 with the goal of advancing innovation, entrepreneurship, and education and research in the field of information technology.
              The Karnataka government and the IT sector jointly sponsor the Institute, which is a registered not-for-profit society.
              The institute has a lot of technical clubs and committees run by students in the fields of algorithms, competitive programming, development, open-source, robotics, entrepreneurship, and inclusivity in tech.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="text-7xl font-bold">About<br />IIIT-B</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIIITB;
