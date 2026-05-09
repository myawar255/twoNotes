export function Testimonial() {
  return (
    <section id="journal" className="relative overflow-hidden bg-warm-brown text-ivory">
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle at 30% 50%, oklch(0.74 0.11 75 / 0.4), transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-5xl px-6 py-28 text-center md:px-12 md:py-36">
        <div className="font-display text-7xl text-gold/40 leading-none">“</div>
        <blockquote className="mt-2 font-display text-3xl italic leading-[1.3] text-ivory md:text-5xl text-balance">
          I have worn Bois & Rose for two years. I am no longer
          remembered by my name, but by the trace I leave in a room.
        </blockquote>
        <div className="mt-12 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-gold/60" />
          <div className="text-left">
            <div className="font-display italic text-gold">Anaïs Leroux</div>
            <div className="text-[10px] uppercase tracking-luxe text-ivory/50">Editor, Maison Review</div>
          </div>
          <div className="h-px w-12 bg-gold/60" />
        </div>
      </div>
    </section>
  );
}
