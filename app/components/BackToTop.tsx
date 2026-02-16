'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down 400px
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[999] group"
          aria-label="Back to top"
        >
          <div className="relative flex items-center justify-center w-14 h-14 bg-white/80 backdrop-blur-md border border-brand-gold/20 rounded-full shadow-premium group-hover:border-brand-gold transition-all duration-500">
            <svg 
              className="w-5 h-5 text-brand-gold transition-transform duration-500 group-hover:-translate-y-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 15l7-7 7 7" />
            </svg>
            
            {/* Subtle rotating border on hover */}
            <div className="absolute inset-0 border border-transparent group-hover:border-brand-gold/30 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
          </div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}