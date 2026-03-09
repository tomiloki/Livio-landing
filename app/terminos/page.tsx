import { Metadata } from "next";
import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export const metadata: Metadata = {
  title: "Términos y Condiciones - LIVIO",
  description: "Términos y condiciones de uso del sitio web de LIVIO.",
  openGraph: {
    title: "Términos y Condiciones - LIVIO",
    description: "Términos y condiciones de uso del sitio web de LIVIO.",
    type: "website",
    locale: "es_ES",
  },
  twitter: {
    card: "summary",
    title: "Términos y Condiciones - LIVIO",
    description: "Términos y condiciones de uso del sitio web de LIVIO.",
  },
};

export default function TerminosPage() {
  return (
    <section className="py-20">
      <Container>
        <SectionHeader
          title="Términos y Condiciones"
          subtitle="Última actualización: Marzo 2026"
        />

        <div className="max-w-3xl mx-auto prose prose-lg">
          <p className="text-text-secondary">
            Bienvenido a LIVIO. Al acceder y usar este sitio web, aceptas los siguientes términos y condiciones.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Uso del sitio
          </h3>
          <p className="text-text-secondary">
            Este sitio web es proporcionado con fines informativos sobre LIVIO y sus servicios. 
            No debes usar este sitio para ningún propósito ilegal o no autorizado.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Propiedad intelectual
          </h3>
          <p className="text-text-secondary">
            Todo el contenido de este sitio, incluyendo textos, gráficos, logos y software, 
            es propiedad de LIVIO y está protegido por leyes de propiedad intelectual.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Limitación de responsabilidad
          </h3>
          <p className="text-text-secondary">
            LIVIO no será responsable de ningún daño directo, indirecto, incidental o 
            consecuente que resulte del uso o la imposibilidad de usar este sitio.
          </p>

          <h3 className="text-xl font-semibold text-text-primary mt-8 mb-4">
            Contacto
          </h3>
          <p className="text-text-secondary">
            Para preguntas sobre estos términos, contáctanos en contacto@livio.cl
          </p>
        </div>
      </Container>
    </section>
  );
}
