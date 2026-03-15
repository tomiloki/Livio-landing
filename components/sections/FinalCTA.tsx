'use client';

import Container from "@/components/layout/Container";
import ContactForm from "@/components/forms/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import { homeContent } from "@/content/home";

export default function FinalCTA() {
  const { finalCTA } = homeContent;

  return (
    <section id="contacto" className="py-14 md:py-20 bg-gradient-to-br from-primary via-primary-light to-primary relative">
      {/* Decorative elements wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>
      
      <Container>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start max-w-5xl mx-auto relative z-10">
          <FadeIn className="text-white">
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
          </FadeIn>

          <FadeIn delay={200} className="bg-white rounded-2xl shadow-2xl p-5 md:p-8">
            <ContactForm />
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
