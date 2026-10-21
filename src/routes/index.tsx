import { createFileRoute, Link } from "@tanstack/react-router";
import coverPage from "@/assets/cover-page.jpg.asset.json";
import devi from "@/assets/devi.jpg.asset.json";
import venkat from "@/assets/venkateswara.jpg.asset.json";
import shiva from "@/assets/shiva-page.jpg.asset.json";
import { ImageScene, Ornament } from "@/components/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "aumkarra — Vedic Calendar 2027" },
      { name: "description", content: "aumkarra's 2027 Vedic Panchanga calendar: sacred art, auspicious timings and festivals for every day of the year." },
      { property: "og:title", content: "aumkarra — Vedic Calendar 2027" },
      { property: "og:description", content: "Sacred art and the Panchanga for every day of 2027." },
    ],
  }),
  component: Home,
});

const features = [
  { t: "Panchanga daily", d: "Tithi, nakshatra, yoga and karana for each day, in Tamil and English." },
  { t: "Auspicious hours", d: "Rahu Kalam, Yamagandam and Gulikai beneath every week." },
  { t: "Festivals & vratas", d: "Amavasai, Pournami, Ekadasi, Pradosham and the great festivals." },
  { t: "Sacred artwork", d: "Twelve devotional portraits, one to sanctify each month." },
];

const btn = "eyebrow rounded-sm px-7 py-4 transition";

function Home() {
  return (
    <>
      <ImageScene src={venkat.url} tall position="center 40%">
        <p className="eyebrow text-olive">பஞ்சாங்க நாட்காட்டி · Vedic Calendar</p>
        <h1 className="mt-6 text-6xl tracking-[0.25em] glow-text md:text-8xl">aumkarra</h1>
        <p className="mt-3 font-display text-4xl text-gold">’27</p>
        <p className="mx-auto mt-8 max-w-md font-serif text-xl leading-relaxed text-ivory/85">
          A quiet companion for the year ahead — the rhythm of the Panchanga, held within twelve
          pages of sacred art.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/calendar" className={`${btn} bg-gold text-midnight hover:opacity-90`}>Discover the calendar</Link>
          <Link to="/contact" className={`${btn} border border-ivory/40 hover:bg-ivory/10`}>Order a copy</Link>
        </div>
      </ImageScene>

      <section className="ethereal py-28 text-center">
        <div className="mx-auto max-w-3xl px-6">
          <Ornament />
          <p className="mt-8 font-serif text-3xl italic leading-snug text-ivory/90 md:text-4xl">
            “Kālaḥ pacati bhūtāni” — time ripens all beings. Let each day begin in stillness.
          </p>
        </div>
      </section>

      <ImageScene src={shiva.url} align="left" position="center 15%">
        <p className="eyebrow text-olive">Within its pages</p>
        <h2 className="mt-4 text-4xl glow-text md:text-6xl">Everything your day asks of you</h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.t} className="border-l border-gold/50 pl-5">
              <h3 className="text-2xl text-gold">{f.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/75">{f.d}</p>
            </div>
          ))}
        </div>
      </ImageScene>

      <ImageScene src={devi.url} align="right" position="70% 30%">
        <p className="eyebrow text-olive">The art</p>
        <h2 className="mt-4 text-4xl glow-text md:text-6xl">Twelve months. Twelve darshans.</h2>
        <p className="mt-6 font-serif text-xl leading-relaxed text-ivory/85">
          Each month opens with a devotional portrait in warm temple light — Devi, Venkateswara,
          Shiva and more — so every glance at the date becomes a moment of remembrance.
        </p>
        <Link to="/gallery" className="eyebrow mt-8 inline-block border-b border-gold pb-1 text-gold">View the gallery</Link>
      </ImageScene>

      <section className="ethereal relative overflow-hidden py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 md:grid-cols-2">
          <div className="flex justify-center [perspective:1400px]">
            <div className="spin3d relative aspect-square w-72 [transform-style:preserve-3d] md:w-96">
              <img src={coverPage.url} alt="aumkarra 2027 calendar cover" className="absolute inset-0 h-full w-full rounded-sm shadow-[0_0_80px_-10px] shadow-gold/40 [backface-visibility:hidden]" />
              <div className="absolute inset-0 rounded-sm bg-night [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center">
                <span className="font-display text-5xl tracking-[0.3em] text-gold glow-text">aumkarra</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-4xl glow-text md:text-5xl">Welcome the new year with grace</h2>
            <p className="mt-6 font-serif text-xl text-ivory/80">
              For your home, your pooja room, or as a blessing for family and friends.
            </p>
            <p className="mt-6 font-display text-5xl text-gold">RM 19</p>
            <Link to="/contact" className={`${btn} mt-8 inline-block bg-olive text-ivory hover:opacity-90`}>Reserve your 2027 calendar</Link>
          </div>
        </div>
      </section>
    </>
  );
}
