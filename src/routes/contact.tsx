import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { Ornament } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Orders — aumkarra" },
      { name: "description", content: "Order the aumkarra 2027 Vedic Calendar or send us an enquiry for bulk and gifting orders." },
      { property: "og:title", content: "Contact & Orders — aumkarra" },
      { property: "og:description", content: "Reserve your 2027 Vedic Calendar." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-sm border border-input bg-midnight/60 px-4 py-3 font-serif text-lg text-ivory placeholder:text-ivory/40 outline-none focus:border-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section className="relative min-h-screen overflow-hidden">
      <img src={shiva.url} alt="" className="drift absolute inset-0 h-full w-full object-cover" style={{ objectPosition: "center 15%" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-midnight via-midnight/85 to-midnight/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />
      <div className="relative mx-auto grid max-w-6xl gap-14 px-6 pb-24 pt-40 md:grid-cols-2">
        <div className="fade-up">
          <p className="eyebrow text-olive">Orders & enquiries</p>
          <h1 className="mt-5 text-5xl glow-text md:text-6xl">Bring aumkarra home</h1>
          <Ornament className="my-7 justify-start" />
          <p className="font-serif text-xl text-ivory/85">
            Tell us how many calendars you'd like — for your family, your temple, or as gifts — and we'll be in touch.
          </p>
          <div className="mt-10 space-y-6">
            {[
              ["Bulk & gifting", "Special arrangements for temples, businesses and community groups."],
              ["Delivery", "Carefully packed so your calendar arrives flat and pristine."],
              ["Availability", "The 2027 edition is printed in limited numbers."],
            ].map(([t, d]) => (
              <div key={t} className="border-l border-gold/60 pl-5">
                <p className="eyebrow text-gold">{t}</p>
                <p className="mt-2 font-serif text-lg text-ivory/75">{d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center rounded-sm border border-border bg-night/70 p-8 backdrop-blur-md fade-up">
          {sent ? (
            <div className="py-16 text-center">
              <p className="font-display text-4xl glow-text">Thank you 🙏</p>
              <p className="mt-4 font-serif text-xl text-ivory/75">We've received your enquiry and will reply soon.</p>
            </div>
          ) : (
            <form className="grid gap-5" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required placeholder="Your name" className={field} />
              <input required type="email" placeholder="Email address" className={field} />
              <input type="number" min={1} defaultValue={1} placeholder="Quantity" className={field} />
              <textarea rows={4} placeholder="Message (optional)" className={field} />
              <button className="eyebrow rounded-sm bg-gold px-7 py-4 text-midnight hover:opacity-90">Send enquiry</button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
