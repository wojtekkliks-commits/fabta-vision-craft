import { useState, type ReactNode } from "react";
import { Link } from "@tanstack/react-router";

export const NAV = [
  { to: "/", hash: "co-robimy", label: "what we do" },
  { to: "/", hash: "proces", label: "how we do" },
  { to: "/", hash: "dla-kogo", label: "who is this for" },
  { to: "/", hash: "realizacje", label: "realization" },
  { to: "/", hash: "o-nas", label: "about" },
  { to: "/contact", label: "contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bar)] text-[var(--bar-foreground)]">
        <div className="relative h-28 md:h-36 flex items-center justify-center px-6">
          <button
            aria-label="Szukaj"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 size-12 md:size-14 rounded-full bg-accent text-accent-foreground grid place-items-center hover:scale-105 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.5" y2="16.5" />
            </svg>
          </button>

          <Link
            to="/"
            className="font-serif text-3xl md:text-5xl tracking-[0.18em] font-medium select-none"
          >
            FABTA
          </Link>

          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 size-12 grid place-items-center"
          >
            <span className="flex flex-col gap-[5px]">
              <span className="block w-7 h-px bg-current" />
              <span className="block w-7 h-px bg-current" />
              <span className="block w-7 h-px bg-current" />
            </span>
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-x-0 top-28 md:top-36 z-40 bg-[var(--bar)] border-t border-border overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="px-6 md:px-12 py-10 md:py-16 max-w-[1600px] mx-auto">
          <ul className="space-y-5 md:space-y-7">
            {NAV.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  hash={(n as { hash?: string }).hash}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl md:text-7xl leading-none hover:text-accent transition-colors block"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-12 flex gap-6 text-xs tracking-[0.25em] uppercase text-muted-foreground">
            <span className="border-b border-current pb-1">PL</span>
            <span>info@fabta.pl</span>
          </div>
        </nav>
      </div>
    </>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--bar)] py-16 md:py-20">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <p className="font-serif text-3xl tracking-[0.18em]">FABTA</p>
          <p className="text-xs text-muted-foreground mt-3">
            Fabryka Tapicerki · od 2018
          </p>
        </div>
        <div className="md:col-span-4 text-sm text-foreground/75 space-y-1">
          <a href="mailto:info@fabta.pl" className="hover:text-foreground block">
            info@fabta.pl
          </a>
          <p>okolice Leszna, Wielkopolska</p>
        </div>
        <nav className="md:col-span-4 flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-sm text-foreground/75">
          {NAV.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              hash={(n as { hash?: string }).hash}
              className="hover:text-foreground"
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <p className="md:col-span-12 text-xs text-muted-foreground pt-10 border-t border-border">
          © {new Date().getFullYear()} FABTA. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
