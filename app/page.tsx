"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

// Dynamic import for the countdown to ensure it only runs on the client-side
const Countdown = dynamic(() => import('../components/Countdown'), { 
  ssr: false,
  loading: () => <div className="h-20" /> 
});

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

      {/* SECTION 1: HOME (HERO) */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* THE VIDEO LAYER */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-40 grayscale contrast-125"
          >
            <source src="/jungle.mp4" type="video/mp4" />
          </video>
          {/* Dark gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black" />
        </div>

        {/* PINK AURA GLOW */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF007F]/15 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />

        <div className="relative z-10 flex flex-col items-center px-4 text-center">
          {/* THE SVG LOGO */}
          <div className="relative mb-6">
            <img 
              src="/logo.svg" 
              alt="Natitude Logo" 
              className="w-72 md:w-[550px] h-auto drop-shadow-[0_0_40px_rgba(255,0,127,0.5)] transition-transform duration-700 hover:scale-105"
            />
          </div>
          
          {/* TAGLINE */}
          <div className="flex items-center gap-6">
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-r from-transparent to-[#FF007F]/50" />
            <p className="text-white tracking-[0.6em] md:tracking-[0.8em] uppercase text-[10px] md:text-xs font-light">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-12 md:w-20 bg-gradient-to-l from-transparent to-[#FF007F]/50" />
          </div>

          {/* THE LIVE COUNTDOWN */}
          <Countdown />
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 z-10 opacity-60">
           <p className="text-[10px] tracking-[0.4em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: EVENTS */}
      <section id="events" className="min-h-screen py-24 flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">The Details</h2>
          <p className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">The Experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Card 1: Location */}
          <div className="group p-8 border border-white/5 bg-zinc-900/20 rounded-3xl backdrop-blur-sm hover:border-[#FF007F]/30 transition-all duration-500">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic tracking-widest text-lg">The Location</h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
              A hidden sanctuary in the heart of the city. Detailed location instructions revealed to confirmed guests via private channel.
            </p>
          </div>
          
          {/* Card 2: Ritual */}
          <div className="group p-8 border border-[#FF007F]/20 bg-zinc-900/40 rounded-3xl backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,127,0.05)] hover:bg-zinc-900/60 transition-all duration-500">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic tracking-widest text-lg">The Ritual</h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
              Doors unlock at 10PM. No re-entry once the ritual begins. Come as you are, leave transformed.
            </p>
          </div>
          
          {/* Card 3: Vibe */}
          <div className="group p-8 border border-white/5 bg-zinc-900/20 rounded-3xl backdrop-blur-sm hover:border-[#FF007F]/30 transition-all duration-500">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic tracking-widest text-lg">The Vibe</h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-200 transition-colors">
              Dark, minimal, jungle-ready. Soundscape curated from deep melodic house to ritualistic tribal beats.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JOIN */}
      <section id="join" className="min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">Guestlist</h2>
          <p className="text-4xl md:text-5xl font-black uppercase italic tracking-tighter">Join the Tribe</p>
        </div>
        <GuestlistForm />
      </section>

      {/* SECTION 4: TRIBE */}
      <section id="tribe" className="min-h-screen py-24 flex flex-col items-center justify-center px-6 bg-black">
        <div className="max-w-4xl w-full">
          <div className="mb-20 border-l-4 border-[#FF007F] pl-8">
            <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">The Community</h2>
            <p className="text-5xl md:text-6xl font-black uppercase italic tracking-tighter leading-none">The Tribe</p>
          </div>
          
          <div className="space-y-12">
            {[
              { id: '01', title: 'CURATION', desc: 'A community built on energy, not just attendance.' },
              { id: '02', title: 'PRIVACY', desc: 'No cameras. No distractions. Just the jungle.' },
              { id: '03', title: 'ENERGY', desc: 'Respect the rhythm. Respect the ritual.' }
            ].map((pillar) => (
              <div key={pillar.id} className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-white/10 hover:border-[#FF007F]/40 transition-colors group">
                <div className="flex items-center gap-6">
                  <span className="text-[#FF007F] font-mono text-sm font-bold">{pillar.id} /</span>
                  <h4 className="text-2xl font-bold uppercase italic tracking-tighter group-hover:translate-x-2 transition-transform">{pillar.title}</h4>
                </div>
                <p className="text-zinc-500 text-sm italic">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 border-t border-white/5 text-center bg-black">
        <p className="text-[10px] text-zinc-600 uppercase tracking-[0.5em]">
          &copy; 2026 NATITUDE. ALL RIGHTS RESERVED.
        </p>
      </footer>
    </main>
  );
}