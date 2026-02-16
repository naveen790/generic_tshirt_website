'use client';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleInquiryEvent = (event: any) => {
      const pName = event.detail.productName;
      const template = `I am interested in discussing production for the ${pName}. Please provide more information regarding MOQs and customization options.`;
      setMessage(template);
    };

    window.addEventListener('productInquiry', handleInquiryEvent);
    return () => window.removeEventListener('productInquiry', handleInquiryEvent);
  }, []);

  return (
    <section id="contact" className="py-32 px-6 bg-brand-cream">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Left Side: Branding/Info */}
        <div className="flex flex-col justify-center">
          <span className="text-brand-gold text-[10px] uppercase tracking-[0.6em] font-bold mb-6">
            Partnership Inquiries
          </span>
          <h2 className="font-heading italic text-brand-slate mb-8 !text-5xl md:!text-7xl leading-tight">
            Let's build <br /> your legacy.
          </h2>
          <p className="max-w-md mb-12 text-lg text-zinc-600 font-body">
            From high-GSM essentials to complex streetwear collections, we provide the scale and precision your brand demands.
          </p>
          
          <div className="space-y-6">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">Global Office</p>
              <p className="text-brand-slate font-medium">Tiruppur, Tamil Nadu, India</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-brand-gold mb-1">Direct Line</p>
              <p className="text-brand-slate font-medium">production@nyiocorp.com</p>
            </div>
          </div>
        </div>

        {/* Right Side: The Form */}
        <div className="bg-white p-8 md:p-16 shadow-premium border border-brand-gold/10">
          <form className="space-y-8">
            {/* Top Row: Name and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-3 font-bold text-zinc-400">Name</label>
                <input 
                  type="text" 
                  placeholder="John Doe"
                  className="bg-transparent border-b border-zinc-200 py-3 focus:border-brand-gold outline-none transition-colors font-body"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-3 font-bold text-zinc-400">Email</label>
                <input 
                  type="email" 
                  placeholder="john@brand.com"
                  className="bg-transparent border-b border-zinc-200 py-3 focus:border-brand-gold outline-none transition-colors font-body"
                  required
                />
              </div>
            </div>

            {/* Second Row: Phone and Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-3 font-bold text-zinc-400">Phone Number</label>
                <input 
                  type="tel" 
                  placeholder="+1 212-246-0000"
                  className="bg-transparent border-b border-zinc-200 py-3 focus:border-brand-gold outline-none transition-colors font-body"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[10px] uppercase tracking-widest mb-3 font-bold text-zinc-400">Service Required</label>
                <div className="relative">
                  <select className="w-full bg-transparent border-b border-zinc-200 py-3 focus:border-brand-gold outline-none transition-colors font-body appearance-none">
                    <option>Custom Manufacturing</option>
                    <option>Fabric Sourcing</option>
                    <option>White Label Collection</option>
                  </select>
                  <div className="absolute right-0 top-4 pointer-events-none text-zinc-400">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-[10px] uppercase tracking-widest mb-3 font-bold text-zinc-400">Inquiry Message</label>
              <textarea 
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell us about your project..."
                className="bg-transparent border-b border-zinc-200 py-3 focus:border-brand-gold outline-none transition-colors font-body resize-none"
                required
              ></textarea>
            </div>

            <button type="submit" className="btn-premium w-full group overflow-hidden relative">
               <span className="relative z-10 transition-transform duration-300 inline-block group-hover:translate-x-2">
                 Send Inquiry
               </span>
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}