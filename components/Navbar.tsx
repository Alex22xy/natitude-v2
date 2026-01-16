"use client";
import { Home, Calendar, Ticket, Users } from 'lucide-react';

export default function Navbar() {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Join', href: '#join', icon: Ticket },
    { name: 'Tribe', href: '#tribe', icon: Users },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-8 shadow-2xl pointer-events-auto">
      {navItems.map((item) => (
        <a 
          key={item.name}
          href={item.href} 
          className="group flex flex-col items-center gap-1 text-gray-400 hover:text-lime-400 transition-all duration-300"
        >
          <item.icon size={20} className="group-hover:scale-110 transition-transform" />
          <span className="text-[10px] uppercase font-bold tracking-widest">{item.name}</span>
        </a>
      ))}
    </nav>
  );
}