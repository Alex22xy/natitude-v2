"use client";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function TribePage() {
  const [guests, setGuests] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const access = localStorage.getItem("tribe_access");
    if (access !== "true") {
      router.push('/login');
    } else {
      setIsAuthorized(true);
      fetch('/api/register')
        .then(res => res.json())
        .then(data => setGuests(data));
    }
  }, [router]);

  if (!isAuthorized) return null;

  return (
    <div className="min-h-screen bg-black text-white p-8 pb-32">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12 border-b border-[#FF007F]/20 pb-8 flex justify-between items-end">
          <div>
            <h1 className="text-[#FF007F] text-[10px] tracking-[0.5em] uppercase mb-2">Vault</h1>
            <h2 className="text-4xl font-black italic uppercase tracking-tighter">The Tribe</h2>
          </div>
          <button 
            onClick={() => { localStorage.removeItem("tribe_access"); router.push('/'); }}
            className="text-[10px] uppercase tracking-widest text-zinc-500 hover:text-white"
          >
            Lock Vault
          </button>
        </header>

        <div className="space-y-4">
          {guests.map((guest: any, i) => (
            <div key={i} className="bg-zinc-900/50 border border-white/5 p-6 rounded-2xl flex justify-between items-center group hover:border-[#FF007F]/30 transition-all">
              <div>
                <p className="text-[#FF007F] font-bold text-lg italic uppercase tracking-tight">{guest.name}</p>
                <p className="text-zinc-500 text-xs font-mono">{guest.email}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-zinc-600 uppercase tracking-widest">Confirmed</p>
                <p className="text-zinc-400 text-[10px]">{new Date(guest.createdAt).toLocaleDateString()}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}