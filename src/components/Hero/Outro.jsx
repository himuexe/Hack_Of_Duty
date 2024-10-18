import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';
import Image from '../../assets/outro.webp';
import './Outro.css';

export const Outro = () => {
  const heroRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Add Devfolio script on component mount
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apply.devfolio.co/v2/sdk.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const animateHero = () => {
    gsap.timeline()
      .from('.outro-title', {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
      .from('.hero-context-left', {
        x: -100,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
      })
      .from('.hero-context-right', {
        x: 100,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.inOut',
      });
  };

  useEffect(() => {
    const heroRefCurrent = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateHero();
            setHasAnimated(true);
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
  }, [hasAnimated]);

  return (
    <div ref={heroRef} className="parent h-screen flex flex-col crosshair-cursor">
      <div className="hero flex flex-col flex-1 gap-10 h-1/2">
        <div className="outro-title flex flex-col w-full text-5xl">
          <span className="flex ml-9 justify-center">&nbsp;Your Hack</span>
          <span className="flex justify-end mr-5">Awaits</span>
        </div>
        <div className="hero-context flex flex-col md:flex-row w-full">
          <div className="hero-context-left flex flex-col gap-2 items-center justify-center text-9xl md:text-[12rem] lg:text-[15rem]">
            <span style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>28-29&nbsp;</span>
            <span style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.5)' }}>OCTOBER</span>
          </div>
          <div className="hero-context-right flex justify-center md:px-24 md:justify-end mt-8 md:mt-0">
            {/* Devfolio Button */}
            <div
              className="apply-button"
              data-hackathon-slug="hack-of-duty-24"
              data-button-theme="dark"
              style={{ height: '44px', width: '312px' }}
            ></div>
          </div>
        </div>
      </div>
      <img
        src={Image}
        alt="Img"
        className="imageoutro absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2"
      />
    </div>
  );
};

export default Outro;
