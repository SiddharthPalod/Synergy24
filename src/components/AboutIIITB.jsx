import React from 'react';

const AboutIIITB = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="container p-8 flex items-center">
          <div className='w-1/2 justify-center flex'>
            <p className="text-sm text-left w-[35vw]">
              The International Institute of Information Technology Bangalore, also referred to as IIIT-B, is a deemed university that was founded in 1998 with the goal of advancing innovation, entrepreneurship, and education and research in the field of information technology.
              The Karnataka government and the IT sector jointly sponsor the Institute, which is a registered not-for-profit society.
              The institute has a lot of technical clubs and committees run by students in the fields of algorithms, competitive programming, development, open-source, robotics, entrepreneurship, and inclusivity in tech.
            </p>
          </div>
          <div className="w-1/2">
            <h1 className="text-7xl max-sm:text-2xl font-bold text-center">About<br />IIIT-B</h1>
          </div>
        </div>
    </div>
  );
};

export default AboutIIITB;

