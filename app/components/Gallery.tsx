'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data';

export default function Gallery() {
  // State to handle which product is being zoomed
  const [selectedProduct, setSelectedProduct] = useState<null | typeof PRODUCTS[0]>(null);

  // Function to handle the inquiry click
  const handleInquiry = () => {
    setSelectedProduct(null); // Close the modal
    // Smooth scroll to contact section after a short delay
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Optional: Focus the first input field
        const firstInput = contactSection.querySelector('input');
        if (firstInput) firstInput.focus();
      }
    }, 400);
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-24 text-center md:text-left">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold block mb-4">
            Curated Productions
          </span>
          <h2 className="text-5xl md:text-7xl font-serif italic text-brand-slate">
            The Collection.
          </h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-brand-cream mb-8 shadow-sm group-hover:shadow-xl transition-all duration-700">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" 
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-brand-slate/0 group-hover:bg-brand-slate/10 transition-colors duration-700 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                      <span className="text-white text-[9px] uppercase tracking-[0.3em] border border-white/40 px-6 py-3 backdrop-blur-md">
                        Expand Detail
                      </span>
                   </div>
                </div>
              </div>

              <div className="flex justify-between items-start border-b border-zinc-100 pb-8">
                <div>
                  <h3 className="text-2xl font-serif text-brand-slate mb-1">{product.name}</h3>
                  <p className="text-zinc-400 text-[10px] uppercase tracking-widest">{product.category}</p>
                </div>
                <span className="text-brand-gold font-serif italic text-xl">0{product.id}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox / Zoom Overlay */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] bg-brand-slate/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()} // Stop click from closing when clicking content
            >
              {/* Image Side */}
              <div className="h-[40vh] md:h-[80vh] overflow-hidden">
                <img 
                  src={selectedProduct.image} 
                  className="w-full h-full object-cover" 
                  alt={selectedProduct.name}
                />
              </div>

              {/* Text Side */}
              <div className="p-8 md:p-16 flex flex-col justify-center relative bg-white">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-8 right-8 text-zinc-400 hover:text-brand-slate transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <span className="text-brand-gold text-[10px] uppercase tracking-[0.5em] font-bold mb-4">
                  Sourcing Specifications
                </span>
                <h2 className="text-4xl md:text-6xl font-serif italic text-brand-slate mb-8">
                  {selectedProduct.name}
                </h2>
                
                <div className="h-[1px] w-16 bg-brand-gold mb-8"></div>
                
                <p className="text-zinc-500 text-sm md:text-base leading-relaxed mb-12">
                  {selectedProduct.details}
                </p>

                <div className="space-y-4">
                  <button 
                    onClick={handleInquiry}
                    className="w-full md:w-max bg-brand-slate text-white py-6 px-12 text-[10px] uppercase tracking-[0.4em] font-bold hover:bg-brand-gold transition-all duration-500 shadow-lg active:scale-95"
                  >
                    Inquire for Production
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}