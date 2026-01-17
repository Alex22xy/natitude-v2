"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Set your secret Tribe access key here
    if (password === "JUNGLE2026") {
      localStorage.setItem("tribe_access", "true");
      router.push('/admin');
    } else {
      alert("ACCESS DENIED: INCORRECT KEY");
    }
  };

  return (
    <div className="h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-sm text-center">
        <h1 className="text-[#FF007F] text-xs tracking-[0.5em] uppercase mb-8 font-bold">Authorized Personnel Only</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input 
            type="password" 
            placeholder="ENTER ACCESS KEY"
            className="w-full bg-zinc-900 border border-white/10 p-4 rounded-2xl text-center text-white outline-none focus:border-[#FF007F] transition-all"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="w-full bg-white text-black font-black p-4 rounded-2xl uppercase italic tracking-widest hover:bg-[#FF007F] hover:text-white transition-all">
            Unlock Tribe
          </button>
        </form>
      </div>
    </div>
  );
}