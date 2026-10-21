import { createFileRoute } from "@tanstack/react-router";
import cover from "@/assets/cover.jpg.asset.json";
import devi from "@/assets/devi.jpg.asset.json";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { ImageScene, Ornament } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Sacred Art of Aumkarra" },
      { name: "description", content: "The devotional portraits gracing the pages of the Aumkarra 2027 Vedic Calendar." },
      { property: "og:title", content: "Gallery — Sacred Art of Aumkarra" },
      { property: "og:description", content: "Devi, Venkateswara, Shiva and more, in warm temple light." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: venkat.url, name: "Sri Venkateswara", note: "The Lord of the Seven Hills, carved in warm stone — the cover of ’27.", align: "left" as const, pos: "center 40%" },
  { src: devi.url, name: "Devi with Kili", note: "The goddess and her green parrot, emblem of sweet speech and devotion.", align: "right" as const, pos: "70% 30%" },
  { src: shiva.url, name: "Mahadeva", note: "Shiva in twilight stillness, opening the month of Margazhi – Thai.", align: "left" as const, pos: "center 15%" },
  { src: cover.url, name: "The Cover", note: "Aumkarra ’27, as it will hang upon your wall.", align: "right" as const, pos: "center 45%" },
];

function Gallery() {
  return (
    <>
      <section className="ethereal px-6 pb-16 pt-40 text-center">
        <p className="eyebrow text-olive">Darshan</p>
        <h1 className="mt-5 text-5xl glow-text md:text-7xl">The sacred art</h1>
        <Ornament className="my-7" />
        <p className="mx-auto max-w-2xl font-serif text-xl text-ivory/80">
          Every month opens with a portrait chosen for its stillness — images to pause before, not simply pass by.
        </p>
      </section>
      {items.map((it, i) => (
        <ImageScene key={it.name} src={it.src} align={it.align} position={it.pos}>
          <p className="font-display text-6xl text-gold/70">{String(i + 1).padStart(2, "0")}</p>
          <h2 className="mt-4 text-4xl glow-text md:text-6xl">{it.name}</h2>
          <p className="mt-5 font-serif text-xl italic text-ivory/85">{it.note}</p>
        </ImageScene>
      ))}
    </>
  );
}
