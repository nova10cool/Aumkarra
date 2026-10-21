import { createFileRoute } from "@tanstack/react-router";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import devi from "@/assets/devi.jpg.asset.json";
import { ImageScene, PageHero, Ornament } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Aumkarra — Our Story" },
      { name: "description", content: "Aumkarra creates devotional Vedic calendars that carry tradition into the modern home." },
      { property: "og:title", content: "About Aumkarra — Our Story" },
      { property: "og:description", content: "Carrying the Panchanga into the modern home with reverence." },
    ],
  }),
  component: About,
});

const values = [
  { t: "Reverence", d: "Every image and every date is treated as something sacred." },
  { t: "Clarity", d: "Traditional knowledge, laid out so anyone can read it." },
  { t: "Craft", d: "Printed and bound with care, made to last the whole year." },
];

function About() {
  return (
    <>
      <PageHero src={venkat.url} position="center 40%" eyebrow="Our story" title="Named for the primordial sound"
        text="Aumkarra takes its name from Om — the first vibration, from which all time unfolds." />
      <ImageScene src={devi.url} align="left" position="70% 30%">
        <div className="space-y-6 font-serif text-xl leading-relaxed text-ivory/85">
          <p>
            For generations, families have looked to the Panchanga to know when to begin, when to
            rest and when to pray. Aumkarra was born from a simple wish: to keep that wisdom close,
            in a form as beautiful as it is useful.
          </p>
          <p>
            Created in association with JoeVastu Consulting, our calendar pairs careful astrological
            detail with devotional art — a piece that belongs as much in the pooja room as anywhere in the home.
          </p>
        </div>
      </ImageScene>
      <section className="ethereal py-24">
        <Ornament />
        <div className="mx-auto mt-12 grid max-w-5xl gap-12 px-6 text-center md:grid-cols-3">
          {values.map((v) => (
            <div key={v.t}>
              <h3 className="text-3xl text-gold glow-text">{v.t}</h3>
              <p className="mt-3 font-serif text-lg text-ivory/75">{v.d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
