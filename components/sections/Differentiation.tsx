import Container from "@/components/layout/Container";

export default function Differentiation() {
  return (
    <section className="py-24 bg-primary text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Decorative rule */}
          <div className="w-8 h-0.5 bg-accent rounded-full mx-auto mb-8"></div>
          
          {/* Main statement */}
          <p className="text-[clamp(28px,4.5vw,56px)] font-bold leading-[1.15] tracking-[-1.5px] text-white mb-0">
            No vendemos rutas.<br />
            Vendemos <span className="text-accent">operación bajo control.</span>
          </p>
          
          {/* Support text */}
          <p className="mt-7 text-base text-white/45 tracking-wide leading-relaxed">
            LIVIO no es un ruteador. Es el sistema que ordena tu día logístico de principio a fin.
          </p>
        </div>
      </Container>
    </section>
  );
}
