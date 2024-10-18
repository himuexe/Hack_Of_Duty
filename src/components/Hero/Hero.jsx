import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Image from '../../assets/herohai.webp';
import targetVid from '../../assets/target.webm';
import "./Hero.css";

export const Hero = () => {
  const heroRef = useRef(null);
  const hasAnimated = useRef(false);

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
    const timeline = gsap.timeline();

    if (!hasAnimated.current) {
      timeline
        .from('.hero-title', {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
        })
        .from(
          '.hero-context-left',
          {
            x: -100,
            opacity: 0,
            duration: 1,
            ease: 'power2.inOut',
          },
          '-=0.5'
        )
        .from(
          '.hero-context-right',
          {
            x: 100,
            opacity: 0,
            duration: 0.7,
            ease: 'power2.inOut',
          },
          '-=0.7'
        );

      hasAnimated.current = true;
    }
  };

  useEffect(() => {
    const heroRefCurrent = heroRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateHero();
          } else {
            hasAnimated.current = false;
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
      video.controls = false;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', '');
    }
  }, []);

  return (
    <div ref={heroRef} className="parent h-screen flex flex-col crosshair-cursor">
      <video id="video" autoPlay loop muted>
        <source src={targetVid} type="video/webm" />
      </video>
      <div className="hero flex flex-col flex-1 gap-10 h-1/2">
        <div className="hero-title flex flex-col w-full text-5xl">
          <span className="flex ml-8 justify-start">HACK&nbsp;OF</span>
          <span className="flex mr-2 justify-end">DUTY</span>
        </div>
        <div className="hero-context flex flex-col md:flex-row w-full">
          <div className="hero-context-left flex flex-col gap-2 items-center justify-center text-9xl md:text-[12rem] lg:text-[15rem]">
            <span className="text-shadow">28-29th</span>
            <span className="text-shadow">OCTOBER</span>
          </div>
          <div className="hero-context-right flex justify-center md:px-24 md:justify-end mt-8 md:mt-0">
            {/* Devfolio Button */}
            <div
              className="apply-button"
              data-hackathon-slug="hackofduty"
              data-button-theme="dark"
              style={{ height: '44px', width: '312px' }}
            ></div>
          </div>
        </div>
      </div>
      <img src={Image} alt="Img" className="image absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full md:w-3/4 lg:w-1/2" />
    </div>
  );
};

export default Hero;
