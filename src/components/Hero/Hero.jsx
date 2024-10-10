import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import Icon from '../../assets/logo.png';
import Image from '../../assets/herohai.png';
import "./Hero.css"

const NeonButton = ({ text = 'Register Now' }) => {
  return (
    <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
      <button className="px-6 py-3 bg-orange-500 bg-opacity-20 border-2 border-orange-500 rounded-md text-orange-500 text-xl font-semibold relative overflow-hidden group transition-all duration-300 hover:bg-opacity-30 hover:scale-105">
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 bg-orange-500 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
      </button>
    </a>
  );
};
export const Hero = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  useEffect(() => {
    if (animate) {
      gsap.timeline()
        .from('.hero-title', {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        .from('.hero-context-left', {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        })
        .from('.hero-context-right', {
          x: 100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut'
        });
    }
  }, [animate]);

  return (
    <div className="parent h-screen flex flex-col">
      <div className={`hero flex flex-col flex-1 gap-10 px-24 h-1/2 ${animate ? 'animate' : ''}`}>
        <div className="hero-title flex flex-col w-full text-4xl md:text-5xl lg:text-6xl">
          <span className='flex justify-start '>HACK OF</span>
          <span className="flex justify-end">DUTY</span>
        </div>
        <div className="hero-context flex flex-row w-full">
          <div className="hero-context-left flex flex-col gap-2 items-center justify-center text-9xl md:text-[12rem] lg:text-[15rem]">
            <span>28-29</span>
            <span>OCTOBER</span>
          </div>
          <div className="hero-context-right px-24">
            <NeonButton />
          </div>
        </div>
      </div>
      <img src={Image} alt="Image" className='image absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2' />
    </div>
  );
};

export default Hero;
