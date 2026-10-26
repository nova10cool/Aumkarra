import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ganesha from "@/assets/ganesha.jpg";
import vedaLife from "@/assets/veda-life.jpg";
import { ImageScene } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "Coming Soon — Veda Life Agarbhati · aumkarra" },
    { name: "description", content: "Something sacred is about to rise. Veda Life, an exquisite fragrance of the divine, and more creations from aumkarra." },
    { property: "og:title", content: "Coming Soon — Veda Life Agarbhati · aumkarra" },
    { property: "og:description", content: "Something sacred is about to rise. Veda Life, an exquisite fragrance of the divine, and more creations from aumkarra." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Upcoming,
});

function Upcoming() {
  return <>
    <ImageScene src={ganesha} align="left" position="65% center">
      <p className="eyebrow text-olive">More from aumkarra</p>
      <h1 className="mt-5 text-5xl glow-text md:text-7xl">Coming soon</h1>
      <p className="mt-7 font-serif text-xl leading-relaxed text-ivory/80">New creations. The same reverence.</p>
    </ImageScene>

    <section className="overflow-hidden border-t border-border px-6 py-24 md:py-32">
      <div className="mx-auto grid w-full max-w-5xl items-center gap-14 md:grid-cols-2 md:gap-20">
        <img
          src={vedaLife}
          alt="Veda Life agarbhati tube standing beside its cap, lit by an oil lamp"
          className="mx-auto w-full max-w-xs md:max-w-sm"
        />
        <div className="ethereal text-center md:text-left">
          <p className="eyebrow text-olive">Something sacred is about to rise</p>
          <h2 className="mt-5 font-display text-6xl leading-none glow-text md:text-7xl">Veda Life</h2>
          <span className="mx-auto mt-7 block h-px w-24 bg-gradient-to-r from-transparent via-gold/70 to-transparent md:mx-0" />
          <p className="mt-7 font-serif text-2xl leading-relaxed text-ivory/85">An exquisite fragrance of the divine.</p>
          <p className="mt-5 font-serif text-lg leading-relaxed text-ivory/60">Vedic sandal agarbhati, handcrafted with all-natural ingredients — for your pooja room, or your desk.</p>
          <Button asChild variant="link" className="mt-8 px-0 eyebrow"><Link to="/contact">Enquire <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  </>;
}
