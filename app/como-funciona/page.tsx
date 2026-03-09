import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Cómo funciona LIVIO - Sistema operativo para logística",
  description: "Descubre cómo LIVIO ordena tu operación logística diaria en 5 pasos simples.",
  openGraph: {
    title: "Cómo funciona LIVIO - Sistema operativo para logística",
    description: "Descubre cómo LIVIO ordena tu operación logística diaria en 5 pasos simples.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cómo funciona LIVIO - Sistema operativo para logística",
    description: "Descubre cómo LIVIO ordena tu operación logística diaria en 5 pasos simples.",
  },
};

export default function ComoFuncionaPage() {
  const { howItWorks } = homeContent;

  return (
    <>
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Cómo funciona"
            title="Un flujo simple que ordena tu operación de principio a fin"
            subtitle="LIVIO convierte el caos operativo en un proceso claro y repetible"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="space-y-16">
            {howItWorks.steps.map((step, index) => (
              <div key={step.number} className="grid md:grid-cols-2 gap-12 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-5xl font-bold text-accent mb-4">{step.number}</div>
                  <h2 className="text-3xl font-bold text-text-primary mb-4">{step.title}</h2>
                  <p className="text-lg text-text-secondary">{step.description}</p>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <div className="bg-background-alt rounded-2xl p-12 min-h-[300px] flex items-center justify-center">
                    <p className="text-text-secondary">Vista por etapa: {step.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              ¿Listo para ordenar tu operación?
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Agenda una demo y ve cómo LIVIO puede transformar tu operación logística diaria.
            </p>
            <Button href="/contacto" variant="primary">
              Agendar demo
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
