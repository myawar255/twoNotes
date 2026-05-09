import atelier from "@/assets/atelier.jpg";

export function Philosophy() {
  return (
    <section id="story" className="relative bg-gradient-ivory">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-28 md:grid-cols-12 md:px-12 md:py-36">
        <div className="md:col-span-5">
          <div className="sticky top-24">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-luxe text-taupe">
              <span className="h-px w-10 bg-gold" />
              The Philosophy
            </div>
            <h2 className="mt-8 font-display text-5xl leading-[1.05] text-foreground md:text-6xl text-balance">
              A fragrance is not what you wear.
              <em className="text-warm-brown italic"> It is what remains.</em>
            </h2>
            <div className="mt-10 overflow-hidden rounded-sm shadow-luxe">
              <img
                src={atelier}
                alt="Perfumer's hands composing fragrance with glass droppers and dried botanicals"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="md:col-span-6 md:col-start-7">
          <div className="space-y-12">
            <p className="font-display text-2xl italic leading-relaxed text-warm-brown md:text-3xl">
              "We compose with restraint. Two ingredients, in conversation, can say
              more than a chord of twenty."
            </p>
            <div className="h-px w-24 bg-gold" />
            <div className="space-y-6 text-base leading-relaxed text-taupe">
              <p>
                Two Notes was founded in a small atelier in Grasse with a single conviction:
                that the most enduring scents are the most honest. We work with raw materials
                drawn from our network of growers — bergamot from Calabria, oud from Assam,
                jasmine sambac from the dawn harvest.
              </p>
              <p>
                Each composition is built around a duet. A primary note that announces;
                a counter-note that lingers. Together they form a signature that becomes,
                in time, indistinguishable from the wearer.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-px bg-border">
              {[
                ["Sourced", "Direct from growers across 14 countries"],
                ["Composed", "By master perfumer Élise Marchand"],
                ["Bottled", "Hand-finished in Provence"],
                ["Numbered", "Each flacon individually engraved"],
              ].map(([t, d]) => (
                <div key={t} className="bg-card p-8">
                  <div className="font-display text-xl text-foreground">{t}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
