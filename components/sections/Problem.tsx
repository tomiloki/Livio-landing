export default function Problem() {
  return (
    <section id="problema" className="bg-primary py-[88px] px-12 flex items-center justify-center">
      <div className="max-w-[720px] w-full flex flex-col items-center text-center gap-6">
        {/* Eyebrow */}
        <span className="text-[10px] font-semibold tracking-[2.5px] uppercase text-white/[0.28]">
          El problema real
        </span>

        {/* Statement */}
        <h2 className="font-sans text-[clamp(22px,3vw,38px)] font-bold leading-[1.18] tracking-[-0.8px] text-white/[0.92]">
          Si hoy operas con WhatsApp, Excel y memoria,<br />
          no tienes sistema: <em className="not-italic text-white/[0.32] font-normal">tienes dependencia.</em>
        </h2>

        {/* Subtext */}
        <p className="text-[clamp(15px,1.6vw,17px)] leading-[1.75] text-white/[0.42] max-w-[520px]">
          Una persona que sabe todo. Pedidos que llegan por todos lados. Un cierre del día que nadie puede hacer si esa persona no está. No es mala suerte. Es falta de método.
          <br />
          <strong className="text-accent font-medium">LIVIO existe para el día en que decidiste que ya era suficiente.</strong>
        </p>

        {/* CTA Button */}
        <a
          href="#como-funciona"
          className="inline-flex items-center gap-2 bg-accent text-white font-medium text-[14px] rounded-lg px-6 py-3 mt-2 transition-all hover:bg-[#278A7E] hover:shadow-lg hover:-translate-y-0.5"
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
