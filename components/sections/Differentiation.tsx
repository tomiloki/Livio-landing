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
          <p className="mt-7 text-[clamp(15px,1.4vw,18px)] text-white/70 tracking-wide leading-relaxed max-w-2xl mx-auto">
            Hoy hay una persona que sabe dónde está cada chofer, qué pedidos van atrasados y cuánto se cobró. LIVIO hace que esa información no dependa de nadie en particular — queda visible, trazable y disponible para todo el equipo.
          </p>
          <p className="mt-4 text-[clamp(15px,1.4vw,18px)] text-white/75 tracking-wide leading-relaxed max-w-2xl mx-auto font-medium">
            Desde que llega el primer pedido hasta que cierras el día con evidencia. Eso es lo que resuelve LIVIO.
          </p>
        </div>
      </Container>
    </section>
  );
}
