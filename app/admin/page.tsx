"use client";

import { useEffect, useState } from 'react';

export default function AdminPage() {
  const [guests, setGuests] = useState([]);
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const checkPassword = () => {
    if (password === "JUNGLE2026") { // SET YOUR PASSWORD HERE
      setAuthorized(true);
    }
  };

  useEffect(() => {
    if (authorized) {
      fetch('/api/register')
        .then(res => res.json())
        .then(data => setGuests(data));
    }
  }, [authorized]);

  if (!authorized) {
    return (
      <div className="h-screen bg-black flex flex-col items-center justify-center p-6 text-white">
        <h1 className="text-[#FF007F] font-black italic mb-4">RESTRICTED ACCESS</h1>
        <input 
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          className="bg-zinc-900 border border-white/10 p-4 rounded-xl text-center outline-none focus:border-[#FF007F]"
          placeholder="ENTER KEYCODE"
        />
        <button onClick={checkPassword} className="mt-4 text-[#FF007F] text-xs font-bold uppercase tracking-widest">Verify</button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* ... Your existing Admin Table Code ... */}
    </div>
  );
}