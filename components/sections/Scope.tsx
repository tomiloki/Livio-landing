import Container from "@/components/layout/Container";

export default function Scope() {
  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      label: "Centralización de pedidos"
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
    <section className="py-20 bg-white border-t border-b border-border">
      <Container>
        <div className="grid md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
          {/* Left - Title & Description */}
          <div>
            <p className="text-accent font-medium mb-3.5 tracking-[2.5px] uppercase text-[11px]">
              Lo que incluye v1
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-5">
              Lo esencial para operar.<br />
              <span className="text-accent">Sin humo.</span>
            </h2>
            <p className="text-[15px] text-text-secondary leading-relaxed max-w-md">
              Esto es lo que está disponible hoy. <strong className="text-text-primary font-medium">Funciona.</strong> Lo que viene después lo construimos junto a las operaciones que adopten LIVIO.
            </p>
          </div>

          {/* Right - Feature Pills in Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-medium text-primary bg-accent-light border-[1.5px] border-transparent hover:border-accent hover:shadow-lg transition-all duration-150"
              >
                <span className="w-3.5 h-3.5 text-accent flex-shrink-0">
                  {feature.icon}
                </span>
                <span className="whitespace-nowrap">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
