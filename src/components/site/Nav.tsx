export function Nav({ dark = false }: { dark?: boolean }) {
  const base = dark ? "text-ivory/90" : "text-foreground";
  const accent = dark ? "text-ivory" : "text-foreground";
  return (
    <nav className={`absolute top-0 left-0 right-0 z-30 ${base}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-7 md:px-12">
        <div className="flex items-center gap-2">
          <span className={`font-display text-2xl tracking-wide ${accent}`}>Two Notes</span>
          <span className="text-gold text-xs">◆</span>
        </div>
        <ul className="hidden items-center gap-10 text-[11px] uppercase tracking-luxe md:flex">
          <li><a href="#collection" className="hover:text-gold transition-colors">Collection</a></li>
          <li><a href="#story" className="hover:text-gold transition-colors">Maison</a></li>
          <li><a href="#notes" className="hover:text-gold transition-colors">Notes</a></li>
          <li><a href="#journal" className="hover:text-gold transition-colors">Journal</a></li>
        </ul>
        <button className={`text-[11px] uppercase tracking-luxe border-b ${dark ? "border-gold/60 text-ivory" : "border-foreground/40"} pb-1 hover:border-gold hover:text-gold transition-colors`}>
          Discover
        </button>
      </div>
    </nav>
  );
}
