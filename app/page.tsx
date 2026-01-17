"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

// Load Countdown only on client to prevent flickering/errors
const Countdown = dynamic(() => import('../components/Countdown'), { 
  ssr: false,
  loading: () => <div className="h-24" /> 
});

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

      {/* SECTION 1: THE VIBE (HERO) */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        {/* NEON GLOW EFFECT */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF007F]/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />

        <div className="relative z-10 flex flex-col items-center px-6">
          {/* BRAND IDENTITY */}
          <img 
            src="/logo.svg" 
            alt="Natitude Logo" 
            className="w-72 md:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,0,127,0.4)] mb-4"
          />
          
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
          </div>

          <Countdown />
        </div>

        {/* SCROLL HINT (Now fixed to avoid overlap) */}
        <div className="absolute bottom-10 flex flex-col items-center gap-4 z-10">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE RITUAL (DETAILS) */}
      <section id="events" className="min-h-screen py-32 flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-20">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-4">The Ritual</h2>
          <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">The Experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl w-full">
          <div className="p-10 border border-white/5 bg-zinc-950 rounded-2xl hover:border-[#FF007F]/30 transition-all group">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">01 / Location</h3>
            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300">A hidden sanctuary. Revealed to confirmed guests only via encrypted message.</p>
          </div>
          <div className="p-10 border border-[#FF007F]/20 bg-zinc-950 rounded-2xl shadow-[0_0_40px_rgba(255,0,127,0.05)]">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">02 / Timing</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">Doors open at 22:00. The pulse begins at midnight. No re-entry allowed.</p>
          </div>
          <div className="p-10 border border-white/5 bg-zinc-950 rounded-2xl hover:border-[#FF007F]/30 transition-all group">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">03 / Code</h3>
            <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-300">Dark. Minimalist. Jungle-ready. Respect the rhythm, respect the tribe.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE LIST (JOIN) */}
      <section id="join" className="min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-4">Access</h2>
          <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">Join the Tribe</p>
        </div>
        <div className="w-full max-w-md">
          <GuestlistForm />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center border-t border-white/5 bg-black">
        <p className="text-[10px] text-zinc-700 tracking-[1em] uppercase">Natitude &copy; 2026</p>
      </footer>
    </main>
  );
}