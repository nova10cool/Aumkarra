import { createFileRoute, Link } from "@tanstack/react-router";
import cover from "@/assets/cover.jpg.asset.json";
import devi from "@/assets/devi.jpg.asset.json";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { Ornament } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Aumkarra — Vedic Calendar 2027" },
      { name: "description", content: "Aumkarra's 2027 Vedic Panchanga calendar: sacred art, auspicious timings and festivals for every day of the year." },
      { property: "og:title", content: "Aumkarra — Vedic Calendar 2027" },
      { property: "og:description", content: "Sacred art and the Panchanga for every day of 2027." },
    ],
  }),
  component: Home,
});

const features = [
  { t: "Panchanga daily", d: "Tithi, nakshatra, yoga and karana for each day, in Tamil and English." },
  { t: "Auspicious hours", d: "Rahu Kalam, Yamagandam and Gulikai printed clearly beneath every week." },
  { t: "Festivals & vratas", d: "Amavasai, Pournami, Ekadasi, Pradosham and the great festivals marked." },
  { t: "Sacred artwork", d: "Twelve devotional portraits, one to sanctify each month on your wall." },
];

function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-juniper text-candle">
        <img src={venkat.url} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-juniper/40 via-juniper/70 to-juniper" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div className="fade-up">
            <p className="eyebrow text-leaf">பஞ்சாங்க நாட்காட்டி · Vedic Calendar</p>
            <h1 className="mt-6 text-6xl tracking-[0.2em] md:text-7xl">aumkarra</h1>
            <p className="mt-2 font-display text-4xl text-candle/80">’27</p>
            <p className="mt-8 max-w-md font-serif text-xl leading-relaxed text-candle/85">
              A quiet companion for the year ahead — the rhythm of the Panchanga, held within
              twelve pages of sacred art.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link to="/calendar" className="eyebrow rounded-sm bg-primary px-7 py-4 text-primary-foreground transition hover:opacity-90">
                Discover the calendar
              </Link>
              <Link to="/contact" className="eyebrow rounded-sm border border-candle/40 px-7 py-4 hover:bg-candle/10">
                Order a copy
              </Link>
            </div>
          </div>
          <img src={cover.url} alt="Aumkarra 2027 Vedic Calendar front cover" className="mx-auto w-full max-w-md rounded-sm shadow-2xl fade-up" />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center">
        <Ornament />
        <p className="mt-8 font-serif text-3xl italic leading-snug md:text-4xl">
          “Kālaḥ pacati bhūtāni” — time ripens all beings. Let each day begin in stillness.
        </p>
      </section>

      <section className="bg-muted/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow text-center text-primary">Within its pages</p>
          <h2 className="mt-4 text-center text-4xl md:text-5xl">Everything your day asks of you</h2>
          <div className="mt-16 grid gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4">
            {features.map((f, i) => (
              <div key={f.t} className="bg-background p-8">
                <p className="font-display text-4xl text-leaf">0{i + 1}</p>
                <h3 className="mt-4 text-2xl">{f.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-24 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <img src={devi.url} alt="Devi with parrot" className="aspect-[3/4] w-full rounded-sm object-cover" />
          <img src={shiva.url} alt="A month page of the calendar" className="mt-12 aspect-[3/4] w-full rounded-sm object-cover object-top" />
        </div>
        <div>
          <p className="eyebrow text-primary">The art</p>
          <h2 className="mt-4 text-4xl md:text-5xl">Twelve months. Twelve darshans.</h2>
          <p className="mt-6 font-serif text-xl leading-relaxed text-muted-foreground">
            Each month opens with a devotional portrait rendered in warm temple light — Devi,
            Venkateswara, Shiva and more — so that every glance at the date becomes a moment of
            remembrance.
          </p>
          <Link to="/gallery" className="eyebrow mt-8 inline-block border-b border-primary pb-1 text-primary">
            View the gallery
          </Link>
        </div>
      </section>

      <section className="bg-coral text-candle">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-20 text-center">
          <h2 className="text-4xl md:text-5xl">Welcome the new year with grace</h2>
          <p className="max-w-xl font-serif text-xl text-candle/85">
            For your home, your pooja room, or as a blessing for family and friends.
          </p>
          <Link to="/contact" className="eyebrow mt-4 rounded-sm bg-candle px-8 py-4 text-coral hover:opacity-90">
            Reserve your 2027 calendar
          </Link>
        </div>
      </section>
    </>
  );
}
