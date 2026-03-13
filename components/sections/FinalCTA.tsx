import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import { homeContent } from "@/content/home";

export default function FinalCTA() {
  const { finalCTA } = homeContent;

  return (
    <section id="contacto" className="section-end-light py-14 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative">
      {/* Decorative elements wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto relative z-10">
          <div className="text-white">
            <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-6">
              Solicitar cupo en el piloto
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {finalCTA.title}
            </h2>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {finalCTA.subtitle}
            </p>

            {/* Pilot benefits */}
            <div className="mb-8">
              <p className="text-sm text-white/60 font-medium mb-3 uppercase tracking-wider">
                Las empresas que entren al piloto reciben:
              </p>
              <ul className="space-y-2.5">
                {finalCTA.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2.5 text-white/90">
                    <svg className="w-4 h-4 text-accent flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-3">
              <p className="text-sm text-white/50">
                ¿Tienes preguntas?
              </p>
              <a 
                href={finalCTA.cta.secondary.href}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-white/[0.07] border border-white/15 text-white text-base font-medium transition-all hover:bg-white/[0.12] hover:border-white/25 w-fit"
              >
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.554 4.122 1.528 5.857L0 24l6.335-1.505A11.946 11.946 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.866 9.866 0 0 1-5.031-1.378l-.36-.214-3.742.889.934-3.617-.235-.372A9.866 9.866 0 0 1 2.106 12C2.106 6.533 6.533 2.106 12 2.106S21.894 6.533 21.894 12 17.467 21.894 12 21.894z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl p-5 md:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
