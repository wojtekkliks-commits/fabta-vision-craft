import { createFileRoute } from "@tanstack/react-router";
import { ContactSection } from "@/components/contact-section";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — FABTA" },
      { name: "description", content: "Get in touch with FABTA. Contract furniture manufacturer for brands without their own production." },
      { property: "og:title", content: "Contact — FABTA" },
      { property: "og:description", content: "Get in touch with FABTA. Contract furniture manufacturer for brands without their own production." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://fabta-vision-craft.lovable.app/contact" },
    ],
    links: [{ rel: "canonical", href: "https://fabta-vision-craft.lovable.app/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
