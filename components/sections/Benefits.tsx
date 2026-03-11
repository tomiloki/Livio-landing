import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";

export default function Benefits() {
  const benefits = {
    title: "Menos dependencia. Más control.",
    subtitle: "LIVIO convierte el caos operativo en rutina ordenada",
    benefits: [
      { title: "Operación delegable", description: "Deja de depender de una sola persona. Cualquiera puede ver qué hay que hacer." },
      { title: "Visibilidad real", description: "Sabes dónde está cada vehículo y qué está pasando en terreno." },
      { title: "Evidencia auditable", description: "Cada entrega queda respaldada. Sin papeles perdidos ni fotos sueltas." },
      { title: "Cierre diario claro", description: "Al final del día, cierras con certeza. Sin dudas ni pendientes ocultos." },
    ],
  };

  const icons = [
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    </svg>
  ];

  return (
    <section className="py-20 bg-background-alt">
      <Container>
        <SectionHeader
          title={benefits.title}
          subtitle={benefits.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-6">
          {benefits.benefits.map((benefit, index) => (
            <Card key={benefit.title} gradient className="group">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-accent/20 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {icons[index % icons.length]}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-text-primary mb-2 group-hover:text-accent transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
