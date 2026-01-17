import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

// We use dynamic import for the Countdown to prevent the "Hydration Error"
const Countdown = dynamic(() => import('../components/Countdown'), { 
  ssr: false 
});

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

      {/* SECTION 1: HOME (HERO) */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* VIDEO LAYER */}
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
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        </div>

        {/* PINK AURA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF007F]/20 rounded-full blur-[120px] pointer-events-none animate-pulse z-1" />

        <div className="relative z-10 flex flex-col items-center">
          {/* SVG LOGO */}
          <img 
            src="/logo.svg" 
            alt="Natitude Logo" 
            className="w-80 md:w-[550px] h-auto drop-shadow-[0_0_40px_rgba(255,0,127,0.6)]"
          />
          
          <div className="flex items-center gap-6 mt-2">
            <div className="h-[1px] w-20 bg-[#FF007F]/40" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-20 bg-[#FF007F]/40" />
          </div>

          <Countdown />
        </div>

        {/* SCROLL HINT */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 z-10">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold animate-pulse">Enter the Jungle</p>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: EVENTS */}
      <section id="events" className="min-h-screen py-20 flex flex-col items-center justify-center px-6 bg-black">
        <div className="text-center mb-16">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">Details</h2>
          <p className="text-4xl font-bold uppercase italic">The Experience</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {/* Card 1 */}
          <div className="p-8 border border-white/5 bg-zinc-900/20 rounded-3xl backdrop-blur-sm">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">The Location</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">A hidden sanctuary in the heart of the city. Address revealed to confirmed guests only.</p>
          </div>
          {/* Card 2 */}
          <div className="p-8 border border-[#FF007F]/20 bg-zinc-900/40 rounded-3xl backdrop-blur-sm shadow-[0_0_20px_rgba(255,0,127,0.1)]">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">The Ritual</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Doors open at 10PM. The energy peaks at midnight. No re-entry allowed once the ritual begins.</p>
          </div>
          {/* Card 3 */}
          <div className="p-8 border border-white/5 bg-zinc-900/20 rounded-3xl backdrop-blur-sm">
            <h3 className="text-[#FF007F] font-bold mb-4 uppercase italic">The Vibe</h3>
            <p className="text-zinc-400 text-sm leading-relaxed">Deep House & Ritualistic Rhythms. Dress code: Dark, Minimal, Jungle-ready.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: JOIN */}
      <section id="join" className="min-h-screen flex flex-col items-center justify-center px-6 bg-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">Guestlist</h2>
          <p className="text-4xl font-bold uppercase italic">Join the Tribe</p>
        </div>
        <GuestlistForm />
      </section>

      {/* SECTION 4: TRIBE */}
      <section id="tribe" className="min-h-screen py-20 flex flex-col items-center justify-center px-6 bg-black">
        <div className="max-w-4xl w-full">
          <div className="mb-16 border-l-4 border-[#FF007F] pl-6">
            <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">The Community</h2>
            <p className="text-5xl font-black uppercase italic tracking-tighter">The Tribe</p>
          </div>
          <div className="space-y-12">
            <div className="flex justify-between items-center pb-8 border-b border-white/10">
              <span className="text-[#FF007F] font-mono text-sm">01 / CURATION</span>
              <p className="text-zinc-400 max-w-xs text-xs text-right italic">Quality over quantity.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}