export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 p-6 flex justify-between items-center bg-gradient-to-b from-black to-transparent">
      <div className="text-[#FF007F] font-black italic tracking-tighter text-xl">NATITUDE</div>
      <div className="flex gap-6 text-[10px] uppercase tracking-[0.3em] font-bold">
        <a href="#home" className="hover:text-[#FF007F] transition-colors">Home</a>
        <a href="#events" className="hover:text-[#FF007F] transition-colors">Ritual</a>
        <a href="#join" className="hover:text-[#FF007F] transition-colors">Join</a>
      </div>
    </nav>
  );
}