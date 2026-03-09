import Container from "@/components/layout/Container";

export default function BeforeAfter() {
  return (
    <section className="py-12 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Sin LIVIO */}
          <div className="bg-red-50/50 border-2 border-red-200 rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Sin LIVIO</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-red-500 mt-1">•</span>
                <span>Pedidos por WhatsApp y llamadas</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-red-500 mt-1">•</span>
                <span>Planificación en Excel o de memoria</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-red-500 mt-1">•</span>
                <span>No sabes dónde está cada vehículo</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-red-500 mt-1">•</span>
                <span>Evidencia en fotos sueltas de WhatsApp</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-red-500 mt-1">•</span>
                <span>Al cierre del día: nadie sabe qué pasó</span>
              </li>
            </ul>
          </div>

          {/* Con LIVIO */}
          <div className="bg-accent-light/50 border-2 border-accent rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-text-primary">Con LIVIO</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1">✓</span>
                <span>Todos los pedidos en un solo lugar</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1">✓</span>
                <span>Asignación clara por vehículo y conductor</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1">✓</span>
                <span>Seguimiento en tiempo real</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1">✓</span>
                <span>Evidencia con foto, firma y ubicación</span>
              </li>
              <li className="flex items-start gap-3 text-text-secondary">
                <span className="text-accent mt-1">✓</span>
                <span>Reporte completo al cerrar el día</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
