export default function Navbar() {
  return (
    <>
      {/* MAIN NAVIGATION DOCK */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-full px-4 max-w-[450px]">
        <div className="bg-black/80 backdrop-blur-xl border border-white/5 px-6 py-3 rounded-[32px] flex justify-between items-center shadow-2xl">
          
          {/* Home */}
          <a href="#home" className="flex flex-col items-center gap-1 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            <span className="text-[9px] uppercase font-medium text-zinc-500 group-hover:text-white">Home</span>
          </a>

          {/* Ritual */}
          <a href="#events" className="flex flex-col items-center gap-1 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[9px] uppercase font-medium text-zinc-500 group-hover:text-white">Ritual</span>
          </a>

          {/* JOIN BUTTON */}
          <div className="relative -top-4">
            <a href="#join" className="bg-[#FF007F] p-4 rounded-full shadow-[0_0_25px_rgba(255,0,127,0.5)] hover:scale-110 transition-all flex items-center justify-center border-4 border-black">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15 5v2a3 3 0 01-3 3H4a3 3 0 01-3-3V5a3 3 0 013-3h8a3 3 0 013 3zM4 12a3 3 0 00-3 3v2a3 3 0 003 3h8a3 3 0 003-3v-2a3 3 0 00-3-3H4z" />
              </svg>
            </a>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[#FF007F] text-[9px] font-black uppercase tracking-widest">Join</span>
          </div>

          {/* Archive */}
          <a href="#home" className="flex flex-col items-center gap-1 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="text-[9px] uppercase font-medium text-zinc-500 group-hover:text-white">Archive</span>
          </a>

          {/* Tribe - New visible replacement for Admin */}
          <a href="#join" className="flex flex-col items-center gap-1 group">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <span className="text-[9px] uppercase font-medium text-zinc-500 group-hover:text-white">Tribe</span>
          </a>

        </div>
      </nav>
    </>
  );
}