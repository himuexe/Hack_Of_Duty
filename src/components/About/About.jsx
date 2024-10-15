import React from 'react';
import boxlg from '../../assets/boxlg.png';
import boxsm from '../../assets/boxsm.png';

const About = () => {
  return (
    <div className="h-screen flex items-center justify-center relative">
      {/* Large screen image with increased size */}
      <img 
        src={boxlg} 
        alt="Large Box" 
        className="hidden w-3/5 md:w-3/5 lg:w-3/5 xl:w-2/3 h-auto z-0 lg:block m-4" 
      /> {/* Adjusted sizes for larger box */}

      {/* Small screen image */}
      <img 
        src={boxsm} 
        alt="Small Box" 
        className="block w-9/10 h-auto lg:hidden z-0" 
      />

      <div className="absolute text-center z-10 top-1/4 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white mb-2 mt-5" style={{ fontFamily: 'Black Ops One, sans-serif' }}>HACK OF DUTY</h1>
        
        {/* Paragraphs for larger screens */}
        <div style={{fontFamily: 'Hitmarker'}} className="hidden lg:block">
          <p className="flex text-sm sm:text-base md:text-lg text-white justify-end w-[40%] ml-[29vw] ">Hack of Duty is the flagship 24-hour hackathon organized by SRMSIGKDD, where innovation meets relentless coding! Bringing together bright minds from various domains, this fast-paced event challenges participants to solve real-world problems in healthcare, NLP, computer vision, and edtech. With just 24 hours on the clock, teams will need to brainstorm, prototype, and pitch their most creative and impactful solutions. It’s a race against time to show technical prowess, creative thinking, and collaborative energy, all in the name of duty to innovation!</p>
          
        </div>

          {/* Paragraphs for small screens */}
        <div className="block lg:hidden">
          <p className="text-sm sm:text-base md:text-lg text-white">Hack of Duty is the flagship 24-hour</p>
          <p className="text-sm sm:text-base md:text-lg text-white">hackathon organized by SRMSIGKDD,</p>        
          <p className="text-sm sm:text-base md:text-lg text-white">where innovation meets relentless</p>
          <p className="text-sm sm:text-base md:text-lg text-white">coding! Bringing together bright minds</p>
          <p className="text-sm sm:text-base md:text-lg text-white">from various domains, this fast-paced</p>
          <p className="text-sm sm:text-base md:text-lg text-white">event challenges participants to solve</p>
          <p className="text-sm sm:text-base md:text-lg text-white">real-world problems in healthcare, NLP,</p>
          <p className="text-sm sm:text-base md:text-lg text-white">computer vision, and edtech. With just</p>
          <p className="text-sm sm:text-base md:text-lg text-white">24 hours on the clock, teams will need</p>
          <p className="text-sm sm:text-base md:text-lg text-white">to brainstorm, prototype, and pitch</p>
          <p className="text-sm sm:text-base md:text-lg text-white">their most creative and impactful</p>
          <p className="text-sm sm:text-base md:text-lg text-white">solutions. It’s a race against time to</p>
          <p className="text-sm sm:text-base md:text-lg text-white">show technical prowess, creative</p>
          <p className="text-sm sm:text-base md:text-lg text-white">thinking, and collaborative energy, all</p>
          <p className="text-sm sm:text-base md:text-lg text-white">in the name of duty to innovation!</p>
        </div>
      </div>
    </div>
  );
}

export default About;
