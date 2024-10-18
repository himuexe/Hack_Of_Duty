import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from '../../assets/herohai.webp';
import targetVid from '../../assets/target.webm';
import "./Hero.css";
import aud from "../../assets/thaithai.mp3";

const NeonButton = ({ text = 'Register Now' }) => {
  const audioRef = useRef(null);

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5;
      audioRef.current.play();
    }
  };

  return (
    <a href="https://devfolio.co/" target="_blank" rel="noopener noreferrer">
      <button onClick={playSound} className="px-6 py-3 bg-orange-500 bg-opacity-20 border-2 border-orange-500 rounded-md text-orange-200 text-xl font-semibold relative overflow-hidden group transition-all duration-300 hover:bg-opacity-30 hover:scale-105 scale-125 md:scale-100">
        <span className="relative z-10">{text}</span>
        <div className="absolute inset-0 bg-orange-500 opacity-30 blur-md group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
        <audio ref={audioRef} src={aud} />
      </button>
    </a>
  );
};

export const Hero = () => {
  const heroRef = useRef(null);
  const hasAnimated = useRef({
    title: false,
    left: false,
    right: false,
  });

  const animateHero = () => {
    const timeline = gsap.timeline();

    if (!hasAnimated.current.title) {
      timeline.from('.hero-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          hasAnimated.current.title = true;
        }
      });
    }

    if (!hasAnimated.current.left) {
      timeline.from('.hero-context-left', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: () => {
          hasAnimated.current.left = true;
        }
      });
    }

    if (!hasAnimated.current.right) {
      timeline.from('.hero-context-right', {
        x: 100,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
        onComplete: () => {
          hasAnimated.current.right = true;
        }
      });
    }
  };

  useEffect(() => {
    const heroRefCurrent = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateHero();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (heroRefCurrent) {
      observer.observe(heroRefCurrent);
    }

    return () => {
      if (heroRefCurrent) {
        observer.unobserve(heroRefCurrent);
      }
    };
  }, []);

  useEffect(() => {
    const video = document.querySelector('video');
    if (video) {
      video.controls = false; // Disable controls
      video.setAttribute('playsinline', ''); // Prevent fullscreen on iOS
      video.setAttribute('webkit-playsinline', ''); // Prevent fullscreen on iOS
    }
  }, []);

  return (
    <div ref={heroRef} className="parent h-screen flex flex-col crosshair-cursor">
      <video id="video" autoPlay loop muted>
        <source src={targetVid} type='video/webm' />
      </video>
      <div className="hero flex flex-col flex-1 gap-10 h-1/2">
        <div className="hero-title flex flex-col w-full text-5xl">
          <span className='flex ml-8 justify-start'>HACK&nbsp;OF</span>
          <span className="flex mr-2 justify-end">DUTY</span>
        </div>
        <div className="hero-context flex flex-col md:flex-row w-full">
          <div className="hero-context-left flex flex-col gap-2 items-center justify-center text-9xl md:text-[12rem] lg:text-[15rem]">
            <span className="text-shadow">28-29th</span>
            <span className="text-shadow">OCTOBER</span>
          </div>
          <div className="hero-context-right flex justify-center md:px-24 md:justify-end mt-8 md:mt-0">
            <NeonButton />
          </div>
        </div>
      </div>
      <img src={Image} alt='Img' className='image absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2' />
    </div>
  );
};

export default Hero;
