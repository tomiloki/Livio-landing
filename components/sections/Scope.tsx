import Container from "@/components/layout/Container";

export default function Scope() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
      ),
      label: "Pedidos por WhatsApp con IA"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      label: "Asignación de entregas"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      label: "Seguimiento en tiempo real"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      label: "Evidencia digital"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
        </svg>
      ),
      label: "Cierre diario"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2"/>
          <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3"/>
        </svg>
      ),
      label: "Acceso web y móvil"
    }
  ];

  return (
    <section className="py-14 md:py-20 bg-white border-t border-border">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-20 items-center max-w-6xl mx-auto">
          {/* Left - Title & Description */}
          <div>
            <p className="text-accent font-medium mb-3.5 tracking-[2.5px] uppercase text-[11px]">
              Lo que incluye v1
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-5">
              Lo esencial para ordenar<br />
              la operación. <span className="text-accent">Sin humo.</span>
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-md">
              Esto es lo que está disponible hoy. <strong className="text-text-primary font-medium">Funciona desde el primer día.</strong> Las empresas del piloto tienen acceso directo al equipo y participan en definir qué sigue.
            </p>
          </div>

          {/* Right - Feature Pills in Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-medium text-primary bg-accent-light border-[1.5px] border-transparent hover:bg-accent/25 hover:border-accent/20 hover:translate-x-1 transition-all duration-200"
              >
                <span className="w-3.5 h-3.5 text-accent flex-shrink-0">
                  {feature.icon}
                </span>
                <span>{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pilot note */}
        <p className="text-center text-sm text-text-secondary mt-10 max-w-2xl mx-auto leading-relaxed">
          Estamos en fase piloto. El piloto arranca en abril. Las primeras empresas entran con 2 meses gratuitos y precio especial de lanzamiento desde el mes 3.
        </p>
      </Container>
    </section>
  );
}
