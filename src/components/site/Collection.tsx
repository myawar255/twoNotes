import noir from "@/assets/fragrance-noir.jpg";
import blanc from "@/assets/fragrance-blanc.jpg";
import dore from "@/assets/fragrance-dore.jpg";

const fragrances = [
  {
    n: "N° 02",
    name: "Bois & Rose",
    family: "Woody Floral",
    notes: "Oud · Bulgarian Rose",
    desc: "A smouldering duet of aged oudh and crushed rose absolute. Worn in low light, recalled in detail.",
    price: "€195",
    img: noir,
    tone: "dark" as const,
  },
  {
    n: "N° 03",
    name: "Jasmin & Bergamote",
    family: "Solar Floral",
    notes: "Jasmin Sambac · Bergamot",
    desc: "Morning citrus suspended in white petals. The clean linen of the Mediterranean at first light.",
    price: "€175",
    img: blanc,
    tone: "light" as const,
  },
  {
    n: "N° 04",
    name: "Vanille & Tonka",
    family: "Oriental Gourmand",
    notes: "Madagascar Vanilla · Tonka Bean",
    desc: "Powdered warmth and almond shadow. A whispered indulgence that settles into the skin like silk.",
    price: "€185",
    img: dore,
    tone: "warm" as const,
  },
];

export function Collection() {
  return (
    <section id="collection" className="bg-noir text-ivory">
      <div className="mx-auto max-w-7xl px-6 pt-28 pb-12 md:px-12 md:pt-36">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-luxe text-gold">
              <span className="h-px w-10 bg-gold" />
              The Collection
            </div>
            <h2 className="mt-6 font-display text-5xl leading-[1.05] md:text-7xl text-balance">
              Seven duets. <em className="text-gold-gradient italic">One you.</em>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/60">
            Each fragrance in the maison is a conversation between two ingredients —
            shaped to become unmistakably your own.
          </p>
        </div>
      </div>

      <div id="notes" className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 pb-28 md:grid-cols-3 md:px-12 md:pb-36">
        {fragrances.map((f, i) => (
          <article
            key={f.n}
            className="group relative overflow-hidden border border-ivory/10 bg-gradient-to-b from-warm-brown/40 to-noir transition-all hover:border-gold/40 hover:-translate-y-1 duration-500"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={f.img}
                alt={`${f.name} perfume by Two Notes`}
                loading={i === 0 ? "eager" : "lazy"}
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-fade-noir opacity-90" />
              <div className="absolute left-6 top-6 text-[10px] uppercase tracking-luxe text-gold">
                {f.n}
              </div>
              <div className="absolute right-6 top-6 border border-gold/40 px-3 py-1 text-[10px] uppercase tracking-luxe text-ivory/80">
                {f.family}
              </div>
            </div>

            <div className="relative space-y-5 p-8">
              <div>
                <h3 className="font-display text-3xl italic text-ivory">{f.name}</h3>
                <p className="mt-2 text-[11px] uppercase tracking-luxe text-gold/80">{f.notes}</p>
              </div>
              <p className="text-sm leading-relaxed text-ivory/60">{f.desc}</p>
              <div className="flex items-center justify-between border-t border-ivory/10 pt-5">
                <span className="font-display text-xl text-gold">{f.price}</span>
                <button className="text-[11px] uppercase tracking-luxe text-ivory/80 transition-colors group-hover:text-gold">
                  Discover →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
