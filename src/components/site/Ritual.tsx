export function Ritual() {
  const steps = [
    { n: "I", t: "Discover", d: "Begin with our Library — a curated set of seven 2ml flacons delivered to your door." },
    { n: "II", t: "Wear", d: "Live with each composition for several days. Note how it shifts on your skin, in your hours." },
    { n: "III", t: "Choose", d: "Select your signature. Receive your full 100ml flacon, hand-numbered and engraved." },
  ];
  return (
    <section className="relative overflow-hidden bg-soft-beige">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.4]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 80% 20%, oklch(0.82 0.06 75 / 0.4), transparent 50%), radial-gradient(circle at 10% 90%, oklch(0.74 0.11 75 / 0.2), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center md:px-12 md:py-36">
        <div className="flex items-center justify-center gap-3 text-[11px] uppercase tracking-luxe text-taupe">
          <span className="h-px w-10 bg-gold" /> The Ritual <span className="h-px w-10 bg-gold" />
        </div>
        <h2 className="mx-auto mt-8 max-w-3xl font-display text-5xl leading-[1.05] text-foreground md:text-6xl text-balance">
          Find the scent that becomes <em className="text-warm-brown italic">your own</em>.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-taupe">
          A signature fragrance is not chosen in an afternoon. It is met, lived with, and
          recognised — slowly, then all at once.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {steps.map((s) => (
            <div key={s.n} className="bg-card p-10 text-left">
              <div className="font-display text-5xl text-gold">{s.n}</div>
              <div className="mt-6 font-display text-2xl text-foreground">{s.t}</div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
            </div>
          ))}
        </div>

        <a
          href="#"
          className="mt-16 inline-flex items-center gap-3 border border-foreground bg-foreground px-10 py-4 text-[11px] uppercase tracking-luxe text-primary-foreground transition-all hover:bg-warm-brown hover:border-warm-brown"
        >
          Order the Discovery Library — €38
        </a>
      </div>
    </section>
  );
}
