'use client';
import { CLIENT_LOGOS } from '../data';

export default function Logos() {
  return (
    <section className="bg-brand-cream py-24 border-y border-brand-gold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <p className="text-[10px] uppercase tracking-[0.6em] text-zinc-400 font-bold">
          Authorized Manufacturing Partners
        </p>
      </div>

      <div className="flex select-none overflow-hidden">
        {/* Container 1 */}
        <div className="flex shrink-0 items-center justify-around gap-32 min-w-full animate-infinite-scroll">
          {CLIENT_LOGOS.map((logo, i) => (
            <img 
              key={`logo-1-${i}`}
              src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`} 
              alt={logo}
              // Increased height from h-16 to h-28 (7rem / 112px)
              className="h-20 md:h-28 w-auto object-contain transition-all duration-500 hover:scale-110 filter drop-shadow-sm"
            />
          ))}
        </div>

        {/* Container 2 (Duplicate for seamless loop) */}
        <div className="flex shrink-0 items-center justify-around gap-32 min-w-full animate-infinite-scroll" aria-hidden="true">
          {CLIENT_LOGOS.map((logo, i) => (
            <img 
              key={`logo-2-${i}`}
              src={`/logos/${logo.toLowerCase().replace(/\s+/g, '')}.png`} 
              alt={logo}
              className="h-20 md:h-28 w-auto object-contain transition-all duration-500 hover:scale-110 filter drop-shadow-sm"
            />
          ))}
        </div>
      </div>
    </section>
  );
}