import { createFileRoute } from "@tanstack/react-router";
import cover from "@/assets/cover.jpg.asset.json";
import devi from "@/assets/devi.jpg.asset.json";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { PageIntro } from "@/components/site";

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
  { src: venkat.url, name: "Sri Venkateswara", note: "The Lord of the Seven Hills, carved in warm stone — the cover of ’27.", cls: "md:col-span-2 aspect-square" },
  { src: devi.url, name: "Devi with Kili", note: "The goddess and her green parrot, emblem of sweet speech and devotion.", cls: "aspect-[3/4]" },
  { src: shiva.url, name: "Mahadeva", note: "Shiva in twilight stillness, opening the month of Margazhi – Thai.", cls: "aspect-[3/4] object-top" },
  { src: cover.url, name: "The Cover", note: "Aumkarra ’27, as it will hang upon your wall.", cls: "md:col-span-2 aspect-[16/10]" },
];

function Gallery() {
  return (
    <>
      <PageIntro
        eyebrow="Darshan"
        title="The sacred art"
        text="Every month opens with a portrait chosen for its stillness — images to pause before, not simply pass by."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-24 md:grid-cols-3">
        {items.map((it) => (
          <figure key={it.name} className={it.cls.includes("col-span") ? "md:col-span-2" : ""}>
            <div className="overflow-hidden rounded-sm bg-juniper">
              <img
                src={it.src}
                alt={it.name}
                className={`w-full object-cover transition duration-1000 hover:scale-105 ${it.cls.replace("md:col-span-2", "")}`}
              />
            </div>
            <figcaption className="mt-4">
              <p className="font-display text-2xl">{it.name}</p>
              <p className="mt-1 font-serif text-lg italic text-muted-foreground">{it.note}</p>
            </figcaption>
          </figure>
        ))}
      </section>
    </>
  );
}
