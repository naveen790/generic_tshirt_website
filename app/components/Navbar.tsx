'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-8 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl z-[9999]">
      <div className="bg-white/70 backdrop-blur-2xl border border-brand-gold/10 px-8 md:px-12 py-5 rounded-full flex justify-between items-center shadow-premium transition-all duration-500">
        
        {/* Logo Branding */}
        <div className="font-heading text-xl md:text-2xl tracking-tighter text-brand-slate italic">
          Nyio <span className="text-brand-gold not-italic font-light">Corp.</span>
        </div>
        
        {/* Navigation Links */}
        <div className="flex gap-8 md:gap-12">
          {['About', 'Gallery', 'Contact'].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              className="relative text-[9px] md:text-[10px] uppercase tracking-[0.5em] font-bold text-zinc-400 hover:text-brand-gold transition-colors duration-300 group"
            >
              {item}
              {/* Animated underline effect */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:width-full group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}