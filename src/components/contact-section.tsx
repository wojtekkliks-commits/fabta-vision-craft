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

export function ContactSection() {
  return (
    <section id="kontakt" className="bg-accent text-accent-foreground py-24 md:py-40">
      <div className="mx-auto max-w-[1700px] px-6 md:px-12">
        <h2 className="font-serif font-medium text-center text-[clamp(3rem,10vw,10rem)] leading-[0.95] tracking-[-0.03em]">
          <span className="block">Have a project in mind?</span>
          <span className="block italic font-normal">Get in touch with our team.</span>
        </h2>

        <div className="mt-16 md:mt-24 max-w-[1300px] mx-auto">
          <form
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8"
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
        </div>
      </div>
    </section>
  );
}
