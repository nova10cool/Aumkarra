import { Link, useLocation } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { to: "/", label: "Home" },
  { to: "/calendar", label: "The Calendar" },
  { to: "/about", label: "About the Calendar" },
  { to: "/gallery", label: "Coming Soon" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const landing = pathname === "/";
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-gradient-to-b from-midnight/90 to-transparent">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-5">
        <Link to="/" className="font-display text-2xl tracking-[0.35em] text-ivory glow-text">
          aumkarra
        </Link>
        <nav className="hidden gap-6 md:flex xl:gap-8">
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
      {landing && (
        <Link to="/calendar" aria-label="Experience the Sacred" className="mandala-btn group fade-up hidden lg:inline-flex">
          <svg className="mandala-ring" viewBox="0 0 120 120" aria-hidden="true" fill="none">
            <circle cx="60" cy="60" r="57" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.65" />
            <circle cx="60" cy="60" r="26" stroke="currentColor" strokeWidth="0.75" opacity="0.55" />
            {Array.from({ length: 12 }).map((_, i) => (
              <path
                key={i}
                d="M60 5 C65 16 65 24 60 30 C55 24 55 16 60 5 Z"
                stroke="currentColor"
                strokeWidth="0.9"
                opacity="0.75"
                transform={`rotate(${i * 30} 60 60)`}
              />
            ))}
          </svg>
          <span className="eyebrow relative text-center text-[10px] leading-relaxed text-gold transition-colors group-hover:text-ivory">
            Experience<br />the Sacred
          </span>
        </Link>
      )}
      <Button variant="ghost" size="icon" className="text-ivory md:hidden" onClick={() => setOpen(!open)} aria-label="Menu" aria-expanded={open}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
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
  const { pathname } = useLocation();
  if (pathname === "/") return <footer className="flex h-20 items-center justify-center border-t border-border bg-midnight"><p className="text-xs text-ivory/40">© {new Date().getFullYear()} aumkarra</p></footer>;
  return (
    <footer className="border-t border-border bg-midnight ethereal">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-8">
        <div>
          <Link to="/" className="font-display text-2xl glow-text">aumkarra</Link>
        </div>
        <div>
          <p className="text-sm text-ivory/60">In association with JoeVastu Consulting</p>
          <p className="mt-2 text-xs text-ivory/40">© {new Date().getFullYear()} aumkarra. All rights reserved.</p>
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
