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
        <div className="hidden lg:block">
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Vivamus lacinia odio ipsum dolor sit, amet consectetur magnam tempore.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Vivamus lacinia odio ipsum dolor sit, amet consectetur magnam tempore.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Vivamus lacinia odio ipsum dolor sit, amet consectetur magnam tempore.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Vivamus lacinia odio ipsum dolor sit, amet consectetur magnam tempore.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Vivamus lacinia odio ipsum dolor sit, amet consectetur adipisc.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipisc sdkfjdfdv.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipisc dsfdsf.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipisc dfns.</p>
        </div>

        {/* Paragraphs for small screens */}
        <div className="block lg:hidden">
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
          <p className="text-sm sm:text-base md:text-lg text-white">Lorem ipsum dolor sit amet, consectetur.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
