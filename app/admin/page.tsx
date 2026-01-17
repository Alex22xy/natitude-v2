"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

// Load Countdown only on client to avoid hydration errors
const Countdown = dynamic(() => import('../components/Countdown'), { 
  ssr: false,
  loading: () => <div className="h-24" /> 
});

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

      {/* SECTION 1: HERO - THE VIBE */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* BACKGROUND VIDEO */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-30 grayscale contrast-125"
          >
            <source src="/jungle.mp4" type="video/mp4" />
          </video>
          {/* VIGNETTE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black" />
        </div>

        {/* NEON CORE GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#FF007F]/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />

        <div className="relative z-10 flex flex-col items-center px-6">
          <img 
            src="/logo.svg" 
            alt="Natitude Logo" 
            className="w-64 md:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,0,127,0.4)] mb-6"
          />
          
          <div className="flex items-center gap-6 mb-10">
            <div className="h-[1px] w-12 bg-[#FF007F]/40" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-12 bg-[#FF007F]/40" />
          </div>

          <Countdown />
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4 z-10">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE EXPERIENCE */}
      <section id="events" className="min-h-screen py-32 flex flex-col items-center justify-center px-6 bg-black border-y border-white/5">
        <div className="text-center mb-20 max-w-2xl">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-4">