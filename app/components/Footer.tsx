'use client';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-slate text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          
          {/* Brand Identity */}
          <div className="md:col-span-2">
            <div className="font-heading text-4xl italic mb-8 text-white">
              Nyio <span className="text-brand-gold not-italic font-light">Corp</span>
            </div>
            {/* Changed to text-white with 70% opacity for maximum visibility and softness */}
            <p className="text-zinc-300 max-w-sm leading-relaxed font-body text-base lg:text-lg">
              Specialized apparel sourcing and manufacturing. We help global brands scale their production with precision and care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-10">
              Navigation
            </h4>
            <ul className="space-y-5">
              {['About', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="text-zinc-300 hover:text-brand-gold transition-colors text-sm font-body tracking-wide"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact */}
          <div>
            <h4 className="text-[10px] uppercase tracking-[0.5em] font-bold text-brand-gold mb-10">
              Inquiries
            </h4>
            <ul className="space-y-5 text-sm text-zinc-300 font-body tracking-wide">
              <li className="hover:text-white transition-colors cursor-pointer">
                production@nyiocorp.com
              </li>
              <li>Tiruppur, India</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-medium">
            © {currentYear} Nyio Corp. All Rights Reserved.
          </p>
          
          <div className="flex gap-10">
            {['LinkedIn', 'Instagram', 'WhatsApp'].map((social) => (
              <a 
                key={social}
                href="#" 
                className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 hover:text-brand-gold transition-all duration-300"
              >
                {social}
              </a>
            ))}
          </div>
          
          <p className="text-[10px] uppercase tracking-[0.4em] text-brand-gold/50 font-heading italic">
            Quality First. Always.
          </p>
        </div>
      </div>
    </footer>
  );
}