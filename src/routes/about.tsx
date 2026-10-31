import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import shiva from "@/assets/shiva-page.jpg";
import devi from "@/assets/devi.jpg";
import { ImageScene, Ornament } from "@/components/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About the Calendar — aumkarra" },
      {
        name: "description",
        content:
          "Explore the twelve Tamil months, daily Panchanga and devotional artwork inside the aumkarra calendar.",
      },
      { property: "og:title", content: "About the Calendar — aumkarra" },
      {
        property: "og:description",
        content:
          "Explore the twelve Tamil months, daily Panchanga and devotional artwork inside the aumkarra calendar.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const months = [
  "Chithirai",
  "Vaikasi",
  "Aani",
  "Aadi",
  "Aavani",
  "Purattasi",
  "Aippasi",
  "Karthigai",
  "Margazhi",
  "Thai",
  "Maasi",
  "Panguni",
];

function About() {
  return (
    <>
      <ImageScene src={shiva.url} align="left" position="center 15%">
        <p className="eyebrow text-olive">About the calendar</p>
        <h1 className="mt-5 text-5xl glow-text md:text-6xl">a rhythm for every day</h1>
        <p className="mt-7 font-serif text-xl leading-relaxed text-ivory/85">
          The 2027 aumkarra vedic calendar brings together the traditional Panchanga and devotional
          art. Tamil and English sit side by side, keeping the year close to its roots.
        </p>
        <p className="mt-5 font-serif text-xl leading-relaxed text-ivory/75">
          Daily tithi and nakshatra, Rahu Kalam, Yamagandam and Gulikai accompany festivals, fasts
          and observances; using verified Malaysian timing throughout the year. Also includes
          Malaysian public holidays and special dates.
        </p>
      </ImageScene>
      <section className="ethereal px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="eyebrow text-olive">The Tamil year</p>
          <h2 className="mt-4 text-4xl glow-text">twelve sacred months</h2>
          <Ornament className="my-8" />
          <div className="grid grid-cols-2 gap-x-6 gap-y-7 sm:grid-cols-3 md:grid-cols-6">
            {months.map((month, i) => (
              <div key={month} className="border-t border-border pt-4">
                <span className="eyebrow text-gold/70">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-2 font-serif text-xl">{month}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ImageScene src={devi.url} align="left" position="70% 30%">
        <p className="eyebrow text-olive">Art within the pages</p>
        <h2 className="mt-5 text-4xl glow-text md:text-5xl">a moment of devotion</h2>
        <p className="mt-7 font-serif text-xl leading-relaxed text-ivory/85">
          Shiva in stillness. Devi. Devotional portraits bring warmth to the months, inviting a
          quiet pause each time you turn the page.
        </p>
        <p className="mt-5 font-serif text-xl leading-relaxed text-ivory/75">
          Sacred imagery and the day's details share one place — for your home, your pooja room, or
          a thoughtful gift.
        </p>
        <Button asChild variant="link" className="mt-8 px-0 eyebrow">
          <Link to="/gallery">
            More from aumkarra <ArrowRight />
          </Link>
        </Button>
      </ImageScene>
    </>
  );
}
