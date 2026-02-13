'use client';

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-[9999]">
      <div className="bg-white/80 backdrop-blur-xl border border-brand-gold/20 px-10 py-5 rounded-full flex justify-between items-center shadow-[0_20px_50px_rgba(197,160,89,0.1)]">
        <div className="text-2xl font-serif tracking-tighter text-brand-slate uppercase italic">
          Nyio <span className="text-brand-gold not-italic font-light">Corp.</span>
        </div>
        
        <div className="flex gap-10">
          {['About', 'Gallery', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} 
               className="text-[10px] uppercase tracking-[0.4em] font-semibold text-zinc-500 hover:text-brand-gold transition-all">
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}