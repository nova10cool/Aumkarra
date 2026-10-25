import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ganesha from "@/assets/ganesha.jpg";
import { ImageScene } from "@/components/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [
    { title: "More Products Coming Soon — aumkarra" },
    { name: "description", content: "New creations from aumkarra are coming soon." },
    { property: "og:title", content: "More Products Coming Soon — aumkarra" },
    { property: "og:description", content: "New creations from aumkarra are coming soon." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Upcoming,
});

function Upcoming() {
  return <ImageScene src={ganesha} align="left" position="65% center">
    <p className="eyebrow text-olive">More from aumkarra</p>
    <h1 className="mt-5 text-5xl glow-text md:text-7xl">Coming soon</h1>
    <p className="mt-7 font-serif text-xl leading-relaxed text-ivory/80">New creations. The same reverence.</p>
    <Button asChild variant="link" className="mt-8 px-0 eyebrow"><Link to="/contact">Contact us <ArrowRight /></Link></Button>
  </ImageScene>;
}
