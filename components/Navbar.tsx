export default function Navbar() {
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[400px]">
      <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-2 rounded-2xl flex justify-around items-center shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <a href="#home" className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 hover:text-[#FF007F] transition-all p-2">Home</a>
        <a href="#events" className="text-[9px] uppercase tracking-widest font-bold text-zinc-500 hover:text-[#FF007F] transition-all p-2">Ritual</a>
        <a href="#join" className="bg-[#FF007F] px-5 py-2 rounded-xl text-white text-[10px] font-black uppercase italic tracking-widest">Join List</a>
      </div>
    </nav>
  );
}