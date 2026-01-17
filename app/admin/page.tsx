"use client";
import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    fetch('/api/guests')
      .then(res => res.json())
      .then(data => setGuests(data));
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[#FF007F] text-4xl font-black italic mb-8 uppercase">Door List</h1>
        
        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="bg-zinc-900 p-6 rounded-2xl border border-[#FF007F]/20">
            <p className="text-zinc-500 text-xs uppercase tracking-widest">Total RSVPs</p>
            <p className="text-4xl font-bold">{guests.length}</p>
          </div>
        </div>

        <div className="space-y-2">
          {guests.map((guest: any) => (
            <div key={guest._id} className="flex justify-between items-center bg-zinc-900/50 p-4 rounded-xl border border-white/5">
              <div>
                <p className="font-bold uppercase tracking-tight">{guest.name}</p>
                <p className="text-[10px] text-zinc-500">{new Date(guest.createdAt).toLocaleString()}</p>
              </div>
              <button className="text-[10px] border border-[#FF007F] text-[#FF007F] px-4 py-1 rounded-full hover:bg-[#FF007F] hover:text-white transition-all">
                CHECK IN
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}