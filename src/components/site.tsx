import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/calendar", label: "The Calendar" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-midnight/90 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-[0.35em] text-ivory glow-text">
          Aumkarra
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow text-ivory/70 transition-colors hover:text-gold"
              activeProps={{ className: "text-gold" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="text-ivory md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 bg-midnight/95 px-6 py-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="eyebrow text-ivory">
              {n.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-midnight ethereal">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[0.35em] glow-text">Aumkarra</p>
          <p className="mt-4 font-serif text-lg italic text-ivory/60">Time, held with reverence.</p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-olive">Explore</p>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-ivory/70 hover:text-gold">
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow text-olive">In association with</p>
          <p className="mt-3 text-sm text-ivory/70">JoeVastu Consulting</p>
          <p className="mt-6 text-xs text-ivory/40">© {new Date().getFullYear()} Aumkarra. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-gold ${className}`}>
      <span className="h-px w-16 bg-gradient-to-r from-transparent to-current opacity-70" />
      <span className="font-display text-2xl glow-text">ॐ</span>
      <span className="h-px w-16 bg-gradient-to-l from-transparent to-current opacity-70" />
    </div>
  );
}

/** Full-bleed section where the artwork itself is the backdrop. */
export function ImageScene({
  src,
  children,
  position,
  align = "center",
  tall = false,
}: {
  src: string;
  children: ReactNode;
  position?: string | undefined;
  align?: "center" | "left" | "right";
  tall?: boolean;
}) {
  const side =
    align === "left"
      ? "bg-gradient-to-r from-midnight via-midnight/75 to-transparent"
      : align === "right"
        ? "bg-gradient-to-l from-midnight via-midnight/75 to-transparent"
        : "bg-midnight/55";
  const justify = align === "left" ? "justify-start" : align === "right" ? "justify-end" : "justify-center text-center";
  return (
    <section className={`relative flex items-center overflow-hidden ${tall ? "min-h-screen" : "min-h-[85vh]"}`}>
      <img src={src} alt="" className="drift absolute inset-0 h-full w-full object-cover" style={{ objectPosition: position ?? "center" }} />
      <div className={`absolute inset-0 ${side}`} />
      <div className="absolute inset-0 bg-gradient-to-b from-midnight/70 via-transparent to-midnight" />
      <div className={`relative mx-auto flex w-full max-w-6xl px-6 py-32 ${justify}`}>
        <div className={`max-w-xl fade-up ${align === "center" ? "mx-auto" : ""}`}>{children}</div>
      </div>
    </section>
  );
}

export function PageHero({ src, eyebrow, title, text, position }: { src: string; eyebrow: string; title: string; text: string; position?: string }) {
  return (
    <ImageScene src={src} position={position}>
      <p className="eyebrow text-olive">{eyebrow}</p>
      <h1 className="mt-5 text-5xl leading-tight glow-text md:text-7xl">{title}</h1>
      <Ornament className="my-7" />
      <p className="font-serif text-xl leading-relaxed text-ivory/85">{text}</p>
    </ImageScene>
  );
}
