import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageIntro } from "@/components/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Orders — Aumkarra" },
      { name: "description", content: "Order the Aumkarra 2027 Vedic Calendar or send us an enquiry for bulk and gifting orders." },
      { property: "og:title", content: "Contact & Orders — Aumkarra" },
      { property: "og:description", content: "Reserve your 2027 Vedic Calendar." },
    ],
  }),
  component: Contact,
});

const field = "w-full rounded-sm border border-input bg-card px-4 py-3 font-serif text-lg outline-none focus:border-ring";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageIntro
        eyebrow="Orders & enquiries"
        title="Bring Aumkarra home"
        text="Tell us how many calendars you'd like — for your family, your temple, or as gifts — and we'll be in touch."
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-5">
        <div className="space-y-8 md:col-span-2">
          {[
            ["Bulk & gifting", "Special arrangements for temples, businesses and community groups."],
            ["Delivery", "Shipped carefully packed so your calendar arrives flat and pristine."],
            ["Availability", "The 2027 edition is printed in limited numbers."],
          ].map(([t, d]) => (
            <div key={t} className="border-l-2 border-primary pl-5">
              <p className="eyebrow text-primary">{t}</p>
              <p className="mt-2 font-serif text-lg text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="rounded-sm bg-card p-8 shadow-sm md:col-span-3">
          {sent ? (
            <div className="py-16 text-center">
              <p className="font-display text-4xl">Thank you 🙏</p>
              <p className="mt-4 font-serif text-xl text-muted-foreground">We've received your enquiry and will reply soon.</p>
            </div>
          ) : (
            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required placeholder="Your name" className={field} />
              <input required type="email" placeholder="Email address" className={field} />
              <input type="number" min={1} defaultValue={1} placeholder="Quantity" className={field} />
              <textarea rows={4} placeholder="Message (optional)" className={field} />
              <button className="eyebrow rounded-sm bg-primary px-7 py-4 text-primary-foreground hover:opacity-90">
                Send enquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
