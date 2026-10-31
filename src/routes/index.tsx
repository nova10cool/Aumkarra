import { createFileRoute } from "@tanstack/react-router";
import venkat from "@/assets/venkateswara.jpg";
import { MandalaEnter } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "aumkarra — Vedic Calendar 2027" },
    { name: "description", content: "Discover the aumkarra 2027 Vedic calendar, where sacred art meets the rhythm of the Panchanga." },
    { property: "og:title", content: "aumkarra — Vedic Calendar 2027" },
    { property: "og:description", content: "Discover the aumkarra 2027 Vedic calendar, where sacred art meets the rhythm of the Panchanga." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Home,
});

function Home() {
  return <section className="landing-scene relative flex items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center">
    <img src={venkat.url} alt="Sri Venkateswara in warm temple light" className="drift absolute inset-0 h-full w-full object-cover object-[center_40%]" />
    <div className="absolute inset-0 bg-midnight/45" />
    <div className="absolute inset-0 bg-gradient-to-b from-midnight/30 via-transparent to-midnight" />
    <h1 className="sr-only">aumkarra</h1>
    <div className="absolute inset-x-0 bottom-0 flex justify-center bg-midnight pb-3 lg:hidden">
      <MandalaEnter className="inline-flex" />
    </div>
  </section>;
}
