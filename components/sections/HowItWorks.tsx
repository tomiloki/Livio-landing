import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export default function HowItWorks() {
  const { howItWorks } = homeContent;

  const icons = [
    // 1. Centraliza
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
    </svg>,
    // 2. Asigna
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
    </svg>,
    // 3. Ejecuta
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>,
    // 4. Registra
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>,
    // 5. Cierra
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="5">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ];

  // Mini UI ilustrativas para cada paso
  const miniUIs = [
    // 1. Lista de pedidos
    <div key="ui-1" className="bg-background border border-border rounded-lg p-2 mb-3">
      <div className="space-y-1">
        <div className="flex items-center gap-1 text-[10px]">
          <div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div>
          <span className="text-text-secondary">Pedido #1024</span>
        </div>
        <div className="flex items-center gap-1 text-[10px]">
          <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
          <span className="text-text-secondary">Pedido #1023</span>
        </div>
        <div className="flex items-center gap-1 text-[10px]">
          <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
          <span className="text-text-secondary">Pedido #1022</span>
        </div>
      </div>
    </div>,
    // 2. Tabla de asignación
    <div key="ui-2" className="bg-background border border-border rounded-lg p-2 mb-3">
      <div className="space-y-1">
        <div className="flex justify-between text-[10px]">
          <span className="text-text-secondary">J. Pérez</span>
          <span className="text-accent">ABC-123</span>
        </div>
        <div className="flex justify-between text-[10px]">
          <span className="text-text-secondary">M. López</span>
          <span className="text-accent">XYZ-789</span>
        </div>
      </div>
    </div>,
    // 3. Mapa con punto
    <div key="ui-3" className="bg-background border border-border rounded-lg p-2 mb-3 relative h-12">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100">
          <path d="M10,50 Q30,30 50,50 T90,50" stroke="currentColor" fill="none" strokeWidth="1" />
        </svg>
      </div>
    </div>,
    // 4. Card de evidencia
    <div key="ui-4" className="bg-background border border-border rounded-lg p-2 mb-3">
      <div className="flex items-center gap-2 mb-1">
        <div className="w-4 h-4 bg-accent/20 rounded flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
          </svg>
        </div>
        <div className="w-4 h-4 bg-green-100 rounded flex items-center justify-center">
          <svg className="w-2.5 h-2.5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
      </div>
      <div className="text-[10px] text-text-secondary">Foto + Firma</div>
    </div>,
    // 5. Reporte con barras
    <div key="ui-5" className="bg-background border border-border rounded-lg p-2 mb-3">
      <div className="space-y-1">
        <div className="flex items-center gap-1">
          <div className="flex-1 bg-gray-200 rounded-full h-1">
            <div className="bg-accent h-1 rounded-full" style={{ width: '92%' }}></div>
          </div>
          <span className="text-[10px] text-accent font-semibold">92%</span>
        </div>
        <div className="text-[10px] text-text-secondary">11/12 completadas</div>
      </div>
    </div>
  ];

  return (
    <section id="como-funciona" className="py-20 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          title={howItWorks.title}
          subtitle={howItWorks.subtitle}
        />

        <div className="grid md:grid-cols-5 gap-6 relative z-10">
          {howItWorks.steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="text-center h-full group">
                {/* Mini UI ilustrativa */}
                <div className="flex justify-center">
                  {miniUIs[index]}
                </div>
                
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center text-white transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {icons[index]}
                </div>
                <div className="text-3xl font-bold gradient-text mb-3">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {step.description}
                </p>
              </Card>
              
              {/* Arrow connector */}
              {index < howItWorks.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-20">
                  <svg className="w-6 h-6 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
