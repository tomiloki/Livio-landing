export default function Problem() {
  return (
    <section id="problema" className="bg-primary py-20 md:py-28 px-5 md:px-12 flex items-center justify-center">
      <div className="max-w-[960px] w-full flex flex-col items-center text-center gap-8">
        {/* Eyebrow */}
        <span className="text-[11px] font-semibold tracking-[3px] uppercase text-white/[0.28]">
          El problema real
        </span>

        {/* Statement */}
        <h2 className="font-sans text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.18] tracking-[-0.8px] text-white/[0.92]">
          Tu operación funciona porque tú estás en todo.<br />
          El problema es que <em className="not-italic text-white/[0.32] font-normal">eso no escala.</em>
        </h2>

        {/* Subtext */}
        <p className="text-[clamp(16px,1.6vw,19px)] leading-[1.75] text-white/[0.42] max-w-[680px]">
          Hay un punto en que seguir creciendo así cuesta más de lo que rinde — en tiempo, en errores y en clientes perdidos. Livio convierte lo que está en tu cabeza en un sistema que funciona aunque no estés mirando.
        </p>

        {/* CTA Button */}
        <a
          href="#como-funciona"
          className="inline-flex items-center gap-2 bg-accent text-white font-medium text-[15px] rounded-lg px-7 py-3.5 mt-2 transition-all hover:bg-[#278A7E] hover:shadow-lg hover:-translate-y-0.5"
        >
          Ver cómo lo resolvemos
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>

        {/* Arrow */}
        <div className="opacity-[0.28] animate-bounce mt-4">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/50">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </div>
      </div>
    </section>
  );
}


