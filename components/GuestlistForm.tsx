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
      <input
        name="name"
        type="text"
        placeholder="FULL NAME"
        required
        className="bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:border-[#FF007F] outline-none transition-all uppercase tracking-widest text-xs"
      />
      <input
        name="email"
        type="email"
        placeholder="EMAIL ADDRESS"
        required
        className="bg-transparent border border-white/10 p-4 text-white placeholder:text-zinc-700 focus:border-[#FF007F] outline-none transition-all uppercase tracking-widest text-xs"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-[#FF007F] text-white font-black italic p-4 uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all disabled:opacity-50"
      >
        {status === 'loading' ? 'Processing...' : 'Request Access'}
      </button>
      {status === 'error' && (
        <p className="text-red-500 text-[10px] uppercase text-center mt-2">System Error. Try again.</p>
      )}
    </form>
  );
}