"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white selection:bg-[#FF007F] selection:text-white scroll-smooth">
      
      <Navbar />

      {/* SECTION 1: THE VIBE (HERO) */}
      <section id="home" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center overflow-hidden bg-black">
        
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-[#FF007F]/10 rounded-full blur-[120px] pointer-events-none animate-pulse z-0" />

        <div className="relative z-10 flex flex-col items-center px-6">
          <img 
            src="/logo.svg" 
            alt="Natitude Logo" 
            className="w-72 md:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,0,127,0.4)] mb-4"
          />
          
          <div className="flex items-center gap-6 mb-12">
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light text-center">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
          </div>

          {/* REPLACED CLOCK WITH DYNAMIC STATUS BAR */}
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF007F] animate-pulse shadow-[0_0_10px_#FF007F]" />
              <p className="text-[#FF007F] text-[10px] tracking-[0.4em] font-black uppercase italic">
                Ritual Status: Active
              </p>
            </div>
            
            <div className="w-48 md:w-64 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#FF007F] w-[82%] shadow-[0_0_15px_#FF007F] animate-pulse" />
            </div>
            
            <p className="text-zinc-500 text-[9px] tracking-[0.3em] uppercase italic font-bold">
              Capacity: 82% Full / Invitations Only
            </p>
          </div>
        </div>

        {/* SCROLL HINT */}
        <div className="absolute bottom-24 flex flex-col items-center gap-4 z-10">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE RITUAL (UPGRADED) */}
      <section id="events" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black overflow-hidden">
        
        {/* Faded background text for depth */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black text-white/[0.02] uppercase italic pointer-events-none select-none">
          Ritual
        </div>

        <div className="text-center mb-16 relative z-10">
          <h2 className="text-[#FF007F] text-xs tracking-[0.8em] uppercase mb-4 animate-pulse">The Guidelines</h2>
          <p className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white">The Experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl w-full relative z-10">
          {/* CARD 1 */}
          <div className="group relative p-8 bg-zinc-950/40 border border-white/5 rounded-3xl overflow-hidden hover:border-[#FF007F]/50 transition-all duration-500">
            <div className="absolute top-0 right-0 p-4 text-[#FF007F]/20 group-hover:text-[#FF007F] transition-colors font-black italic">01</div>
            <h3 className="text-white font-black uppercase italic mb-2 tracking-widest">The Void</h3>
            <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-200 transition-colors">
              The coordinate is a secret. Confirmed tribe members receive a digital key via encrypted channel 120 minutes prior.
            </p>
            <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-[#FF007F] transition-all duration-700" />
          </div>

          {/* Repeat for Card 2 and 3 with different text... */}
        </div>
      </section>

      {/* SECTION 3: THE LIST (JOIN) */}
      <section id="join" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-10">
          <h2 className="text-[#FF007F] text-xs tracking-[0.5em] uppercase mb-4">The List</h2>
          <p className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white">Join the Tribe</p>
        </div>
        <div className="w-full max-w-md pb-32">
          <GuestlistForm />
        </div>

        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-[8px] text-zinc-700 tracking-[1em] uppercase">Natitude &copy; 2026</p>
        </footer>
      </section>
    </main>
  );
}