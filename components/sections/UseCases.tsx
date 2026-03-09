import Container from "@/components/layout/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import { homeContent } from "@/content/home";

export default function UseCases() {
  const { useCases } = homeContent;

  const icons = [
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="1">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="2">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
    </svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="3">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" key="4">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
    </svg>
  ];

  return (
    <section id="soluciones" className="py-20 bg-white relative overflow-hidden">
      <Container>
        <SectionHeader
          title={useCases.title}
          subtitle={useCases.subtitle}
        />

        <div className="grid md:grid-cols-2 gap-6 mb-12 relative z-10">
          {useCases.cases.map((useCase, index) => (
            <Card key={useCase.title} className="group">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/20 rounded-xl flex items-center justify-center text-accent group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {icons[index % icons.length]}
                </div>
                <h3 className="text-xl font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {useCase.title}
                </h3>
              </div>
              
              <div className="space-y-3 pl-16">
                <div className="relative pl-4 border-l-2 border-red-200">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 bg-red-400 rounded-full" />
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-red-600">Problema:</span> {useCase.problem}
                  </p>
                </div>
                
                <div className="relative pl-4 border-l-2 border-accent/30">
                  <div className="absolute -left-1.5 top-2 w-3 h-3 bg-accent rounded-full" />
                  <p className="text-sm text-text-secondary">
                    <span className="font-semibold text-accent">Con LIVIO:</span> {useCase.solution}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-accent-light to-primary/10 rounded-2xl p-8 border border-accent/20">
            <p className="text-lg text-text-primary font-medium">
              {useCases.footer}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
