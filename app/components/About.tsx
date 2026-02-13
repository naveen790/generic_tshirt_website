export default function About() {
  return (
    <section id="about" className="bg-[#0A0A0A] py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Core Experience */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
              15 Years of <br />Manufacturing Mastery.
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              Nyio Corp is a specialized apparel sourcing agent with a deep focus on high-quality T-shirt and Hoodie production. For over a decade and a half, we have bridged the gap between global retailers and specialized manufacturing hubs.
            </p>
            <p className="text-zinc-500 text-sm italic">
              "We don't just source; we manage the lifecycle of the garment from yarn selection to final retail distribution."
            </p>
          </div>
          <div className="relative aspect-video bg-zinc-900 overflow-hidden rounded-sm">
             {/* Placeholder for factory image */}
             <img src="/factory-floor.jpg" alt="Nyio Corp Factory" className="w-full h-full object-cover grayscale opacity-60" />
          </div>
        </div>

        {/* Vision & Values Cards */}
        <div id="vision" className="grid md:grid-cols-3 gap-1">
          <div className="bg-zinc-900/50 p-12 border border-white/5">
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4 block">01. Vision</span>
            <h3 className="text-xl text-white font-serif mb-4">Precision Sourcing</h3>
            <p className="text-zinc-500 text-sm">To redefine apparel supply chains through absolute transparency and uncompromising quality control.</p>
          </div>
          <div className="bg-zinc-900/50 p-12 border border-white/5">
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4 block">02. Punctuality</span>
            <h3 className="text-xl text-white font-serif mb-4">On-Time, Every Time</h3>
            <p className="text-zinc-500 text-sm">We value time as much as fabric. Our logistics network ensures deadline compliance for 500k+ unit orders.</p>
          </div>
          <div className="bg-zinc-900/50 p-12 border border-white/5">
            <span className="text-zinc-600 text-[10px] uppercase tracking-widest mb-4 block">03. Quality</span>
            <h3 className="text-xl text-white font-serif mb-4">Highest Standards</h3>
            <p className="text-zinc-500 text-sm">Working with multiple certified factories, we implement rigorous AQL standards at every production stage.</p>
          </div>
        </div>
      </div>
    </section>
  );
}