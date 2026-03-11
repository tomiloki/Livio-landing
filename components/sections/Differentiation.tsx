import Container from "@/components/layout/Container";

export default function Differentiation() {
  return (
    <section className="py-16 md:py-24 bg-primary text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Decorative rule */}
          <div className="w-8 h-0.5 bg-accent rounded-full mx-auto mb-8"></div>
          
          {/* Main statement */}
          <p className="text-[clamp(28px,4.5vw,56px)] font-bold leading-[1.15] tracking-[-1.5px] text-white mb-0">
            No vendemos rutas.<br />
            Ordenamos tu <span className="text-accent">operación completa.</span>
          </p>
          
          {/* Support text */}
          <p className="mt-7 text-base text-white/45 tracking-wide leading-relaxed max-w-2xl mx-auto">
            LIVIO no es un optimizador de rutas. Es el sistema que conecta todo lo que hoy está disperso: los pedidos que llegan por WhatsApp, los choferes que operan con llamadas, la evidencia que queda en teléfonos y el cierre de caja que se hace de memoria.
          </p>
          <p className="mt-4 text-base text-white/55 tracking-wide leading-relaxed max-w-2xl mx-auto font-medium">
            Desde que llega el primer pedido hasta que cierras el día con evidencia. Eso es lo que resuelve LIVIO.
          </p>
        </div>
      </Container>
    </section>
  );
}
