import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Countdown logic inside useEffect
  useEffect(() => {
    const countdown = () => {
      const targetDate = new Date("2024-12-01T00:00:00").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference < 0) {
        clearInterval(timer);
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer); // Clean up the interval when the component unmounts
  }, []);

  return (
    <div className="container">
      <h1>Something will happen</h1>
      <h2>Something <span className="highlight">wonderful</span></h2>
      
      <div className="countdown">
        <div className="time-box">
          <span className="time" id="days">{timeLeft.days}</span>
          <span className="label">days</span>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <span className="time" id="hours">{timeLeft.hours}</span>
          <span className="label">hours</span>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <span className="time" id="minutes">{timeLeft.minutes}</span>
          <span className="label">minutes</span>
        </div>
        <span className="separator">:</span>
        <div className="time-box">
          <span className="time" id="seconds">{timeLeft.seconds}</span>
          <span className="label">seconds</span>
        </div>
      </div>
    </div>
  );
}

export default Timer;