import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, type ReactNode } from "react";

import hero from "@/assets/hero.jpg";
import detailFabric from "@/assets/detail-fabric.jpg";
import workAcoustic from "@/assets/work-acoustic.jpg";
import workCarpentry from "@/assets/work-carpentry.jpg";
import projectPlanter from "@/assets/project-planter.jpg";
import projectPoufs from "@/assets/project-poufs.jpg";
import projectSofa from "@/assets/project-sofa.jpg";
import projectScreens from "@/assets/project-screens.jpg";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "FABTA — Kontraktowy producent mebli tapicerowanych i biurowych" },
      {
        name: "description",
        content:
          "FABTA (Fabryka Tapicerki) realizuje meble tapicerowane i biurowe pod marką klienta — od pojedynczych egzemplarzy po produkcję seryjną.",
      },
      { property: "og:title", content: "FABTA — Zamieniamy wizualizacje w gotowe meble" },
      {
        property: "og:description",
        content:
          "Kontraktowy producent mebli tapicerowanych i biurowych. Tapicerka i stolarnia pod jednym dachem, okolice Leszna.",
      },
      { property: "og:image", content: hero },
      { name: "twitter:image", content: hero },
    ],
  }),
  component: Index,
});

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            el.style.animationDelay = `${delay}ms`;
            el.classList.add("fade-up");
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <div ref={ref} style={{ opacity: 0 }}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeWork />
        <Projects />
        <ForWhom />
        <Differentiators />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

