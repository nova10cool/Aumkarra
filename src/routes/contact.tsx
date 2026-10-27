import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Ornament } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [
    { title: "Contact Us — aumkarra" },
    { name: "description", content: "Contact aumkarra about the 2027 Vedic calendar and orders. Send an enquiry or reach us on WhatsApp." },
    { property: "og:title", content: "Contact Us — aumkarra" },
    { property: "og:description", content: "Contact aumkarra about the 2027 Vedic calendar and orders. Send an enquiry or reach us on WhatsApp." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Contact,
});

const products = [
  { value: "calendar", label: "aumkarra VEDIC CALENDAR 2027" },
  { value: "veda-life", label: "Veda Life Agarbhati" },
];

function Contact() {
  const [product, setProduct] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return <section className="ethereal flex min-h-[calc(100svh-80px)] items-center justify-center px-6 pb-20 pt-32">
    <div className="w-full max-w-xl fade-up text-center">
      <p className="eyebrow text-olive">aumkarra</p>
      <h1 className="mt-5 text-5xl glow-text md:text-7xl">contact us</h1>
      <Ornament className="my-8" />

      {sent ? (
        <div className="rounded-sm border border-border bg-card/60 px-8 py-12">
          <p className="font-serif text-2xl leading-relaxed text-ivory">Thank you.</p>
          <p className="mt-4 font-serif text-lg leading-relaxed text-ivory/70">Your enquiry has been noted — we will write back to you soon.</p>
          <Button variant="link" className="mt-6 eyebrow" onClick={() => { setSent(false); setProduct(""); setEmail(""); setMessage(""); }}>
            Send another enquiry
          </Button>
        </div>
      ) : (
        <form onSubmit={submit} className="space-y-6 rounded-sm border border-border bg-card/60 px-6 py-8 text-left md:px-10">
          <div className="space-y-2">
            <Label htmlFor="product" className="eyebrow text-ivory/70">Product</Label>
            <Select value={product} onValueChange={setProduct} required>
              <SelectTrigger id="product" className="h-12 rounded-sm bg-midnight/60">
                <SelectValue placeholder="Choose a product" />
              </SelectTrigger>
              <SelectContent>
                {products.map((p) => <SelectItem key={p.value} value={p.value}>{p.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="eyebrow text-ivory/70">Your email</Label>
            <Input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="h-12 rounded-sm bg-midnight/60"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="eyebrow text-ivory/70">Message</Label>
            <Textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message"
              rows={4}
              className="rounded-sm bg-midnight/60"
            />
          </div>
          <Button type="submit" size="lg" className="h-12 w-full rounded-sm eyebrow"><Send /> Send enquiry</Button>
        </form>
      )}

      <div className="mt-10 flex items-center justify-center gap-4 text-ivory/40">
        <span className="h-px w-12 bg-current opacity-40" />
        <span className="eyebrow">or</span>
        <span className="h-px w-12 bg-current opacity-40" />
      </div>
      <Button disabled size="lg" variant="outline" className="mt-6 h-12 rounded-sm"><MessageCircle /> WhatsApp · coming soon</Button>
    </div>
  </section>;
}
