import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Soluciones LIVIO - Para distintos tipos de operación logística",
  description: "LIVIO se adapta a pymes con flota propia y entregas diarias en diversos rubros.",
  openGraph: {
    title: "Soluciones LIVIO - Para distintos tipos de operación logística",
    description: "LIVIO se adapta a pymes con flota propia y entregas diarias en diversos rubros.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Soluciones LIVIO - Para distintos tipos de operación logística",
    description: "LIVIO se adapta a pymes con flota propia y entregas diarias en diversos rubros.",
  },
};

export default function SolucionesPage() {
  const { scope, beforeAfter } = homeContent;

  return (
    <>
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Soluciones"
            title={scope.title}
            subtitle={scope.subtitle}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Lo que incluye el piloto
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto mb-8">
            {scope.included.map((item) => (
              <div key={item} className="flex items-center gap-3 bg-accent-light rounded-xl p-4 border border-accent/20">
                <svg className="w-5 h-5 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span className="text-text-primary font-medium">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-text-secondary max-w-2xl mx-auto">
            {scope.footer}
          </p>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Sin LIVIO vs. Con LIVIO
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-red-50/50 border border-red-200 rounded-2xl p-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Sin LIVIO</h3>
              <ul className="space-y-3">
                {beforeAfter.without.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-light/50 border border-accent rounded-2xl p-8">
              <h3 className="text-lg font-bold text-text-primary mb-4">Con LIVIO</h3>
              <ul className="space-y-3">
                {beforeAfter.with.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              ¿Tu operación calza con LIVIO?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Si tienes entre 2 y 15 vehículos y hoy operas con WhatsApp y Excel, esto es para ti.
            </p>
            <Button href="/#contacto" variant="primary">
              Quiero ser empresa piloto
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
