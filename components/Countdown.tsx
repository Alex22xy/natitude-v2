"use client";
import { useState, useEffect } from 'react';

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // SET YOUR NEXT EVENT DATE HERE
    const targetDate = new Date("2024-12-28T22:00:00").getTime(); 

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) clearInterval(interval);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-4 mt-8 font-mono">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="flex flex-col items-center">
          <span className="text-2xl md:text-3xl font-bold text-white leading-none">
            {value < 10 ? `0${value}` : value}
          </span>
          <span className="text-[8px] uppercase tracking-[0.2em] text-[#FF007F] mt-1">
            {label}
          </span>
        </div>
      ))}
    </div>
  );
}