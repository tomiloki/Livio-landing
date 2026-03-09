import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
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
  const { useCases, problem } = homeContent;

  return (
    <>
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Soluciones"
            title="Para distintos tipos de operación logística"
            subtitle="LIVIO se adapta a pymes con flota propia y entregas diarias"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary mb-8">Casos de uso</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {useCases.cases.map((useCase) => (
              <Card key={useCase.title}>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-text-secondary mb-2">
                  <span className="font-medium text-text-primary">Problema:</span> {useCase.problem}
                </p>
                <p className="text-sm text-accent">
                  <span className="font-medium">Con LIVIO:</span> {useCase.solution}
                </p>
              </Card>
            ))}
          </div>
          <p className="text-center text-lg text-text-primary font-medium">
            {useCases.footer}
          </p>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
            Problemas comunes que resolvemos
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problem.problems.map((item) => (
              <Card key={item.title}>
                <h3 className="text-xl font-semibold text-text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-text-secondary">{item.description}</p>
              </Card>
            ))}
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
              Conversemos sobre tu operación y veamos cómo LIVIO puede ayudarte.
            </p>
            <Button href="/contacto" variant="primary">
              Quiero evaluar mi operación
            </Button>
          </div>
        </Container>
      </section>
    </>
  );
}
