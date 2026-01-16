// Importing our custom Navbar component
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    // 'relative' allows us to position the Navbar on top
    // 'selection' changes the color when you highlight text with your mouse
    <main className="relative bg-black text-white selection:bg-lime-400 selection:text-black">
      
      {/* THE NAVIGATION BAR: Stays fixed as we scroll */}
      <Navbar />

      {/* SECTION 1: HOME (HERO SECTION) */}
      {/* 'h-screen' makes this section exactly the height of your monitor */}
      <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        
        {/* DESIGN: The green glow behind the text. 'blur' creates the aura effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-lime-400/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 flex flex-col items-center">
          {/* LOGO: 'italic' and 'black' (extra bold) for the high-end look */}
          <h1 className="text-lime-400 text-7xl md:text-9xl font-black uppercase italic tracking-[-0.05em] leading-none drop-shadow-[0_0_15px_rgba(163,230,53,0.3)]">
            Natitude
          </h1>
          
          {/* SUBHEADER: The line-text-line design */}
          <div className="flex items-center gap-4 mt-6">
            <div className="h-[1px] w-8 bg-zinc-700" /> {/* Left line */}
            <p className="text-zinc-400 tracking-[0.4em] uppercase text-[10px] md:text-xs font-medium">
              The Saturday Ritual
            </p>
            <div className="h-[1px] w-8 bg-zinc-700" /> {/* Right line */}
          </div>
        </div>

        {/* VISUAL: The bouncing line at the bottom to tell users to scroll down */}
        <div className="absolute bottom-32 flex flex-col items-center gap-2 animate-bounce opacity-50">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent to-lime-400" />
        </div>
      </section>

      {/* SECTION 2: EVENTS (Placeholder for now) */}
      <section id="events" className="h-screen flex items-center justify-center border-b border-white/5">
        <h2 className="text-3xl font-bold uppercase tracking-widest">Upcoming Rituals</h2>
      </section>

      {/* SECTION 3: JOIN (Placeholder for the form) */}
      <section id="join" className="h-screen flex items-center justify-center border-b border-white/5">
        <h2 className="text-3xl font-bold uppercase text-lime-400 tracking-widest">Join the Tribe</h2>
      </section>

      {/* SECTION 4: TRIBE (Placeholder for the community section) */}
      <section id="tribe" className="h-screen flex items-center justify-center bg-zinc-900/20">
        <h2 className="text-3xl font-bold uppercase tracking-widest">The Community</h2>
      </section>
    </main>
  );
}