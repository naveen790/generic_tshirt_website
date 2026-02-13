export default function Contact() {
  return (
    <section id="contact" className="bg-white py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 mb-20">
          {/* Left Side: Info */}
          <div>
            <h2 className="text-5xl font-serif text-black mb-8 italic text-balance">Let's start your production.</h2>
            <p className="text-zinc-500 mb-12 max-w-sm">
              Contact Nyio Corp for manufacturing inquiries, factory audits, or global distribution partnerships.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">New York Headquarters</h4>
                <p className="text-black font-medium text-sm">1681 Broadway, New York, NY 10019</p>
                <p className="text-zinc-600 text-xs mt-1">+1 (212) 555-0198</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">Production Hub</h4>
                <p className="text-black font-medium text-sm">Tiruppur, Tamil Nadu, India</p>
                <p className="text-zinc-500 text-xs mt-1">Specialized T-Shirt & Hoodie Manufacturing</p>
              </div>
              <div>
                <h4 className="text-[10px] uppercase tracking-widest text-zinc-400 mb-1 font-bold">Direct Inquiry</h4>
                <p className="text-black font-medium text-sm underline underline-offset-4 italic">production@nyiocorp.com</p>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Form */}
          <form className="space-y-8 bg-zinc-50 p-10 border border-zinc-100">
            <div className="grid grid-cols-2 gap-8">
              <div className="flex flex-col border-b border-zinc-200 pb-2">
                <label className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Full Name</label>
                <input type="text" className="bg-transparent outline-none py-2 text-black text-sm" placeholder="John Doe" />
              </div>
              <div className="flex flex-col border-b border-zinc-200 pb-2">
                <label className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Brand / Company</label>
                <input type="text" className="bg-transparent outline-none py-2 text-black text-sm" placeholder="Company Name" />
              </div>
            </div>
            
            <div className="flex flex-col border-b border-zinc-200 pb-2">
              <label className="text-[8px] uppercase tracking-widest text-zinc-400 font-bold">Production Details</label>
              <textarea className="bg-transparent outline-none py-2 text-black h-32 resize-none text-sm leading-relaxed" placeholder="Tell us about your garment requirements, volume, and timeline..." />
            </div>

            <button className="w-full bg-black text-white py-6 uppercase tracking-[0.3em] text-[10px] font-bold hover:bg-zinc-800 transition-all shadow-lg">
              Submit Sourcing Request
            </button>
          </form>
        </div>

        {/* Global Presence Maps */}
        <div className="grid md:grid-cols-2 gap-4 h-[400px]">
          {/* Broadway New York Map */}
          <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.3174110323954!2d-73.98571362342048!3d40.76324837138541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2589665784711%3A0xbdfe7474c86064f6!2sBroadway%20Theatre!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 text-[10px] tracking-widest uppercase pointer-events-none">NY Headquarters</div>
          </div>

          {/* Tiruppur Manufacturing Map */}
          <div className="relative group overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125322.44153123533!2d77.26871078516518!3d11.108524185244195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9070242557527%3A0x47509516999a1687!2sTiruppur%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              loading="lazy"
            ></iframe>
            <div className="absolute top-4 left-4 bg-black/80 text-white px-4 py-2 text-[10px] tracking-widest uppercase pointer-events-none">Tiruppur Factory Hub</div>
          </div>
        </div>
      </div>
    </section>
  );
}