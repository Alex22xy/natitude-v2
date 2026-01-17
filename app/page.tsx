"use client";

import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

export default function Home() {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white selection:bg-[#FF007F] selection:text-white scroll-smooth">
      
      <Navbar />

      {/* SECTION 1: HOME (THE ENTRY) */}
      <section id="home" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          <video autoPlay loop muted playsInline className="w-full h-full object-cover opacity-30 grayscale contrast-125">
            <source src="/jungle.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6">
          <img src="/logo.svg" alt="Natitude Logo" className="w-72 md:w-[500px] h-auto drop-shadow-[0_0_30px_rgba(255,0,127,0.4)] mb-8" />
          
          <div className="flex flex-col items-center gap-5">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-[#FF007F] animate-pulse shadow-[0_0_10px_#FF007F]" />
              <p className="text-[#FF007F] text-[10px] tracking-[0.4em] font-black uppercase italic">Club Status: Operational</p>
            </div>
            <div className="w-48 h-[2px] bg-white/10 relative overflow-hidden rounded-full">
              <div className="absolute top-0 left-0 h-full bg-[#FF007F] w-[82%] shadow-[0_0_15px_#FF007F]" />
            </div>
            <p className="text-zinc-500 text-[9px] tracking-[0.3em] uppercase italic font-bold">82% Capacity / Tribe Access Only</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: NIGHTCLUB (THE RITUAL) */}
      <section id="nightclub" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-10 z-10">
          <h2 className="text-[#FF007F] text-[10px] tracking-[1em] uppercase mb-4">The Protocol</h2>
          <p className="text-5xl md:text-7xl font-black uppercase italic text-white">Nightclub</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full z-10">
          {['The Void', 'The Skin', 'The Silence'].map((title, i) => (
            <div key={i} className="p-8 bg-zinc-900/30 border border-white/5 rounded-[32px] hover:border-[#FF007F]/40 transition-all group">
              <h3 className="text-white font-black uppercase italic mb-3 text-lg group-hover:text-[#FF007F] transition-colors">{`0${i+1} / ${title}`}</h3>
              <p className="text-zinc-500 text-[10px] uppercase tracking-widest leading-relaxed">
                {i === 0 && "Coordinates dropped 120m before the pulse. Encrypted access only."}
                {i === 1 && "All black. Tactical. Minimal. Identities left at the door."}
                {i === 2 && "No phones. No flashes. Capture the feeling, not the footage."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: BOOKING (THE VAULT) */}
      <section id="booking" className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-[#050505]">
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-[#FF007F] text-[10px] tracking-[0.8em] uppercase mb-4 font-bold">Exclusive Hire</h2>
            <p className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter text-white mb-6">The Vault</p>
            <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] leading-relaxed mb-8">
              From the neon-lit ball pit to VIP booths. The sanctuary is available for brand takeovers and private ceremonies.
            </p>
            <a href="mailto:booking@natitude.com" className="inline-block border border-[#FF007F] text-[#FF007F] px-10 py-4 rounded-full text-[10px] font-black uppercase tracking-[0.3em] hover:bg-[#FF007F] hover:text-white transition-all">
              Request Space
            </a>
          </div>
          <div className="aspect-square bg-zinc-900 rounded-[40px] border border-white/5 relative overflow-hidden group shadow-2xl">
            <div className="absolute inset-0 bg-[#FF007F]/5 group-hover:bg-[#FF007F]/10 transition-colors" />
            <div className="absolute inset-0 flex items-center justify-center">
               <p className="text-white/10 font-black italic text-2xl uppercase tracking-[0.5em] rotate-12">Ball Pit Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: PROMOTIONS (THE SCHEDULE) */}
      <section id="hours" className="h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-[10px] tracking-[1em] uppercase mb-4">Operations</h2>
          <p className="text-5xl font-black uppercase italic text-white">The Schedule</p>
        </div>
        <div className="w-full max-w-2xl space-y-2">
          {[
            { day: 'Friday', event: 'Socials', promo: '2-4-1 Neon Elixirs', time: '21:00 - 03:00' },
            { day: 'Saturday', event: 'The Ritual', promo: 'Tribe Members Only', time: '22:00 - LATE' }
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center p-8 bg-zinc-950 border border-white/5 rounded-3xl group hover:border-[#FF007F]/30 transition-all">
              <div>
                <h3 className="text-white font-bold text-xl uppercase italic">{item.day} / {item.event}</h3>
                <p className="text-[#FF007F] text-[9px] tracking-[0.2em] uppercase font-bold mt-1">{item.promo}</p>
              </div>
              <p className="text-zinc-600 font-mono text-xs">{item.time}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: JOIN (THE LIST) */}
      <section id="join" className="relative h-screen w-full snap-start snap-always flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-10">
          <h2 className="text-[#FF007F] text-[10px] tracking-[1em] uppercase mb-4 font-bold">The List</h2>
          <p className="text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white leading-none">Join the <br/>Tribe</p>
        </div>
        <div className="w-full max-w-md pb-24">
          <GuestlistForm />
        </div>
      </section>
    </main>
  );
}