"use client"; // Tells Next.js this component handles clicks and animations
import { Home, Calendar, Ticket, Users } from 'lucide-react'; // Importing icons

export default function Navbar() {
  // DATA: An array of our menu items to keep the code clean
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Events', href: '#events', icon: Calendar },
    { name: 'Join', href: '#join', icon: Ticket },
    { name: 'Tribe', href: '#tribe', icon: Users },
  ];

  return (
    // CONTAINER: Fixed at the bottom, centered with -translate-x-1/2
    // 'backdrop-blur' gives it that "frosted glass" look
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[9999] bg-black/80 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-8 shadow-2xl pointer-events-auto">
      
      {/* LOOP: This maps through our navItems above and creates a link for each */}
      {navItems.map((item) => (
        <a 
          key={item.name}
          href={item.href} 
          className="group flex flex-col items-center gap-1 text-gray-400 hover:text-lime-400 transition-all duration-300"
        >
          {/* ICON: 'group-hover' triggers the scale effect when the mouse touches the link */}
          <item.icon size={20} className="group-hover:scale-110 transition-transform" />
          
          {/* TEXT: Hidden by default on mobile, or just very small and clean */}
          <span className="text-[10px] uppercase font-bold tracking-widest">{item.name}</span>
        </a>
      ))}
    </nav>
  );
}