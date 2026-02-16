'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PRODUCTS } from '../data';

export default function Gallery() {
  const [selectedProduct, setSelectedProduct] = useState<null | typeof PRODUCTS[0]>(null);

  const handleInquiry = () => {
    // 1. Broadcast the product name to the Contact form
    const event = new CustomEvent('productInquiry', { 
      detail: { productName: selectedProduct?.name } 
    });
    window.dispatchEvent(event);

    // 2. Smoothly close the modal and scroll to Contact
    setSelectedProduct(null);
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
        // Optional: Focus the message area to show the auto-populated text
        const messageArea = contactSection.querySelector('textarea');
        if (messageArea) messageArea.focus();
      }
    }, 450); // Delay slightly longer than the modal exit animation
  };

  return (
    <section id="gallery" className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-24 text-center md:text-left">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-gold text-[10px] uppercase tracking-[0.8em] font-bold block mb-4"
          >
            Curated Productions
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="font-heading italic text-brand-slate text-5xl md:text-7xl"
          >
            The Collection.
          </motion.h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32">
          {PRODUCTS.map((product) => (
            <motion.div 
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="group cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream mb-10 shadow-sm group-hover:shadow-premium transition-all duration-700 ease-in-out">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-[3s] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" 
                />
                
                {/* Premium View Details Overlay */}
                <div className="absolute inset-0 bg-brand-slate/0 group-hover:bg-brand-slate/20 transition-colors duration-700 flex items-center justify-center">
                   <div className="opacity-0 group-hover:opacity-100 translate-y-6 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      <span className="text-white text-[10px] uppercase tracking-[0.5em] border border-white/30 px-10 py-5 backdrop-blur-md font-medium">
                        View Details
                      </span>
                   </div>
                </div>
              </div>

              {/* Product Info Bar */}
              <div className="flex justify-between items-end border-b border-brand-gold/20 pb-10">
                <div>
                  <h3 className="font-heading italic text-3xl text-brand-slate mb-2">{product.name}</h3>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                    {product.category}
                  </p>
                </div>
                <span className="text-brand-gold/30 font-heading italic text-5xl leading-none">
                  0{product.id}
                </span>
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
            className="fixed inset-0 z-[10000] bg-brand-slate/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 bg-white shadow-2xl overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Image Side */}
              <div className="h-[40vh] md:h-[85vh] overflow-hidden bg-brand-cream">
                <img 
                  src={selectedProduct.image} 
                  className="w-full h-full object-cover" 
                  alt={selectedProduct.name}
                />
              </div>

              {/* Modal Text Side */}
              <div className="p-10 md:p-20 flex flex-col justify-center relative bg-white">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-8 right-8 text-brand-slate/40 hover:text-brand-slate transition-colors p-2"
                  aria-label="Close modal"
                >
                  <svg className="w-8 h-8 font-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-8">
                  Manufacturing Specifications
                </span>
                <h2 className="font-heading italic text-brand-slate mb-8 text-5xl md:text-7xl leading-tight">
                  {selectedProduct.name}
                </h2>
                
                <div className="h-[1px] w-20 bg-brand-gold mb-10"></div>
                
                <p className="font-body text-zinc-500 text-lg leading-relaxed mb-12 max-w-md">
                  {selectedProduct.details}
                </p>

                <button 
                  onClick={handleInquiry}
                  className="btn-premium w-full md:w-max shadow-lg"
                >
                  Inquire for Production
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}