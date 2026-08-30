import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";

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
      { title: "FABTA — Meble, które robią różnicę" },
      {
        name: "description",
        content:
          "FABTA (Fabryka Tapicerki) to kontraktowy producent mebli tapicerowanych i biurowych. Realizujemy gotowe produkty z wizualizacji klienta, pod jego marką.",
      },
      { property: "og:title", content: "FABTA — Meble, które robią różnicę" },
      {
        property: "og:description",
        content:
          "Kontraktowy producent mebli tapicerowanych i biurowych. Tapicerka i stolarnia pod jednym dachem.",
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
        <Projects />
        <Feature
          image={workCarpentry}
          narrowImage
          eyebrow="ENGINEERING PURCHASING CUTTING SEWING CARPENTERING UPHOLSTERING DELIVERING"
          title={
            <>
              <span className="block">your partner</span>
              <span className="block italic font-normal">in contract furniture manufacturing</span>
            </>
          }
          body={
            <>
              At fabta we don’t just manufacture furniture; we provide
              comprehensive technical support to&nbsp;bring your vision to life.
              Our expertise covers every stage of the process:
              <br />
              <br />
              <br />
              <br />
              We bridge the gap between design and manufacturing. Our team
              supports you with technological optimization and professional
              technical drawings, ensuring your contract furniture projects are
              feasible and high-performing. With our own manufacturing plant, we
              guarantee a smooth transition from technical planning to the final
              upholstered product.
            </>
          }
          cta={{ label: "EXPLORE OUR PROCESS", href: "#proces" }}
        />
        <Feature
          image={aboutImg}
          eyebrow="ABOUT"
          title={
            <>
              <span className="block">doing what we love</span>
              <span className="block italic font-normal">loving what we do</span>
            </>
          }
          body={
            <>
              Behind our work is a team of 20 specialists, supported by our own
              cutting, sewing, carpentry & upholstery departments, and technical
              design office. Our focus is simple: we create furniture that
              combines durability & ensuring complete client satisfaction. Years
              of experience shape the way we approach every new project.
            </>
          }
          cta={{ label: "ABOUT US", href: "#o-nas" }}
        />
        <Process />
        <ForWhom />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------- Header ---------- */

const NAV = [
  { href: "#co-robimy", label: "what we do" },
  { href: "#realizacje", label: "realizations" },
  { href: "#proces", label: "how we do" },
  { href: "#dla-kogo", label: "who is this for" },
  { href: "#o-nas", label: "about" },
  { href: "#kontakt", label: "contact" },
];

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 bg-[var(--bar)] text-[var(--bar-foreground)]">
        <div className="relative h-28 md:h-36 flex items-center justify-center px-6">
          {/* Orange round search button */}
          <button
            aria-label="Szukaj"
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 size-12 md:size-14 rounded-full bg-accent text-accent-foreground grid place-items-center hover:scale-105 transition-transform"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <circle cx="11" cy="11" r="7" />
              <line x1="20" y1="20" x2="16.5" y2="16.5" />
            </svg>
          </button>

          {/* Centered wordmark */}
          <a
            href="#top"
            className="font-serif text-3xl md:text-5xl tracking-[0.18em] font-medium select-none"
          >
            FABTA
          </a>

          {/* Hamburger */}
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

      {/* Slide-down menu */}
      <div
        className={`fixed inset-x-0 top-28 md:top-36 z-40 bg-[var(--bar)] border-t border-border overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="px-6 md:px-12 py-10 md:py-16 max-w-[1600px] mx-auto">
          <ul className="space-y-5 md:space-y-7">
            {NAV.map((n) => (
              <li key={n.href}>
                <a
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="font-serif text-4xl md:text-7xl leading-none hover:text-accent transition-colors block"
                >
                  {n.label}
                </a>
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

/* ---------- Hero ---------- */

function Hero() {
  return (
    <section
      id="top"
      className="relative bg-accent text-accent-foreground overflow-hidden"
    >
      <div className="relative mx-auto max-w-[1700px] px-6 md:px-12 pt-20 md:pt-32 pb-20 md:pb-32 min-h-[80vh] flex flex-col justify-center">
        <h1 className="font-serif font-medium text-center leading-[0.95] text-[clamp(3.5rem,11vw,12rem)] tracking-[-0.03em]">
          <span className="block">upholstery furniture</span>
          <span className="block italic font-normal">contract manufacturer</span>
        </h1>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-8">
          <div className="md:col-start-7 md:col-span-6 max-w-xl">
            <p className="text-lg md:text-xl leading-relaxed">
              We provide a seamless transition from your initial concept to the
              final delivery, managing every step of the supply chain and
              production process with precision.
            </p>
            <p className="text-base md:text-lg leading-relaxed mt-6 opacity-90">
              
            </p>
            <a
              href="#kontakt"
              className="mt-10 inline-flex items-center group text-sm tracking-[0.25em] uppercase border-b border-accent-foreground pb-1"
            >
              Porozmawiajmy
              <span className="ml-3 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Projects carousel ---------- */

const PROJECTS = [
  { img: hero, name: "Sofa Lounge", tag: "Wnętrza biurowe" },
  { img: workAcoustic, name: "Panele akustyczne", tag: "Open space" },
  { img: projectSofa, name: "Sofa modułowa", tag: "Showroom marki" },
  { img: projectScreens, name: "Ekrany biurowe", tag: "Strefa pracy" },
  { img: projectPlanter, name: "Donice tapicerowane", tag: "Recepcja" },
  { img: projectPoufs, name: "Pufy Gallery", tag: "Strefa wspólna" },
  { img: detailFabric, name: "Detal tapicerki", tag: "Wykończenie" },
];

function Projects() {
  const [idx, setIdx] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollTo = (i: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    el.scrollTo({ left: child.offsetLeft - 24, behavior: "smooth" });
    setIdx(i);
  };

  return (
    <section id="realizacje" className="bg-background py-20 md:py-28">
      <div className="px-6 md:px-12 mx-auto max-w-[1700px] flex items-end justify-between mb-10">
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground">
          Wybrane realizacje
        </p>
        <div className="flex items-center gap-4 text-sm tracking-[0.2em] uppercase">
          <button
            onClick={() => scrollTo(Math.max(0, idx - 1))}
            aria-label="Poprzedni"
            className="size-10 rounded-full border border-foreground/40 grid place-items-center hover:bg-foreground hover:text-background transition-colors"
          >
            ←
          </button>
          <span className="tabular-nums text-muted-foreground">
            {String(idx + 1).padStart(2, "0")} / {String(PROJECTS.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => scrollTo(Math.min(PROJECTS.length - 1, idx + 1))}
            aria-label="Następny"
            className="size-10 rounded-full border border-foreground/40 grid place-items-center hover:bg-foreground hover:text-background transition-colors"
          >
            →
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        onScroll={(e) => {
          const el = e.currentTarget;
          const children = Array.from(el.children) as HTMLElement[];
          const center = el.scrollLeft + el.clientWidth / 2;
          let nearest = 0;
          let best = Infinity;
          children.forEach((c, i) => {
            const d = Math.abs(c.offsetLeft + c.clientWidth / 2 - center);
            if (d < best) { best = d; nearest = i; }
          });
          setIdx(nearest);
        }}
        className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar px-6 md:px-12 pb-4"
      >
        {PROJECTS.map((p, i) => (
          <article
            key={i}
            className="snap-start shrink-0 w-[85vw] sm:w-[60vw] md:w-[70vw] lg:w-[58vw] xl:w-[52vw]"
          >
            <div className="relative overflow-hidden aspect-[16/10] bg-muted tile-hover">
              <img
                src={p.img}
                alt={p.name}
                loading={i < 2 ? "eager" : "lazy"}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex items-baseline justify-between mt-5">
              <h3 className="font-serif text-3xl md:text-4xl">{p.name}</h3>
              <a
                href="#kontakt"
                className="text-xs tracking-[0.25em] uppercase border-b border-foreground/60 hover:border-foreground pb-0.5"
              >
                O projekcie →
              </a>
            </div>
            <p className="text-sm text-muted-foreground mt-2">{p.tag}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ---------- Reusable image + text feature (Senab "Vi synar sömmarna" pattern) ---------- */

function Feature({
  image,
  narrowImage,
  eyebrow,
  title,
  body,
  cta,
}: {
  image: string;
  narrowImage?: boolean;
  eyebrow: string;
  title: ReactNode;
  body: ReactNode;
  cta?: { label: string; href: string };
}) {
  return (
    <section id="co-robimy" className="py-20 md:py-28">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <Reveal>
          <div className={`relative overflow-hidden aspect-[21/9] bg-muted ${narrowImage ? "max-w-[1000px] mx-auto" : ""}`}>
            <img
              src={image}
              alt=""
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 mt-16 md:mt-24 max-w-[1300px] mx-auto">
            <div className="md:col-span-12 text-center">
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
                {eyebrow}
              </p>
              <h2 className="font-serif font-medium text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em]">
                {title}
              </h2>
            </div>
            <div className="md:col-start-4 md:col-span-6 text-center md:text-left mt-6">
              <p className="text-lg leading-relaxed text-foreground/85">{body}</p>
              {cta && (
                <div className="mt-8 text-center md:text-left">
                  <a
                    href={cta.href}
                    className="inline-flex items-center text-xs tracking-[0.3em] uppercase border-b border-foreground/60 hover:border-foreground pb-1"
                  >
                    {cta.label} →
                  </a>
                </div>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Process ---------- */

const STEPS = [
  { n: "01", t: "Visualization and idea", d: "All you need is render, sketch, visualization or description.  That's where we start." },
  { n: "02", t: "Consultation and proposals", d: "We analize the idea and propose construction and material solutions." },
  { n: "03", t: "Realization", d: "We build the furniture ourselves: frame,upholstery, finishing. All in one place." },
  { n: "04", t: "Delivery", d: "Indyvidual, small-scale or serial production -  under the customer brand." },
];

function Process() {
  return (
    <section id="proces" className="py-20 md:py-32 bg-[var(--bar)]">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              OUR PROCESS
            </p>
            <h2 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em]">
              <span className="block">bring your vision</span>
              <span className="block italic font-normal">to life</span>
            </h2>
          </div>
        </Reveal>

        <ol className="grid md:grid-cols-4 gap-px bg-border">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <li className="bg-[var(--bar)] p-8 md:p-10 h-full border border-transparent">
                <div className="font-serif text-6xl md:text-7xl text-accent leading-none">
                  {s.n}
                </div>
                <h3 className="font-serif text-2xl md:text-3xl mt-8 leading-tight">{s.t}</h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------- For whom ---------- */

function ForWhom() {
  return (
    <section id="dla-kogo" className="py-20 md:py-32 bg-background">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <Reveal>
          <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
            <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
              WHO IS THIS FOR
            </p>
            <h2 className="font-serif font-medium text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.02em]">
              <span className="block">Production partner,</span>
              <span className="block italic font-normal">for companies that do not manufacture</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-20 max-w-[1300px] mx-auto">
          <Reveal>
            <div className="border-t border-foreground/30 pt-8">
              <h3 className="font-serif text-3xl md:text-4xl">for companies that do not manufacture</h3>
              <p className="mt-5 text-foreground/80 leading-relaxed">
                Firmy z własnym brandem, które chcą zlecać wytwarzanie mebli na
                zewnątrz i szukają rzetelnego, stabilnego dostawcy. Pracujemy w
                modelu white-label — na opakowaniu i metce widnieje Twoja marka.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="border-t border-foreground/30 pt-8">
              <h3 className="font-serif text-3xl md:text-4xl">Architekci i projektanci wnętrz</h3>
              <p className="mt-5 text-foreground/80 leading-relaxed">
                Firmy wyposażające biura, dealerzy mebli i projektanci wnętrz,
                dla których liczy się solidny, dobrze wykonany mebel w rozsądnej
                cenie — i partner, który doradzi, a nie tylko wykona.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <ul className="mt-20 md:mt-28 grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-border border border-border max-w-[1300px] mx-auto">
            {[
              ["Terminowość", "Dostawca, na którym można polegać."],
              ["Od renderu do mebla", "Przekładamy wizualizacje na realne produkty."],
              ["Wszystko u nas", "Tapicernia i stolarnia pod jednym dachem."],
              ["Bez minimów", "Jednostkowo, małoseryjnie lub seryjnie."],
              ["Doradztwo techniczne", "Proponujemy lepsze rozwiązania."],
              ["Stabilność od 2018", "Zespół 15 osób, własna fabryka."],
            ].map(([t, d]) => (
              <li key={t} className="bg-background p-8">
                <h4 className="font-serif text-2xl">{t}</h4>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */

function Contact() {
  return (
    <section id="kontakt" className="bg-accent text-accent-foreground py-24 md:py-40">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <Reveal>
          <h2
            id="o-nas"
            className="font-serif font-medium text-center text-[clamp(3rem,10vw,10rem)] leading-[0.95] tracking-[-0.03em]"
          >
            <span className="block">Have a project in mind?</span>
            <span className="block italic font-normal">Get in touch with our team.</span>
          </h2>
        </Reveal>

        <div className="mt-16 md:mt-24 grid md:grid-cols-12 gap-10 md:gap-16 max-w-[1300px] mx-auto">
          <Reveal>
            <div className="md:col-span-5">
              <p className="text-xs tracking-[0.3em] uppercase opacity-80">Napisz</p>
              <a
                href="mailto:info@fabta.pl"
                className="block mt-4 font-serif text-4xl md:text-5xl border-b border-accent-foreground/60 hover:border-accent-foreground pb-2"
              >
                info@fabta.pl
              </a>
              <p className="mt-10 text-base leading-relaxed opacity-90 max-w-sm">
                Odpowiadamy zwykle w ciągu jednego dnia roboczego. Najlepiej dołącz
                wizualizację, wymiary lub krótki opis projektu.
              </p>
              <div className="mt-10 text-sm space-y-1 opacity-90">
                <p>FABTA · Fabryka Tapicerki</p>
                <p>okolice Leszna, Wielkopolska</p>
                <p>na rynku od 2018 · zespół 15 osób</p>
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
              <ContactField name="name" label="Imię" required />
              <ContactField name="company" label="Firma" />
              <ContactField name="email" label="E-mail" type="email" required className="sm:col-span-2" />
              <ContactField name="message" label="Opis projektu" textarea required className="sm:col-span-2" />
              <div className="sm:col-span-2 flex items-center justify-between pt-2">
                <p className="text-xs opacity-80">Wizualizację możesz dosłać mailem.</p>
                <button
                  type="submit"
                  className="inline-flex items-center text-sm uppercase tracking-[0.2em] border border-accent-foreground px-6 py-3 hover:bg-accent-foreground hover:text-accent transition-colors"
                >
                  Wyślij zapytanie →
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactField({
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
    "w-full bg-transparent border-b border-accent-foreground/40 focus:border-accent-foreground outline-none py-3 text-accent-foreground placeholder:text-accent-foreground/50 transition-colors";
  return (
    <label className={`block ${className}`}>
      <span className="text-xs uppercase tracking-[0.25em] opacity-80">
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
            <a key={n.href} href={n.href} className="hover:text-foreground">
              {n.label}
            </a>
          ))}
        </nav>
        <p className="md:col-span-12 text-xs text-muted-foreground pt-10 border-t border-border">
          © {new Date().getFullYear()} FABTA. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
