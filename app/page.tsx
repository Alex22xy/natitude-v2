import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="relative bg-black text-white selection:bg-lime-400 selection:text-black">
      <Navbar />

      {/* SECTION 1: HOME */}
      <section id="home" className="h-screen flex flex-col items-center justify-center border-b border-white/5">
        <h1 className="text-lime-400 text-6xl font-black uppercase italic tracking-tighter animate-pulse">
          Natitude V2
        </h1>
        <p className="text-zinc-500 mt-4 tracking-[0.3em] uppercase text-sm">The Saturday Ritual</p>
      </section>

      {/* SECTION 2: EVENTS */}
      <section id="events" className="h-screen flex items-center justify-center bg-zinc-900/20 border-b border-white/5">
        <h2 className="text-3xl font-bold uppercase tracking-widest">Upcoming Rituals</h2>
      </section>

      {/* SECTION 3: JOIN */}
      <section id="join" className="h-screen flex items-center justify-center border-b border-white/5">
        <h2 className="text-3xl font-bold uppercase text-lime-400 tracking-widest">Join the Tribe</h2>
      </section>

      {/* SECTION 4: TRIBE */}
      <section id="tribe" className="h-screen flex items-center justify-center bg-zinc-900/20">
        <h2 className="text-3xl font-bold uppercase tracking-widest">The Community</h2>
      </section>
    </main>
  );
}