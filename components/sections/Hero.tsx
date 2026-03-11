import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center text-center overflow-hidden pt-36 pb-24 px-12">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero1.png)'
        }}
      />

      {/* Dark overlay with gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(22,53,63,0.82) 0%, rgba(22,53,63,0.75) 60%, rgba(22,53,63,0.88) 100%)'
        }}
      />

      {/* Accent tint */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(47,143,131,0.18) 0%, transparent 70%)'
        }}
      />

      <Container>
        <div className="relative z-10 max-w-[720px] mx-auto">
          {/* Eyebrow pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-7">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-xs font-medium text-white/80">
              Piloto abierto — cupos limitados
            </span>
          </div>

          {/* Título */}
          <h1 className="text-[clamp(38px,6vw,68px)] font-extrabold leading-[1.07] tracking-[-2px] text-white mb-6">
            La operación logística<br />
            de tu pyme, <span className="text-accent">en orden.</span>
          </h1>

          {/* Subtítulo */}
          <p className="text-[clamp(15px,1.8vw,18px)] text-white/65 leading-[1.7] max-w-[560px] mx-auto mb-10">
            Deja de depender de que una persona esté en todo para que la operación no se caiga. LIVIO centraliza tus pedidos, guía a tus choferes y cierra el día con evidencia — desde el primer día.
          </p>

          {/* CTAs */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-14">
            <Button 
              href="/#contacto" 
              variant="primary"
              className="shadow-[0_4px_24px_rgba(47,143,131,0.45)] hover:shadow-[0_6px_28px_rgba(47,143,131,0.50)] hover:-translate-y-0.5 transition-all"
            >
              Quiero ser empresa piloto
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"/>
                <polyline points="12 5 19 12 12 19"/>
              </svg>
            </Button>
            <Link 
              href="/#como-funciona"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-[1.5px] border-white/25 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all hover:bg-white/16 hover:border-white/40"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
              </svg>
              Ver cómo funciona
            </Link>
          </div>

          {/* Pilot offer strip */}
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <div className="flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Piloto abierto — cupos limitados
            </div>
            <div className="w-px h-3 bg-white/15"></div>
            <div className="flex items-center gap-1.5 text-[13px] text-white/50">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              Implementación gratuita
            </div>
            <div className="w-px h-3 bg-white/15"></div>
            <div className="flex items-center gap-1.5 text-[13px] text-white/50">
              <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              50% de descuento durante 12 meses
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-bounce">
        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* Layered transition to next section (4 layers without waves) */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-[0]">
        <svg 
          className="relative block w-full h-[80px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <rect x="0" y="0" width="1200" height="120" fill="#16353F" opacity="0.2"/>
          <rect x="0" y="15" width="1200" height="105" fill="#16353F" opacity="0.35"/>
          <rect x="0" y="30" width="1200" height="90" fill="#16353F" opacity="0.55"/>
          <rect x="0" y="45" width="1200" height="75" fill="#16353F"/>
        </svg>
      </div>
    </section>
  );
}
