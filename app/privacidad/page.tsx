import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Política de Privacidad - LIVIO",
  description: "Política de privacidad y protección de datos de LIVIO.",
  openGraph: {
    title: "Política de Privacidad - LIVIO",
    description: "Política de privacidad y protección de datos de LIVIO.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad - LIVIO",
    description: "Política de privacidad y protección de datos de LIVIO.",
  },
};

export default function PrivacidadPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Política de Privacidad"
          subtitle="Última actualización: Marzo 2026"
        />

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-text-secondary">
            En LIVIO, respetamos tu privacidad y nos comprometemos a proteger tus datos personales.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Información que recopilamos
          </h3>
          <p className="text-text-secondary">
            Recopilamos información que nos proporcionas directamente, como nombre, email, 
            empresa y datos de contacto cuando solicitas una demo o te comunicas con nosotros.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Uso de la información
          </h3>
          <p className="text-text-secondary">
            Utilizamos tu información para responder a tus consultas, programar demos y 
            proporcionarte información sobre LIVIO.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Protección de datos
          </h3>
          <p className="text-text-secondary">
            Implementamos medidas de seguridad para proteger tu información personal contra 
            acceso no autorizado o divulgación.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Contacto
          </h3>
          <p className="text-text-secondary">
            Si tienes preguntas sobre esta política, contáctanos en contacto@livio.cl
          </p>
        </div>
      </Container>
    </section>
  );
}
