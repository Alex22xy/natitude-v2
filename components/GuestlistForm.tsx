"use client";
import { useState } from 'react';

export default function GuestlistForm() {
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name }),
      });
      if (response.ok) { setStatus('success'); setName(''); }
      else { setStatus('error'); }
    } catch (err) { setStatus('error'); }
  };

  return (
    <div className="w-full max-w-md bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      {status === 'success' ? (
        <div className="text-center py-10">
          <h3 className="text-[#FF007F] text-2xl font-bold uppercase italic mb-2">You're In.</h3>
          <p className="text-zinc-400 text-sm">Welcome to the Ritual.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <input 
            required
            type="text" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="ENTRY NAME"
            className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white focus:border-[#FF007F]/50 outline-none"
          />
          <button 
            className="w-full bg-[#FF007F] text-white font-black uppercase italic py-4 rounded-xl hover:bg-white hover:text-black transition-all"
          >
            {status === 'loading' ? 'Processing...' : 'Secure Entry'}
          </button>
        </form>
      )}
    </div>
  );
}