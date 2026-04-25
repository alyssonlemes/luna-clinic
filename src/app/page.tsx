import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Specialties from "@/components/sections/Specialties";
import Differentials from "@/components/sections/Differentials";
import Founders from "@/components/sections/Founders";
import HowItWorks from "@/components/sections/HowItWorks";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "../components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/ui/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.lunaclinic.com.br";

  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "@id": `${siteUrl}/#organization`,
    name: "LUNA - Centro de Desenvolvimento Infantil",
    image: `${siteUrl}/images/capa-luna.jpeg`,
    url: siteUrl,
    telephone: "+55 16 99440-3306",
    email: "desenvolvimento.luna@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Antonio Torres Penedo, 460 - Sao Joaquim",
      addressLocality: "Franca",
      addressRegion: "SP",
      postalCode: "14406-352",
      addressCountry: "BR",
    },
    areaServed: {
      "@type": "City",
      name: "Franca",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "12:00",
      },
    ],
    sameAs: [
      "https://wa.me/5516994403306",
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Como sei se meu filho precisa de fisioterapia pediatrica?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sinais como atraso para sentar, engatinhar ou andar, assimetrias posturais, torcicolo, prematuridade e dificuldades motoras podem indicar a necessidade de avaliacao. Na LUNA, realizamos avaliacao individual para orientar a familia.",
        },
      },
      {
        "@type": "Question",
        name: "A clinica atende em Franca-SP?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Sim. A LUNA esta localizada em Franca-SP, no bairro Sao Joaquim, e atende familias da cidade e regiao.",
        },
      },
      {
        "@type": "Question",
        name: "Como agendar uma avaliacao na LUNA?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Voce pode agendar pelo WhatsApp ou pelo formulario da pagina de contato. Nossa equipe retorna com rapidez para orientar os proximos passos.",
        },
      },
    ],
  };

  return (
    <main className="overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Navbar />
      <Hero />
      <ScrollReveal />
      <About />
      <Specialties />
      <Differentials />
      <Founders />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
