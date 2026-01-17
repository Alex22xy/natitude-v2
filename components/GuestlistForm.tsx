"use client";

import { useState } from 'react';

export default function GuestlistForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
    };

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="text-center p-10 border border-[#FF007F] bg-black">
        <h3 className="text-[#FF007F] font-black italic text-2xl mb-2 uppercase">Access Granted</h3>
        <p className="text-zinc-400 text-sm">Check your inbox for the ritual entry code.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
  {/* FULL NAME */}
  <input
    name="name"
    type="text"
    placeholder="FULL NAME"
    required
    className="bg-zinc-900/50 border border-white/5 p-4 text-white placeholder:text-zinc-800 focus:border-[#FF007F] outline-none transition-all uppercase tracking-widest text-xs rounded-xl"
  />

  {/* SOCIAL HANDLE - The Vetting Tool */}
  <input
    name="handle"
    type="text"
    placeholder="INSTAGRAM @HANDLE"
    required
    className="bg-zinc-900/50 border border-white/5 p-4 text-white placeholder:text-zinc-800 focus:border-[#FF007F] outline-none transition-all uppercase tracking-widest text-xs rounded-xl italic"
  />

  {/* EMAIL ADDRESS */}
  <input
    name="email"
    type="email"
    placeholder="EMAIL ADDRESS"
    required
    className="bg-zinc-900/50 border border-white/5 p-4 text-white placeholder:text-zinc-800 focus:border-[#FF007F] outline-none transition-all uppercase tracking-widest text-xs rounded-xl"
  />

  {/* SUBMIT BUTTON */}
  <button
    type="submit"
    disabled={status === 'loading'}
    className="bg-[#FF007F] text-white font-black italic p-5 uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all disabled:opacity-50 rounded-xl shadow-[0_0_20px_rgba(255,0,127,0.3)]"
  >
    {status === 'loading' ? 'Encrypting...' : 'Request Access'}
  </button>

  {status === 'error' && (
    <p className="text-red-500 text-[10px] uppercase text-center mt-2 font-bold tracking-tighter">Access Denied. Try again.</p>
  )}
</form>
  );
}