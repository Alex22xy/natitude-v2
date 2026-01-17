import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm';

export default function Home() {
  return (
    // Selection changed to Pink
    <main className="relative bg-black text-white selection:bg-[#FF007F] selection:text-white">
      <Navbar />

      {/* SECTION 1: HOME */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* PINK GLOW EFFECT */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF007F]/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Main Title in Pink with Glow */}
          <h1 className="text-[#FF007F] text-7xl md:text-9xl font-black uppercase italic tracking-[-0.05em] leading-none drop-shadow-[0_0_20px_rgba(255,0,127,0.4)]">
            Natitude
          </h1>
          
          <div className="flex items-center gap-4 mt-6">
            <div className="h-[1px] w-8 bg-zinc-700" />
            <p className="text-zinc-400 tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium">
              The Saturday Ritual
            </p>
            <div className="h-[1px] w-8 bg-zinc-700" />
          </div>
        </div>

        {/* Scroll Indicator changed to Pink gradient */}
        <div className="absolute bottom-32 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-[#FF007F]" />
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