export default function Problem() {
  return (
    <section id="problema" className="relative bg-primary py-24 md:py-36 px-5 md:px-12 overflow-hidden">
      {/* Subtle radial glow for depth */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(47,143,131,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[1100px] w-full mx-auto flex flex-col items-center text-center">
        {/* Eyebrow */}
        <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#2F8F83] mb-6">
          El problema real
        </span>

        {/* Statement */}
        <h2 className="font-sans text-[clamp(28px,4vw,52px)] font-bold leading-[1.15] tracking-[-1px] text-white/[0.92] mb-6">
          Tu operación funciona porque tú estás en todo.<br />
          El problema es que <em className="not-italic text-white/[0.55] font-normal">eso no escala.</em>
        </h2>

        {/* Subtext */}
        <p className="text-[clamp(16px,1.6vw,20px)] leading-[1.8] text-white/[0.70] max-w-[700px] mb-14 md:mb-16">
          No somos un optimizador de rutas. Somos el sistema que toma todo lo que hoy está en la cabeza de una persona — los pedidos, los choferes, la evidencia, el cierre — y lo convierte en algo que funciona aunque esa persona no esté.
        </p>

        {/* CTA Button */}
        <a
          href="#como-funciona"
          className="inline-flex items-center gap-2 bg-accent text-white font-medium text-[15px] rounded-lg px-7 py-3.5 transition-all hover:bg-[#278A7E] hover:shadow-lg hover:-translate-y-0.5"
        >
          Ver cómo lo resolvemos
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
