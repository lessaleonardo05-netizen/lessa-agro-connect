import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Categories } from "@/components/site/Categories";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Benefits } from "@/components/site/Benefits";
import { About } from "@/components/site/About";
import { Testimonials } from "@/components/site/Testimonials";
import { WhatsAppCTA } from "@/components/site/WhatsAppCTA";
import { Location } from "@/components/site/Location";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { company } from "@/data/site";

const title =
  "Lessa Agropecuária | Rações, Produtos e Cuidados para seus Animais";
const description =
  "Encontre rações, produtos agropecuários, medicamentos veterinários e itens para seus animais na Lessa Agropecuária. Fale conosco pelo WhatsApp.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          description: description,
          telephone: company.phoneDisplay,
          address: {
            "@type": "PostalAddress",
            streetAddress: company.address.street,
            addressLocality: company.address.city,
            addressRegion: company.address.state,
            postalCode: company.address.zip,
            addressCountry: "BR",
          },
          openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
          areaServed: company.address.city,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <Benefits />
        <About />
        <Testimonials />
        <WhatsAppCTA />
        <Location />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
