import Container from "@/components/layout/Container";

export default function VideoSection() {
  return (
    <section className="py-20 bg-background">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <p className="text-accent font-medium mb-3 tracking-[2.5px] uppercase text-[11px]">
              Ve LIVIO en acción
            </p>
            <h2 className="text-[clamp(22px,2.8vw,30px)] font-bold text-text-primary leading-tight tracking-tight">
              Un recorrido por la operación diaria
            </h2>
          </div>

          {/* Video Player Shell - Wider aspect ratio */}
          <div 
            className="relative rounded-[16px] overflow-hidden bg-primary shadow-[0_2px_0_rgba(255,255,255,0.05)_inset,0_24px_60px_rgba(22,53,63,0.16),0_6px_20px_rgba(22,53,63,0.08)] outline outline-1 outline-primary/10"
            style={{ aspectRatio: '21/9' }}
          >
            {/* Gradiente interior */}
            <div 
              className="absolute inset-0 opacity-95"
              style={{
                background: 'linear-gradient(145deg, #16353F 0%, #1F4E5F 40%, #2F8F83 100%)'
              }}
            />

            {/* Noise texture overlay */}
            <div 
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E")`
              }}
            />

            {/* Play button - Smaller */}
            <button 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-3 cursor-pointer transition-transform duration-200 hover:scale-105"
              aria-label="Reproducir video demo"
            >
              <div className="w-[60px] h-[60px] rounded-full bg-white/[0.12] border-[1.5px] border-white/25 backdrop-blur-sm flex items-center justify-center transition-colors hover:bg-white/20">
                <svg className="w-5 h-5 text-white ml-0.5" viewBox="0 0 24 24" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <span className="text-[12px] font-medium text-white/65 tracking-wide">
                Ver demo · 2 min
              </span>
            </button>
          </div>

          {/* Context text */}
          <p className="mt-4 text-center text-[13px] text-text-secondary leading-relaxed">
            Desde el primer pedido del día hasta el cierre con evidencia — todo en menos de dos minutos.
          </p>
        </div>
      </Container>
    </section>
  );
}
