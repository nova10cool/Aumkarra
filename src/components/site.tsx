import { Link } from "@tanstack/react-router";
import { useState } from "react";
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
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-display text-2xl tracking-[0.35em] text-foreground">
          aumkarra
        </Link>
        <nav className="hidden gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="eyebrow text-muted-foreground transition-colors hover:text-primary"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-4 border-t border-border/60 px-6 py-5 md:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="eyebrow">
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
    <footer className="bg-juniper text-candle">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl tracking-[0.35em]">aumkarra</p>
          <p className="mt-4 font-serif text-lg italic text-candle/70">
            Time, held with reverence.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <p className="eyebrow text-leaf">Explore</p>
          {nav.map((n) => (
            <Link key={n.to} to={n.to} className="text-sm text-candle/80 hover:text-candle">
              {n.label}
            </Link>
          ))}
        </div>
        <div>
          <p className="eyebrow text-leaf">In association with</p>
          <p className="mt-3 text-sm text-candle/80">JoeVastu Consulting</p>
          <p className="mt-6 text-xs text-candle/50">
            © {new Date().getFullYear()} Aumkarra. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Ornament({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 text-leaf ${className}`}>
      <span className="h-px w-16 bg-current opacity-60" />
      <span className="font-display text-2xl">ॐ</span>
      <span className="h-px w-16 bg-current opacity-60" />
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="mx-auto max-w-3xl px-6 pb-12 pt-20 text-center fade-up">
      <p className="eyebrow text-primary">{eyebrow}</p>
      <h1 className="mt-5 text-5xl leading-tight md:text-6xl">{title}</h1>
      <Ornament className="my-7" />
      <p className="font-serif text-xl leading-relaxed text-muted-foreground">{text}</p>
    </section>
  );
}
