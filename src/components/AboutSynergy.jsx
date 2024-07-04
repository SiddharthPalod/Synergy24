import React from 'react';

const AboutSynergy = () => {
  return (
    <div className="min-h-screen text-white">
      <div className="container mx-auto p-8">
        <div className="">
          <div className="h-[100vh] bg-redbg z-10 w-[50vw] absolute left-0 top-0 flex justify-center items-center">
            <h1 className="text-7xl max-sm:text-2xl font-bold text-center">About<br />Synergy</h1>
          </div>
          <div className='w-[35vw] absolute right-10 top-1/4'>
            <p className="text-lg text-right">
              Synergy'24 is the annual techfest of IIIT-Bangalore, bringing together innovation and collaboration in an exciting event.
              It includes hackathons, coding competitions, and entrepreneurial challenges, giving students a chance to show off their skills and creativity.
              Attendees can learn from top industry leaders through talks and workshops, gaining useful insights and inspiration.
              The event also celebrates the diverse culture of the institute, bringing together students, professors, researchers, and engineers in a fun and creative technical festival.
              Synergy'24 showcases the power of teamwork and effort in shaping the future of technology and society.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSynergy;
