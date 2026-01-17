"use client";

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [guests, setGuests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/register') // Assuming your GET route is here
      .then(res => res.json())
      .then(data => {
        setGuests(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8 font-sans">
      <div className="max-w-4xl mx-auto">
        <header className="flex justify-between items-end mb-12 border-b border-[#FF007F]/30 pb-6">
          <div>
            <h1 className="text-[#FF007F] text-xs tracking-[0.5em] uppercase mb-2">Command Center</h1>
            <p className="text-4xl font-black italic uppercase tracking-tighter">Guestlist Archive</p>
          </div>
          <p className="text-zinc-500 text-[10px] uppercase tracking-widest">{guests.length} Confirmed</p>
        </header>

        {loading ? (
          <p className="text-[#FF007F] animate-pulse uppercase tracking-widest text-xs">Accessing Database...</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                  <th className="py-4 px-2">Name</th>
                  <th className="py-4 px-2">Email</th>
                  <th className="py-4 px-2 text-right">Date Joined</th>
                </tr>
              </thead>
              <tbody>
                {guests.map((guest: any, i) => (
                  <tr key={i} className="border-b border-white/5 hover:bg-[#FF007F]/5 transition-colors group">
                    <td className="py-4 px-2 font-bold uppercase italic text-sm tracking-tight group-hover:text-[#FF007F]">{guest.name}</td>
                    <td className="py-4 px-2 text-zinc-400 font-mono text-xs">{guest.email}</td>
                    <td className="py-4 px-2 text-zinc-600 text-[10px] text-right">
                      {new Date(guest.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}