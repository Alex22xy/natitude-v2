"use client";

import { useState, useEffect } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      
      // LOGIC: Find the next Saturday at 10 PM (22:00)
      let target = new Date();
      target.setDate(now.getDate() + ((6 + 7 - now.getDay()) % 7));
      target.setHours(22, 0, 0, 0);

      // If it's already past 10 PM on Saturday, look at NEXT Saturday
      if (now > target) {
        target.setDate(target.getDate() + 7);
      }

      const distance = target.getTime() - now.getTime();

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    };

    // Run immediately, then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Formatting helper to add leading zeros (01, 02, etc)
  const formatNum = (num: number) => num.toString().padStart(2, '0');

  return (
    <div className="flex gap-4 md:gap-8 mt-8">
      {[
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <span className="text-3xl md:text-5xl font-black italic tracking-tighter text-white">
            {formatNum(item.value)}
          </span>
          <span className="text-[8px] md:text-[10px] uppercase tracking-[0.3em] text-[#FF007F] font-bold mt-1">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}