import { createFileRoute, Link } from "@tanstack/react-router";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <div className="fade-up relative">
      <h1 className="text-6xl glow-text sm:text-8xl">aumkarra</h1>
    </div>
    <Button asChild size="lg" className="fade-up absolute bottom-12 left-1/2 h-12 -translate-x-1/2 rounded-sm eyebrow">
      <Link to="/calendar">Experience the Sacred <ArrowRight /></Link>
    </Button>
  </section>;
}
