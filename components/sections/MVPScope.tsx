import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";

export default function MVPScope() {
  const mvpScope = {
    title: "Lo esencial para ordenar la operación, sin humo",
    subtitle: "LIVIO v1 incluye lo necesario para operar con control",
    included: [
      "Centralización de pedidos",
      "Asignación de entregas",
      "Seguimiento en tiempo real",
      "Registro de evidencia digital",
      "Cierre diario con reporte",
      "Acceso web y móvil",
    ],
    notIncluded: [
      "Optimización automática de rutas",
      "Integración con ERP enterprise",
      "Facturación integrada",
      "Gestión de inventario",
    ],
    footer: "Nos enfocamos en lo que realmente ordena tu operación diaria.",
  };

  return (
    <section className="py-20 bg-background">
      <Container>
        <SectionHeader
          title={mvpScope.title}
          subtitle={mvpScope.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Included */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary rounded-2xl blur-xl opacity-10 group-hover:opacity-20 transition-opacity" />
            <div className="relative bg-gradient-to-br from-accent-light via-white to-accent-light/50 rounded-2xl p-8 border-2 border-accent/30 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center shadow-md">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold gradient-text">✓ Sí incluye</h3>
              </div>
              <ul className="space-y-3">
                {mvpScope.included.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mt-0.5 shadow-sm">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-text-primary font-medium leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Not Included */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gray-100 rounded-2xl transform group-hover:scale-[1.02] transition-transform" />
            <div className="relative bg-white/70 backdrop-blur-sm rounded-2xl p-8 border-2 border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-600">No incluye (por ahora)</h3>
              </div>
              <ul className="space-y-3">
                {mvpScope.notIncluded.map((item, index) => (
                  <li key={item} className="flex items-start gap-3 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
                    <div className="flex-shrink-0 w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center mt-0.5">
                      <span className="text-gray-400 text-sm font-bold">—</span>
                    </div>
                    <span className="text-gray-600 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <div className="bg-gradient-to-r from-accent-light/50 to-primary/5 rounded-xl p-6 border border-accent/20">
            <p className="text-text-secondary leading-relaxed">
              {mvpScope.footer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
