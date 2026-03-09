import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Nosotros - LIVIO",
  description: "Construimos LIVIO porque conocemos el problema. Operación en orden. Crecimiento con control.",
  openGraph: {
    title: "Nosotros - LIVIO",
    description: "Construimos LIVIO porque conocemos el problema. Operación en orden. Crecimiento con control.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - LIVIO",
    description: "Construimos LIVIO porque conocemos el problema. Operación en orden. Crecimiento con control.",
  },
};

export default function NosotrosPage() {
  const { about } = homeContent;

  return (
    <>
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Nosotros"
            title={about.title}
            subtitle={about.subtitle}
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">Qué creemos</h2>
              <p className="text-text-secondary mb-6">
                {about.content}
              </p>
              <p className="text-text-secondary mb-6">
                Las pymes logísticas no necesitan software enterprise imposible de implementar. 
                Necesitan herramientas simples que les permitan operar con método, delegar con confianza 
                y cerrar cada día con evidencia clara.
              </p>
              <p className="text-text-secondary">
                LIVIO es eso: orden operativo para operaciones reales.
              </p>
            </div>

            <div className="bg-background-alt rounded-2xl p-12 min-h-[300px] flex items-center justify-center">
              <p className="text-text-secondary text-center">Bloque visual de valores</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-text-primary mb-8 text-center">
              Nuestros principios
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {about.principles.map((principle) => (
                <div key={principle} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-xl">✓</span>
                  <span className="text-lg text-text-primary">{principle}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Conversemos sobre tu operación
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Queremos entender tu realidad operativa y ver cómo LIVIO puede ayudarte.
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
