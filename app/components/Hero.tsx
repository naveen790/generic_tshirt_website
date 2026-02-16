'use client';
import { motion } from 'framer-motion';
import Link from 'next/link'; // Better for Next.js navigation

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-cream">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]"></div>

      <div className="relative z-10 text-center px-6">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-brand-gold text-[10px] md:text-xs uppercase tracking-[0.8em] mb-8 block font-bold"
        >
          Est. 2011 • Sourcing Excellence
        </motion.span>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-heading text-6xl md:text-9xl text-brand-slate leading-[0.9] mb-10"
        >
          The Art of <br /> 
          <span className="italic font-light text-brand-gold">Apparel.</span>
        </motion.h1>

        {/* Fixed Width Animation */}
        <div className="flex justify-center mb-10">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-[1px] bg-brand-gold"
          ></motion.div>
        </div>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="max-w-md mx-auto text-zinc-500 text-sm md:text-base leading-relaxed tracking-wide font-body"
        >
          Bridging the gap between visionary design and <br className="hidden md:block" /> global manufacturing scale.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12"
        >
          <Link href="#gallery" className="btn-premium">
            Explore Collection
          </Link>
        </motion.div>
      </div>

      {/* Fixed Side Element Logic */}
      <div className="absolute left-6 bottom-24 hidden lg:block">
        <div className="relative">
          <p className="absolute left-0 bottom-0 whitespace-nowrap text-[10px] uppercase tracking-[0.5em] text-brand-gold/40 -rotate-90 origin-bottom-left">
            Manufacturing Scale • 2026
          </p>
        </div>
      </div>
    </section>
  );
}