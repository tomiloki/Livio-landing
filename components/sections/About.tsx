'use client';

import { useState } from 'react';
import Container from "@/components/layout/Container";

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const team = [
    {
      initials: "TF",
      name: "Tomás Fuentealba",
      role: "CEO",
      bio: "Ingeniero en logística con experiencia en reparto de agua. Vio de cerca cómo el caos operativo frenaba el crecimiento de pymes con potencial real.",
      isFounder: true,
      avatarColor: "bg-primary"
    },
    {
      initials: "TE",
      name: "Tomás Escalante",
      role: "Aspirante a CTO",
      bio: "Estudiante de ingeniería en informática. Participa activamente en el desarrollo del producto con obsesión por la simplicidad y usabilidad.",
      isFounder: true,
      avatarColor: "bg-primary-light"
    },
    {
      initials: "EC",
      name: "Esteban Cortés",
      role: "Técnico Informático Senior",
      bio: "A cargo del producto y de la arquitectura del mismo. Construye la infraestructura que hace que la operación funcione de manera confiable, todos los días.",
      isFounder: false,
      avatarColor: "bg-[#1A4A3A]"
    },
    {
      initials: "IS",
      name: "Ignacio Saavedra",
      role: "Técnico Logístico Senior",
      bio: "Tiene experiencia en el rubro y conoce los procesos y la competencia. Conecta el producto con la realidad operativa del día a día.",
      isFounder: false,
      avatarColor: "bg-[#2A3F4A]"
    }
  ];

  const cardsPerView = 3;
  const maxIndex = Math.max(0, team.length - cardsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  return (
    <section id="nosotros" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between gap-10 mb-14">
          <div>
            <p className="text-accent font-medium mb-3 tracking-[2.5px] uppercase text-[11px]">
              El equipo
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight">
              Construimos LIVIO<br />porque vimos el problema.
            </h2>
          </div>
          <p className="text-[15px] text-text-secondary leading-relaxed max-w-[380px]">
            Un equipo pequeño con foco en un problema real: la operación logística diaria de pymes que merecen mejores herramientas.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-border shadow-lg flex items-center justify-center transition-all ${
              currentIndex === 0
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-accent hover:bg-accent-light'
            }`}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-white border-2 border-border shadow-lg flex items-center justify-center transition-all ${
              currentIndex === maxIndex
                ? 'opacity-30 cursor-not-allowed'
                : 'hover:border-accent hover:bg-accent-light'
            }`}
          >
            <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`
              }}
            >
              {team.map((member) => (
                <div
                  key={member.name}
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-background border border-border rounded-2xl p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
                    {/* Photo Placeholder - Smaller */}
                    <div className="w-full aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
                      <div className={`w-20 h-20 ${member.avatarColor} rounded-full flex items-center justify-center text-white font-bold text-xl tracking-tight shadow-lg`}>
                        {member.initials}
                      </div>
                    </div>

                    {/* Badge */}
                    {member.isFounder && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-wide uppercase text-accent bg-accent-light px-2.5 py-1 rounded-full self-start mb-2.5">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="currentColor">
                          <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                        </svg>
                        Co-founder
                      </span>
                    )}

                    {/* Name */}
                    <h3 className="text-lg font-bold text-text-primary mb-1 leading-tight">
                      {member.name}
                    </h3>

                    {/* Role */}
                    <p className="text-[13px] font-medium text-accent mb-3">
                      {member.role}
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-border mb-3"></div>

                    {/* Bio - Smaller text */}
                    <p className="text-[13px] text-text-secondary leading-relaxed flex-1">
                      {member.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? 'w-8 bg-accent'
                    : 'w-2 bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