const NAV = [
  { href: "#co-robimy", label: "Co robimy" },
  { href: "#realizacje", label: "Realizacje" },
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#o-nas", label: "O nas" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        <a href="#top" className="font-serif text-2xl tracking-tight">
          FABTA
        </a>
        <nav className="hidden md:flex items-center gap-10 text-sm">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-foreground/70 hover:text-foreground transition-colors"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="inline-flex items-center border border-foreground/80 px-5 py-2 text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            Kontakt
          </a>
        </nav>
        <a
          href="#kontakt"
          className="md:hidden text-sm border border-foreground/80 px-4 py-1.5"
        >
          Kontakt
        </a>
      </div>
    </header>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section id="top" className="relative">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-16 md:pt-24 pb-10">
        <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
          Fabryka Tapicerki · est. 2018
        </p>
        <h1 className="font-serif text-[2.75rem] leading-[1.05] sm:text-6xl md:text-7xl lg:text-[6.5rem] max-w-5xl">
          Zamieniamy wizualizacje <br className="hidden md:block" />
          w <em className="italic font-light">gotowe meble.</em>
        </h1>
        <div className="mt-10 grid md:grid-cols-[1fr_minmax(0,420px)] gap-10 items-end">
          <div />
          <div>
            <p className="text-base md:text-lg leading-relaxed text-foreground/80">
              FABTA to kontraktowy producent mebli tapicerowanych i biurowych.
              Realizujemy gotowe produkty z wizualizacji klienta, pod jego marką —
              od pojedynczych egzemplarzy po produkcję seryjną.
            </p>
            <a
              href="mailto:info@fabta.pl"
              className="mt-8 inline-flex items-center group text-sm tracking-wide uppercase border-b border-foreground pb-1"
            >
              Zapytaj o współpracę
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
      <div className="px-6 lg:px-12 mx-auto max-w-[1600px]">
        <div className="relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-muted">
          <img
            src={hero}
            alt="Sofa tapicerowana z dębową konstrukcją w jasnym, skandynawskim wnętrzu"
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- What we do ---------- */

function WhatWeDo() {
  return (
    <section id="co-robimy" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <p className="md:col-span-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              01 — Co robimy
            </p>
            <h2 className="md:col-span-9 text-4xl md:text-6xl leading-[1.05]">
              Dwa obszary, <em className="italic font-light">jedna pracownia.</em>
              <span className="block text-foreground/60 mt-4 text-2xl md:text-3xl">
                Realizujemy produkcję jednostkową, małoseryjną i seryjną.
              </span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          <Reveal>
            <article>
              <div className="relative overflow-hidden aspect-[4/3] bg-muted tile-hover">
                <img
                  src={workAcoustic}
                  alt="Tapicerowane panele akustyczne w przestrzeni biurowej"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mt-8">
                Produkcja mebli tapicerowanych i biurowych
              </h3>
              <p className="mt-5 text-foreground/75 leading-relaxed max-w-prose">
                Wytwarzamy meble na zlecenie, pod marką klienta. Główny asortyment:
                ekrany i panele akustyczne, tapicerowane donice biurowe, sofy i pufy.
              </p>
            </article>
          </Reveal>

          <Reveal delay={150}>
            <article className="md:mt-24">
              <div className="relative overflow-hidden aspect-[4/3] bg-muted tile-hover">
                <img
                  src={workCarpentry}
                  alt="Stolarnia — drewniane ramy i stelaże mebli tapicerowanych"
                  loading="lazy"
                  width={1600}
                  height={1200}
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="font-serif text-3xl md:text-4xl mt-8">Stolarnia</h3>
              <p className="mt-5 text-foreground/75 leading-relaxed max-w-prose">
                Wykonujemy drewniane ramy i stelaże do mebli tapicerowanych. Własna
                stolarnia daje nam kontrolę nad jakością i terminami na każdym etapie.
              </p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- How we work ---------- */

const STEPS = [
  {
    n: "01",
    t: "Wizualizacja, wymiary lub pomysł",
    d: "Otrzymujemy od klienta materiał wyjściowy — render, szkic, zdjęcie lub krótki opis.",
  },
  {
    n: "02",
    t: "Konsultacja i propozycje",
    d: "Analizujemy projekt pod kątem wykonania i proponujemy rozwiązania konstrukcyjne i materiałowe.",
  },
  {
    n: "03",
    t: "Realizacja fizycznej wersji",
    d: "Budujemy mebel u nas — od stelaża, przez tapicerkę, po wykończenie.",
  },
  {
    n: "04",
    t: "Dostawa",
    d: "Dostarczamy gotowy produkt — jednostkowo, małoseryjnie lub seryjnie.",
  },
];

function HowWeWork() {
  return (
    <section className="py-28 md:py-40 bg-muted/50">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <p className="md:col-span-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              02 — Jak pracujemy
            </p>
            <h2 className="md:col-span-9 text-4xl md:text-6xl leading-[1.05] max-w-4xl">
              Wystarczy zdjęcie, wymiary, pomysł lub wizualizacja —{" "}
              <em className="italic font-light text-foreground/70">resztą zajmujemy się my.</em>
            </h2>
          </div>
        </Reveal>

        <ol className="grid md:grid-cols-4 gap-px bg-border">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="bg-background p-8 md:p-10 h-full">
                <div className="font-serif text-5xl md:text-6xl text-foreground/30">{s.n}</div>
                <h3 className="font-serif text-2xl mt-8 leading-snug">{s.t}</h3>
                <p className="mt-4 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- Projects ---------- */

const PROJECTS = [
  { img: projectSofa, name: "Sofa modułowa", tag: "Wnętrza biurowe", span: "md:col-span-8" },
  { img: projectPlanter, name: "Donice tapicerowane", tag: "Open space", span: "md:col-span-4" },
  { img: projectScreens, name: "Ekrany akustyczne", tag: "Strefa pracy", span: "md:col-span-4" },
  { img: projectPoufs, name: "Pufy gallery", tag: "Strefa wspólna", span: "md:col-span-8" },
  { img: detailFabric, name: "Detal tapicerki", tag: "Wykończenie", span: "md:col-span-6" },
  { img: workAcoustic, name: "Panele wielkoformatowe", tag: "Akustyka", span: "md:col-span-6" },
];

function Projects() {
  return (
    <section id="realizacje" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <p className="md:col-span-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              03 — Realizacje
            </p>
            <h2 className="md:col-span-9 text-4xl md:text-6xl leading-[1.05]">
              Wybrane projekty <em className="italic font-light text-foreground/70">i detale.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-4 md:gap-6">
          {PROJECTS.map((p, i) => (
            <Reveal key={i} delay={(i % 2) * 120}>
              <figure className={`${p.span} group`}>
                <div className="relative overflow-hidden aspect-[4/3] bg-muted tile-hover">
                  <img
                    src={p.img}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  <span className="font-serif text-xl">{p.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {p.tag}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- For whom ---------- */

function ForWhom() {
  return (
    <section id="dla-kogo" className="py-28 md:py-40 bg-muted/50">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-20">
            <p className="md:col-span-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              04 — Dla kogo
            </p>
            <h2 className="md:col-span-9 text-4xl md:text-6xl leading-[1.05]">
              Partner produkcyjny dla{" "}
              <em className="italic font-light text-foreground/70">marek i projektantów.</em>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-10 md:gap-20">
          <Reveal>
            <div className="border-t border-foreground/30 pt-8">
              <h3 className="font-serif text-3xl md:text-4xl">Marki bez własnej produkcji</h3>
              <p className="mt-5 text-foreground/75 leading-relaxed max-w-prose">
                Firmy z własnym brandem, które chcą zlecać wytwarzanie mebli na
                zewnątrz i szukają rzetelnego, stabilnego dostawcy.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-t border-foreground/30 pt-8">
              <h3 className="font-serif text-3xl md:text-4xl">Klienci ceniący jakość i cenę</h3>
              <p className="mt-5 text-foreground/75 leading-relaxed max-w-prose">
                Firmy wyposażające biura, dealerzy mebli i projektanci wnętrz, dla
                których liczy się solidny, dobrze wykonany mebel w rozsądnej cenie.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Differentiators ---------- */

const DIFFS = [
  { t: "Terminowość i stabilność", d: "Dostawca, na którym można polegać." },
  {
    t: "Od wizualizacji do gotowego mebla",
    d: "Przekładamy rendery i pomysły na realne produkty.",
  },
  {
    t: "Tapicerka i stolarnia pod jednym dachem",
    d: "Pełna kontrola nad jakością i terminami.",
  },
  {
    t: "Elastyczność produkcji",
    d: "Od pojedynczych egzemplarzy po serię, bez wygórowanych minimów.",
  },
  {
    t: "Doradztwo techniczne",
    d: "Proponujemy lepsze rozwiązania, nie tylko wykonujemy.",
  },
];

function Differentiators() {
  return (
    <section className="py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <div className="grid md:grid-cols-12 gap-8 mb-16">
            <p className="md:col-span-3 text-xs tracking-[0.25em] uppercase text-muted-foreground">
              05 — Co nas wyróżnia
            </p>
            <h2 className="md:col-span-9 text-4xl md:text-6xl leading-[1.05]">
              Pięć powodów, <em className="italic font-light text-foreground/70">dla których wracają.</em>
            </h2>
          </div>
        </Reveal>

        <dl className="divide-y divide-border border-y border-border">
          {DIFFS.map((d, i) => (
            <Reveal key={d.t} delay={i * 60}>
              <div className="grid md:grid-cols-12 gap-6 py-8 md:py-10 items-baseline">
                <dt className="md:col-span-1 text-sm text-muted-foreground tabular-nums">
                  0{i + 1}
                </dt>
                <div className="md:col-span-7 font-serif text-2xl md:text-4xl leading-tight">
                  {d.t}
                </div>
                <dd className="md:col-span-4 text-foreground/70 leading-relaxed">{d.d}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ---------- About ---------- */

function About() {
  return (
    <section id="o-nas" className="py-28 md:py-40 bg-muted/50">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <Reveal>
            <div className="md:col-span-6 relative overflow-hidden aspect-[4/5] bg-muted">
              <img
                src={aboutImg}
                alt="Zespół FABTA w stolarni"
                loading="lazy"
                width={1600}
                height={2000}
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="md:col-span-6">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-8">
                06 — O nas
              </p>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                Lubimy to, co robimy — i robimy to <em className="italic font-light">rzetelnie.</em>
              </h2>
              <p className="mt-8 text-lg text-foreground/80 leading-relaxed max-w-prose">
                Zależy nam, żeby nasze meble dobrze służyły i dobrze wyglądały — i żeby
                klient był z nich naprawdę zadowolony. Lubimy projektowanie i przekuwanie
                wizualizacji w gotowe produkty.
              </p>
              <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-foreground/20 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Od</dt>
                  <dd className="font-serif text-3xl mt-2">2018</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Zespół</dt>
                  <dd className="font-serif text-3xl mt-2">15 osób</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lokalizacja</dt>
                  <dd className="font-serif text-2xl mt-2">okol. Leszna</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="kontakt" className="py-28 md:py-40">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
        <Reveal>
          <h2 className="font-serif text-5xl sm:text-6xl md:text-8xl lg:text-9xl leading-[0.95] max-w-5xl">
            Porozmawiajmy <br />o Twoim <em className="italic font-light">projekcie.</em>
          </h2>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-12 gap-10">
          <Reveal>
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground">Kontakt</p>
              <a
                href="mailto:info@fabta.pl"
                className="block mt-4 font-serif text-3xl md:text-4xl border-b border-foreground/40 pb-2 hover:border-foreground transition-colors"
              >
                info@fabta.pl
              </a>
              <p className="mt-10 text-sm text-foreground/70 leading-relaxed max-w-sm">
                Odpowiadamy zwykle w ciągu jednego dnia roboczego. Najlepiej dołącz
                wizualizację, wymiary lub krótki opis projektu.
              </p>
              <div className="mt-10 text-sm text-foreground/70 space-y-1">
                <p>FABTA · Fabryka Tapicerki</p>
                <p>okolice Leszna, Wielkopolska</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8"
              onSubmit={(e) => {
                e.preventDefault();
                const f = e.currentTarget;
                const data = new FormData(f);
                const body = `Imię: ${data.get("name")}\nFirma: ${data.get(
                  "company",
                )}\n\n${data.get("message")}`;
                window.location.href = `mailto:info@fabta.pl?subject=Zapytanie%20ofertowe&body=${encodeURIComponent(body)}`;
              }}
            >
              <Field name="name" label="Imię" required />
              <Field name="company" label="Firma" />
              <Field name="email" label="E-mail" type="email" required className="sm:col-span-2" />
              <Field name="message" label="Opis projektu" textarea required className="sm:col-span-2" />
              <div className="sm:col-span-2 flex items-center justify-between pt-2">
                <p className="text-xs text-muted-foreground">
                  Wizualizację możesz dosłać w odpowiedzi na maila.
                </p>
                <button
                  type="submit"
                  className="inline-flex items-center text-sm uppercase tracking-wide border border-foreground px-6 py-3 hover:bg-foreground hover:text-background transition-colors"
                >
                  Wyślij zapytanie
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  name,
  label,
  type = "text",
  required,
  textarea,
  className = "",
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  className?: string;
}) {
  const base =
    "w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-3 text-foreground placeholder:text-foreground/40 transition-colors";
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
        {label}
        {required && " *"}
      </span>
      {textarea ? (
        <textarea name={name} required={required} rows={4} className={`${base} resize-none`} />
      ) : (
        <input name={name} type={type} required={required} className={base} />
      )}
    </label>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  return (
    <footer className="border-t border-border py-12 md:py-16">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 grid md:grid-cols-12 gap-8 items-end">
        <div className="md:col-span-4">
          <p className="font-serif text-2xl">FABTA</p>
          <p className="text-xs text-muted-foreground mt-2">Fabryka Tapicerki · od 2018</p>
        </div>
        <div className="md:col-span-4 text-sm text-foreground/70">
          <a href="mailto:info@fabta.pl" className="hover:text-foreground">
            info@fabta.pl
          </a>
          <p className="mt-1">okolice Leszna, Wielkopolska</p>
        </div>
        <nav className="md:col-span-4 flex flex-wrap md:justify-end gap-x-6 gap-y-2 text-sm text-foreground/70">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
          <a href="#kontakt" className="hover:text-foreground">
            Kontakt
          </a>
        </nav>
        <p className="md:col-span-12 text-xs text-muted-foreground pt-8 border-t border-border">
          © {new Date().getFullYear()} FABTA. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
