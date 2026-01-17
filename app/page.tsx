"use client";

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

const Countdown = dynamic(() => import('../components/Countdown'), { 
  ssr: false,
  loading: () => <div className="h-24" /> 
});

export default function Home() {
  return (
    /* Snap-y and snap-mandatory make the website feel like an app.
       When you scroll, it "clicks" to the next section automatically.
    */
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white selection:bg-[#FF007F] selection:text-white scroll-smooth">
      
      {/* This Navbar should be your floating bottom dock component */}
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
          
          <div className="flex items-center gap-6 mb-8">
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light text-center">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-16 bg-[#FF007F]/40" />
          </div>

          <Countdown />
        </div>

        {/* SCROLL HINT */}
        <div className="absolute bottom-24 flex flex-col items-center gap-4 z-10">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: THE RITUAL (DETAILS) */}
      <section id="events" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-xs tracking-[0.5em] uppercase mb-4">The Ritual</h2>
          <p className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-white">The Experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          <div className="p-8 border border-white/5 bg-zinc-950/50 rounded-2xl hover:border-[#FF007F]/30 transition-all group">
            <h3 className="text-[#FF007F] font-bold mb-3 uppercase italic text-sm">01 / Location</h3>
            <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300">A hidden sanctuary. Revealed to confirmed guests only via encrypted message.</p>
          </div>
          <div className="p-8 border border-[#FF007F]/20 bg-zinc-950/50 rounded-2xl shadow-[0_0_40px_rgba(255,0,127,0.05)]">
            <h3 className="text-[#FF007F] font-bold mb-3 uppercase italic text-sm">02 / Timing</h3>
            <p className="text-zinc-500 text-xs leading-relaxed">Doors open at 22:00. The pulse begins at midnight. No re-entry allowed.</p>
          </div>
          <div className="p-8 border border-white/5 bg-zinc-950/50 rounded-2xl hover:border-[#FF007F]/30 transition-all group">
            <h3 className="text-[#FF007F] font-bold mb-3 uppercase italic text-sm">03 / Code</h3>
            <p className="text-zinc-500 text-xs leading-relaxed group-hover:text-zinc-300">Dark. Minimalist. Jungle-ready. Respect the rhythm, respect the tribe.</p>
          </div>
        </div>
      </section>

     {/* SECTION 3: THE LIST (JOIN) */}
      <section id="join" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-10">
          <h2 className="text-[#FF007F] text-xs tracking-[0.5em] uppercase mb-4">The List</h2>
          <p className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white">Join the Tribe</p>
        </div>
        <div className="w-full max-w-md pb-32"> {/* Increased padding to clear the dock */}
          <GuestlistForm />
        </div>

        {/* FOOTER - Tucked inside the last section for cleaner look */}
        <footer className="absolute bottom-4 w-full text-center">
          <p className="text-[8px] text-zinc-700 tracking-[1em] uppercase">Natitude &copy; 2026</p>
        </footer>
      </section>
    </main>
  );
}