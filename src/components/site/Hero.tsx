import heroBottle from "@/assets/hero-bottle.jpg";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-noir text-ivory">
      {/* Atmosphere layers */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-gold/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-champagne/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, white 1px, transparent 1px), radial-gradient(circle at 70% 80%, white 1px, transparent 1px)",
            backgroundSize: "180px 180px, 240px 240px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-32 pb-20 md:grid-cols-12 md:px-12 md:pt-40">
        {/* Text */}
        <div className="md:col-span-6 lg:col-span-7">
          <div className="animate-fade-up flex items-center gap-3 text-[11px] uppercase tracking-luxe text-gold/90">
            <span className="h-px w-10 bg-gold/60" />
            Maison de Parfum · Est. 2019
          </div>
          <h1 className="animate-fade-up mt-8 font-display text-[clamp(3rem,8vw,7rem)] leading-[0.95] tracking-tight text-balance">
            Two notes.
            <br />
            <em className="text-gold-gradient font-light italic">One signature.</em>
          </h1>
          <p className="animate-fade-up mt-8 max-w-md text-base leading-relaxed text-ivory/70 md:text-lg">
            Compositions built on a single dialogue — two notes that linger long after
            the room is empty. Quiet, considered, unmistakably yours.
          </p>
          <div className="animate-fade-up mt-12 flex flex-wrap items-center gap-6">
            <a
              href="#collection"
              className="group relative inline-flex items-center gap-3 bg-gold px-8 py-4 text-[11px] uppercase tracking-luxe text-noir transition-all hover:bg-champagne shadow-gold-glow"
            >
              Explore the Collection
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#story" className="text-[11px] uppercase tracking-luxe text-ivory/70 hover:text-gold transition-colors border-b border-ivory/20 pb-1">
              Our Story
            </a>
          </div>

          <div className="mt-20 grid max-w-md grid-cols-3 gap-8 border-t border-ivory/10 pt-8">
            {[
              ["12h+", "Lasting wear"],
              ["100%", "Natural extracts"],
              ["07", "Signature accords"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl text-gold">{n}</div>
                <div className="mt-1 text-[10px] uppercase tracking-luxe text-ivory/50">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottle */}
        <div className="relative md:col-span-6 lg:col-span-5">
          <div className="animate-fade-in-slow relative mx-auto max-w-md">
            <div className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-3xl animate-shimmer" />
            <img
              src={heroBottle}
              alt="Two Notes signature perfume bottle in amber glass with golden cap"
              width={1080}
              height={1920}
              className="relative w-full object-contain drop-shadow-[0_40px_60px_rgba(0,0,0,0.6)]"
            />
            {/* floating label */}
            <div className="absolute right-0 top-12 hidden border border-gold/40 bg-noir/60 px-5 py-3 backdrop-blur-sm md:block">
              <div className="text-[10px] uppercase tracking-luxe text-gold">N° 01</div>
              <div className="font-display italic text-ivory">Ambre Privé</div>
            </div>
            <div className="absolute -bottom-4 left-0 hidden border border-gold/40 bg-noir/60 px-5 py-3 backdrop-blur-sm md:block">
              <div className="text-[10px] uppercase tracking-luxe text-ivory/60">Eau de Parfum</div>
              <div className="font-display italic text-gold">100ml · €185</div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom marquee */}
      <div className="relative z-10 border-t border-ivory/10 bg-noir/40 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-6 px-6 py-5 text-[10px] uppercase tracking-luxe text-ivory/50 md:px-12">
          <span>◆ Crafted in Grasse</span>
          <span>◆ Vegan & Cruelty-Free</span>
          <span>◆ Hand-numbered editions</span>
          <span>◆ Complimentary engraving</span>
        </div>
      </div>
    </section>
  );
}
