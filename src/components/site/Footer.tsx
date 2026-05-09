export function Footer() {
  return (
    <footer className="bg-noir text-ivory">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="font-display text-3xl">Two Notes <span className="text-gold">◆</span></div>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              Receive new compositions, atelier letters, and private invitations to our
              salon in Grasse. No more than once each season.
            </p>
            <form className="mt-8 flex max-w-md border-b border-ivory/20 pb-2 focus-within:border-gold">
              <input
                type="email"
                placeholder="Your private address"
                className="flex-1 bg-transparent text-sm text-ivory placeholder:text-ivory/40 outline-none"
              />
              <button className="text-[11px] uppercase tracking-luxe text-gold hover:text-champagne">
                Subscribe →
              </button>
            </form>
          </div>

          <div className="md:col-span-7 grid grid-cols-2 gap-10 md:grid-cols-3">
            {[
              ["Maison", ["Our Story", "The Atelier", "Sustainability", "Press"]],
              ["Boutique", ["Collection", "Discovery Set", "Engraving", "Refill Service"]],
              ["Service", ["Contact", "Care", "Shipping", "Salon Visits"]],
            ].map(([h, items]) => (
              <div key={h as string}>
                <div className="text-[10px] uppercase tracking-luxe text-gold">{h as string}</div>
                <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                  {(items as string[]).map((i) => (
                    <li key={i}><a href="#" className="hover:text-gold transition-colors">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-luxe text-ivory/40 md:flex-row">
          <span>© {new Date().getFullYear()} Two Notes · Maison de Parfum</span>
          <span>Grasse — Paris — Kyoto</span>
          <span>Crafted with patience</span>
        </div>
      </div>
    </footer>
  );
}
