import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CalendarModel } from "@/components/calendar-model";

export const Route = createFileRoute("/calendar")({
  head: () => ({ meta: [
    { title: "2027 Calendar · RM 19 — aumkarra" },
    { name: "description", content: "Explore the aumkarra 2027 Tamil and English Vedic wall calendar, priced at RM 19." },
    { property: "og:title", content: "2027 Calendar · RM 19 — aumkarra" },
    { property: "og:description", content: "Explore the aumkarra 2027 Tamil and English Vedic wall calendar, priced at RM 19." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: CalendarPage,
});

function CalendarPage() {
  return <section className="ethereal flex min-h-[calc(100svh-80px)] items-center px-6 pb-16 pt-28 md:pt-36">
    <div className="mx-auto grid w-full max-w-5xl items-center gap-8 md:grid-cols-2 md:gap-16">
      <CalendarModel />
      <div className="text-center md:text-left">
        <p className="eyebrow text-olive">Vedic wall calendar · 2027</p>
        <h1 className="mt-5 text-5xl glow-text md:text-6xl">aumkarra ’27</h1>
        <p className="mt-6 max-w-md font-serif text-xl leading-relaxed text-ivory/80">A year of sacred art and daily Panchanga, in Tamil and English — a quiet companion for your home.</p>
        <p className="mt-7 font-display text-5xl text-gold">RM 19</p>
        <Button asChild variant="link" className="mt-6 px-0 eyebrow"><Link to="/about">About the calendar <ArrowRight /></Link></Button>
      </div>
    </div>
  </section>;
}
