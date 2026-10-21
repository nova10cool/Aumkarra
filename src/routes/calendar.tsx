import { createFileRoute, Link } from "@tanstack/react-router";
import cover from "@/assets/cover.jpg.asset.json";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { PageIntro } from "@/components/site";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "The 2027 Vedic Calendar — Aumkarra" },
      { name: "description", content: "Inside the Aumkarra 2027 Panchanga wall calendar: daily tithi, nakshatra, Rahu Kalam and festivals in Tamil and English." },
      { property: "og:title", content: "The 2027 Vedic Calendar — Aumkarra" },
      { property: "og:description", content: "Daily Panchanga, auspicious timings and sacred art for 2027." },
    ],
  }),
  component: CalendarPage,
});

const specs = [
  ["Format", "Spiral-bound wall calendar"],
  ["Languages", "Tamil & English"],
  ["Pages", "Cover + 12 monthly spreads"],
  ["Daily details", "Tamil month, date, tithi, nakshatra"],
  ["Timings", "Rahu Kalam · Yamagandam · Gulikai"],
  ["Observances", "Amavasai, Pournami, Ekadasi, festivals"],
];

const months = ["Thai", "Maasi", "Panguni", "Chithirai", "Vaikasi", "Aani", "Aadi", "Aavani", "Purattasi", "Aippasi", "Karthigai", "Margazhi"];

function CalendarPage() {
  return (
    <>
      <PageIntro
        eyebrow="Vedic Calendar · ’27"
        title="A year, in quiet order"
        text="The Aumkarra calendar brings the traditional Panchanga onto your wall — clear, beautiful and easy to read at a glance."
      />
      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-24 md:grid-cols-2">
        <img src={cover.url} alt="Calendar cover" className="w-full rounded-sm bg-muted" />
        <div className="self-center">
          <h2 className="text-4xl">Details</h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {specs.map(([k, v]) => (
              <div key={k} className="grid grid-cols-3 gap-4 py-4">
                <dt className="eyebrow text-primary">{k}</dt>
                <dd className="col-span-2 font-serif text-lg">{v}</dd>
              </div>
            ))}
          </dl>
          <Link to="/contact" className="eyebrow mt-10 inline-block rounded-sm bg-primary px-7 py-4 text-primary-foreground hover:opacity-90">
            Enquire to order
          </Link>
        </div>
      </section>

      <section className="bg-juniper py-24 text-candle">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-5">
          <img src={shiva.url} alt="Sample month page" className="w-full rounded-sm md:col-span-2" />
          <div className="md:col-span-3">
            <p className="eyebrow text-leaf">Inside a month</p>
            <h2 className="mt-4 text-4xl md:text-5xl">Read the day in a single glance</h2>
            <ul className="mt-8 space-y-5 font-serif text-xl text-candle/85">
              <li>— The Tamil month alongside the English, e.g. Margazhi – Thai with January.</li>
              <li>— Each date tile shows the Tamil day, nakshatra and moon phase.</li>
              <li>— Weekends highlighted in coral so the week is easy to follow.</li>
              <li>— Rahu Kalam, Yamagandam and Gulikai timings set beneath every column.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="eyebrow text-center text-primary">The Tamil year</p>
        <h2 className="mt-4 text-center text-4xl">Twelve sacred months</h2>
        <div className="mt-12 grid grid-cols-2 gap-px bg-border sm:grid-cols-3 md:grid-cols-6">
          {months.map((m, i) => (
            <div key={m} className="bg-background p-6 text-center">
              <p className="font-display text-3xl text-leaf">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-serif text-lg">{m}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
