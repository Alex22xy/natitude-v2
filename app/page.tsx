// Importing our custom Navbar component
import Navbar from '../components/Navbar';
import GuestlistForm from '../components/GuestlistForm'

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

      {/* SECTION 2: EVENTS */}
      <section id="events" className="min-h-screen py-20 flex flex-col items-center justify-center px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-lime-400 text-sm tracking-[0.5em] uppercase mb-2">Details</h2>
          <p className="text-4xl font-bold uppercase italic">The Experience</p>
        </div>

        {/* Grid Container: 1 column on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full">
          
          {/* CARD 1: LOCATION */}
          <div className="group bg-zinc-900/40 border border-white/5 p-10 rounded-2xl hover:border-lime-400/50 transition-all duration-500">
            <div className="w-12 h-12 bg-lime-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
              <span className="text-lime-400 text-xl">📍</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Location</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              51 St Andrew's Street South<br />
              Bury St Edmunds, IP33 3PH
            </p>
          </div>

          {/* CARD 2: RITUAL (TIME) */}
          <div className="group bg-zinc-900/40 border border-white/5 p-10 rounded-2xl hover:border-lime-400/50 transition-all duration-500 shadow-xl shadow-lime-400/5">
            <div className="w-12 h-12 bg-lime-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
              <span className="text-lime-400 text-xl">🕒</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">Ritual</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Doors open 10:00 PM<br />
              Strict Entry by 11:30 PM
            </p>
          </div>

          {/* CARD 3: THE VIBE */}
          <div className="group bg-zinc-900/40 border border-white/5 p-10 rounded-2xl hover:border-lime-400/50 transition-all duration-500">
            <div className="w-12 h-12 bg-lime-400/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-lime-400/20 transition-colors">
              <span className="text-lime-400 text-xl">🎵</span>
            </div>
            <h3 className="text-xl font-bold uppercase mb-2">The Vibe</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Tiki Bar & Club<br />
              House / Afrobeats / Ritual
            </p>
          </div>

        </div>
      </section>

      {/* SECTION 3: JOIN */}
      <section id="join" className="min-h-screen flex flex-col items-center justify-center px-6 bg-gradient-to-b from-black to-zinc-950">
        <div className="text-center mb-12">
          <h2 className="text-lime-400 text-sm tracking-[0.5em] uppercase mb-2">Guestlist</h2>
          <p className="text-4xl font-bold uppercase italic">Join the Tribe</p>
          <p className="text-zinc-500 mt-4 max-w-sm text-sm">
            Entry is not guaranteed. Members only. Register below for the Saturday Ritual.
          </p>
        </div>

        <GuestlistForm />
      </section>

      {/* SECTION 4: TRIBE (Placeholder for the community section) */}
      <section id="tribe" className="min-h-screen py-20 flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl w-full">
          {/* Header */}
          <div className="mb-16 border-l-4 border-lime-400 pl-6">
            <h2 className="text-lime-400 text-sm tracking-[0.5em] uppercase mb-2">The Community</h2>
            <p className="text-5xl font-black uppercase italic tracking-tighter">The Tribe</p>
          </div>

          {/* Tribe Pillars */}
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-8 border-b border-white/10">
              <span className="text-lime-400 font-mono text-sm">01 / CURATION</span>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                We believe in quality over quantity. Every guest is hand-picked to ensure the energy remains unmatched.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-8 border-b border-white/10">
              <span className="text-lime-400 font-mono text-sm">02 / PRIVACY</span>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                What happens at the Ritual stays at the Ritual. No cameras, no ego, just the music and the movement.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-start gap-4 pb-8 border-b border-white/10">
              <span className="text-lime-400 font-mono text-sm">03 / ENERGY</span>
              <p className="text-zinc-400 max-w-md text-sm leading-relaxed">
                A seamless blend of House, Afrobeats, and Ritualistic rhythms designed to keep you moving until the doors lock.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}