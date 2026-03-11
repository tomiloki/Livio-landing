import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "Nosotros - LIVIO",
  description: "Construimos LIVIO porque vimos el problema de cerca. Un equipo pequeño con foco en la operación logística diaria de pymes.",
  openGraph: {
    title: "Nosotros - LIVIO",
    description: "Construimos LIVIO porque vimos el problema de cerca. Un equipo pequeño con foco en la operación logística diaria de pymes.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - LIVIO",
    description: "Construimos LIVIO porque vimos el problema de cerca. Un equipo pequeño con foco en la operación logística diaria de pymes.",
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
              El equipo
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {about.team.map((member) => (
                <div key={member.name} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-border">
                  <span className="w-10 h-10 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                    {member.initials}
                  </span>
                  <div>
                    <h3 className="font-semibold text-text-primary">{member.name}</h3>
                    <p className="text-sm text-accent mb-1">{member.role}</p>
                    <p className="text-sm text-text-secondary">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-background">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Sé parte del piloto
            </h2>
            <p className="text-lg text-text-secondary mb-8">
              Queremos entender tu realidad operativa y ver cómo LIVIO puede ayudarte.
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
