'use client';

import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";

const benefits = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    title: "2 meses completamente gratis",
    description: "Sin costo, sin letra chica.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Onboarding personalizado",
    description: "Te acompañamos desde el día uno.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
    title: "Acceso directo al equipo",
    description: "Hablas con los fundadores, no con un bot.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: "Participas en definir qué sigue",
    description: "Tu feedback moldea el producto.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
    title: "Precio especial desde el mes 3",
    description: "Descuento de lanzamiento.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Tus datos siempre son tuyos",
    description: "Exportables en cualquier momento.",
  },
];

export default function Scope() {
  return (
    <section className="py-14 md:py-20 bg-[#F7F8F6]">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-14 max-w-2xl mx-auto">
          <p className="text-accent font-medium mb-3.5 tracking-[2.5px] uppercase text-[11px]">
            Piloto abril 2026
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-4">
            Lo que obtienes como empresa piloto
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed">
            Entrás gratis, sin contrato largo, con acceso directo al equipo.
          </p>
        </FadeIn>

        {/* Benefits grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {benefits.map((benefit, i) => (
            <FadeIn
              key={benefit.title}
              delay={i * 100}
              className="bg-white rounded-xl p-5 border border-border/60 transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
            >
              <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-accent/10 text-accent mb-3">
                <span className="w-[18px] h-[18px]">{benefit.icon}</span>
              </span>
              <h3 className="text-[15px] font-semibold text-text-primary mb-1 leading-snug">
                {benefit.title}
              </h3>
              <p className="text-[13px] text-text-secondary leading-relaxed">
                {benefit.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
