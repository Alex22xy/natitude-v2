"use client";
import { useState } from 'react';

export default function GuestlistForm() {
  // STATE: Tracking what the user types and the status of the "send"
  const [name, setName] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // For now, we will just simulate a 1-second save
    // We will connect the real MongoDB "pipe" in the next step!
    setTimeout(() => {
      console.log("Saving name:", name);
      setStatus('success');
      setName('');
    }, 1000);
  };

  return (
    <div className="w-full max-w-md bg-zinc-900/50 p-8 rounded-3xl border border-white/5 backdrop-blur-sm">
      {status === 'success' ? (
        <div className="text-center py-10 animate-in fade-in zoom-in duration-500">
          <h3 className="text-lime-400 text-2xl font-bold uppercase italic mb-2">You're In.</h3>
          <p className="text-zinc-400 text-sm">Check your DM/Email for the ritual password.</p>
          <button 
            onClick={() => setStatus('idle')}
            className="mt-6 text-xs uppercase tracking-widest text-zinc-500 hover:text-white transition-colors"
          >
            Add another guest +
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-2 ml-1">
              Full Name
            </label>
            <input 
              required
              type="text" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="ENTRY NAME"
              className="w-full bg-black border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-zinc-800 focus:outline-none focus:border-lime-400/50 transition-all"
            />
          </div>

          <button 
            disabled={status === 'loading'}
            className="w-full bg-lime-400 text-black font-black uppercase italic py-4 rounded-xl hover:bg-white transition-all active:scale-[0.98] disabled:opacity-50"
          >
            {status === 'loading' ? 'Processing...' : 'Secure Entry'}
          </button>
        </form>
      )}
    </div>
  );
}