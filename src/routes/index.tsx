import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Philosophy } from "@/components/site/Philosophy";
import { Collection } from "@/components/site/Collection";
import { Ritual } from "@/components/site/Ritual";
import { Testimonial } from "@/components/site/Testimonial";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Two Notes — Maison de Parfum · Signature Fragrances" },
      {
        name: "description",
        content:
          "Two Notes is a boutique fragrance house composing signature perfumes built on a single duet of two ingredients. Discover the collection.",
      },
      { property: "og:title", content: "Two Notes — Maison de Parfum" },
      { property: "og:description", content: "Compositions built on a single dialogue. Quiet, considered, unmistakably yours." },
    ],
  }),
});

function Index() {
  return (
    <main className="relative">
      <Nav dark />
      <Hero />
      <Philosophy />
      <Collection />
      <Ritual />
      <Testimonial />
      <Footer />
    </main>
  );
}
