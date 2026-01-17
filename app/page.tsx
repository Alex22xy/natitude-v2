import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

export default function Home() {
  return (
    // Selection changed to Pink
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

{/* SECTION 1: HOME (HERO) */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
        
        {/* THE PINK AURA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF007F]/20 rounded-full blur-[120px] pointer-events-none animate-pulse" />

        <div className="relative z-10 flex flex-col items-center">
          
          {/* THE SVG LOGO */}
          <div className="relative">
            <img 
              src="/logo.svg" 
              alt="Natitude Welcome to the Jungle" 
              className="w-80 md:w-[550px] h-auto drop-shadow-[0_0_30px_rgba(255,0,127,0.5)] transition-all duration-700 hover:scale-105"
            />
          </div>
          
          {/* LOGO SUBTEXT */}
          <div className="flex items-center gap-6 mt-2">
            <div className="h-[1px] w-20 bg-gradient-to-r from-transparent to-[#FF007F]/50" />
            <p className="text-white tracking-[0.8em] uppercase text-[10px] md:text-xs font-light">
              Welcome to the Jungle
            </p>
            <div className="h-[1px] w-20 bg-gradient-to-l from-transparent to-[#FF007F]/50" />
          </div>
        </div>

        {/* ENTER THE JUNGLE HINT */}
        <div className="absolute bottom-12 flex flex-col items-center gap-4 opacity-40 hover:opacity-100 transition-opacity">
           <p className="text-[10px] tracking-[0.5em] text-[#FF007F] uppercase font-bold">Enter the Jungle</p>
           <div className="w-[1px] h-16 bg-gradient-to-b from-[#FF007F] to-transparent" />
        </div>
      </section>

      {/* SECTION 2: EVENTS */}
      <section id="events" className="min-h-screen py-20 flex flex-col items-center justify-center px-6">
        <div className="text-center mb-16">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">Details</h2>
          <p className="text-4xl font-bold uppercase italic">The Experience</p>
        </div>
        {/* ... (Cards remain the same but will hover with Pink borders if you changed card logic) */}
      </section>

      {/* SECTION 3: JOIN */}
      <section id="join" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">Guestlist</h2>
          <p className="text-4xl font-bold uppercase italic">Join the Tribe</p>
        </div>
        <GuestlistForm />
      </section>

      {/* SECTION 4: TRIBE */}
      <section id="tribe" className="min-h-screen py-20 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          <div className="mb-16 border-l-4 border-[#FF007F] pl-6">
            <h2 className="text-[#FF007F] text-sm tracking-[0.5em] uppercase mb-2">The Community</h2>
            <p className="text-5xl font-black uppercase italic tracking-tighter">The Tribe</p>
          </div>
          {/* ... Pillars with pink numbers */}
          <span className="text-[#FF007F] font-mono text-sm">01 / CURATION</span>
        </div>
      </section>
    </main>
  );
}