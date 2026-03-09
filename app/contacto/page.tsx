import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contacto - LIVIO",
  description: "Agenda una demo y descubre cómo LIVIO puede ordenar tu operación logística diaria.",
  openGraph: {
    title: "Contacto - LIVIO",
    description: "Agenda una demo y descubre cómo LIVIO puede ordenar tu operación logística diaria.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto - LIVIO",
    description: "Agenda una demo y descubre cómo LIVIO puede ordenar tu operación logística diaria.",
  },
};

export default function ContactoPage() {
  return (
    <>
      <section className="py-20 bg-background">
        <Container>
          <SectionHeader
            eyebrow="Contacto"
            title="Conversemos sobre tu operación"
            subtitle="Agenda una demo y ve cómo LIVIO puede ordenar tu operación logística diaria"
          />
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl font-bold text-text-primary mb-4">
                ¿Qué esperar de la demo?
              </h2>
              <ul className="space-y-4 text-text-secondary">
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Entenderemos tu operación actual y tus principales dolores</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Te mostraremos cómo LIVIO ordena cada etapa del día</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Veremos si LIVIO calza con tu operación</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-accent mt-1">✓</span>
                  <span>Responderemos todas tus preguntas</span>
                </li>
              </ul>

              <div className="mt-8 p-6 bg-background-alt rounded-xl">
                <h3 className="font-semibold text-text-primary mb-2">Datos de contacto</h3>
                <a
                  href="mailto:contacto@livio.cl"
                  className="text-text-secondary hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                >
                  contacto@livio.cl
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>
    </>
  );
}
