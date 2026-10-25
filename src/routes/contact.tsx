import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Ornament } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — aumkarra" },
    { name: "description", content: "Contact aumkarra about the 2027 Vedic calendar and orders. WhatsApp contact details are coming soon." },
    { property: "og:title", content: "Contact Us — aumkarra" },
    { property: "og:description", content: "Contact aumkarra about the 2027 Vedic calendar and orders. WhatsApp contact details are coming soon." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

function Contact() {
  return <section className="ethereal flex min-h-[calc(100svh-80px)] items-center justify-center px-6 pb-20 pt-32 text-center">
    <div className="max-w-xl fade-up">
      <p className="eyebrow text-olive">aumkarra</p>
      <h1 className="mt-5 text-5xl glow-text md:text-7xl">Contact us</h1>
      <Ornament className="my-8" />
      <p className="font-serif text-xl leading-relaxed text-ivory/80">For calendar orders and enquiries.</p>
      <Button disabled size="lg" className="mt-8 h-12 rounded-sm"><MessageCircle /> WhatsApp · coming soon</Button>
    </div>
  </section>;
}
