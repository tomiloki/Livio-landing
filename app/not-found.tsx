import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 min-h-[60vh] flex items-center">
      <Container>
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-6xl font-bold text-text-primary mb-4">404</h1>
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Página no encontrada
          </h2>
          <p className="text-lg text-text-secondary mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/" variant="primary">
              Volver al inicio
            </Button>
            <Button href="/#contacto" variant="secondary">
              Contacto
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
