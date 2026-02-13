export default function Hero() {
  return (
    <section className="relative h-[90vh] bg-premium-cream flex items-center justify-center pt-24">
      <div className="text-center z-10">
        <span className="text-premium-gold text-xs uppercase tracking-[0.6em] mb-6 block font-semibold">
          Est. 2011 • Sourcing Excellence
        </span>
        <h1 className="text-7xl md:text-9xl font-serif text-premium-charcoal leading-none mb-8">
          The Art of <br /> <span className="italic">Apparel.</span>
        </h1>
        <div className="h-[1px] w-24 bg-premium-gold mx-auto mb-8"></div>
        <p className="max-w-md mx-auto text-zinc-500 text-sm leading-relaxed tracking-wide">
          Bridging the gap between visionary design and global manufacturing scale.
        </p>
      </div>
    </section>
  );
}