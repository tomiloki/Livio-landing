'use client';

import { useEffect, useRef, useState } from 'react';
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";

const pipelineSteps = [
  {
    label: "Pedido",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    label: "Asignación",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    label: "Ejecución",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    label: "Evidencia",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>
    ),
  },
  {
    label: "Cierre",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <path d="M9 15l2 2 4-4" />
      </svg>
    ),
  },
];

function Pipeline() {
  const ref = useRef<HTMLDivElement>(null);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActivated(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="mt-14 md:mt-16">
      {/* Desktop — horizontal */}
      <div className="hidden md:flex items-center justify-center max-w-3xl mx-auto">
        {pipelineSteps.map((step, i) => (
          <div key={step.label} className="flex items-center">
            {/* Node */}
            <div className="flex flex-col items-center gap-3">
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-700 ease-out ${
                  activated
                    ? 'bg-accent/20 border-accent/50 scale-100 opacity-100'
                    : 'bg-white/5 border-white/10 scale-90 opacity-40'
                } border`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <span
                  className={`w-6 h-6 transition-colors duration-700 ${
                    activated ? 'text-accent' : 'text-white/30'
                  }`}
                  style={{ transitionDelay: `${i * 200}ms` }}
                >
                  {step.icon}
                </span>
              </div>
              <span
                className={`text-[12px] font-medium tracking-wide transition-all duration-700 ${
                  activated ? 'text-white/80 opacity-100' : 'text-white/20 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 200 + 100}ms` }}
              >
                {step.label}
              </span>
            </div>

            {/* Connector line */}
            {i < pipelineSteps.length - 1 && (
              <div className="w-16 h-[2px] mx-1 relative -mt-6">
                <div className="absolute inset-0 bg-white/10 rounded-full" />
                <div
                  className={`absolute inset-y-0 left-0 bg-accent/50 rounded-full transition-all duration-500 ease-out ${
                    activated ? 'w-full' : 'w-0'
                  }`}
                  style={{ transitionDelay: `${i * 200 + 150}ms` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile — vertical */}
      <div className="md:hidden flex flex-col items-center gap-0 max-w-[200px] mx-auto">
        {pipelineSteps.map((step, i) => (
          <div key={step.label} className="flex flex-col items-center">
            {/* Node row */}
            <div className="flex items-center gap-3">
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-700 ease-out ${
                  activated
                    ? 'bg-accent/20 border-accent/50 scale-100 opacity-100'
                    : 'bg-white/5 border-white/10 scale-90 opacity-40'
                } border`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <span
                  className={`w-5 h-5 transition-colors duration-700 ${
                    activated ? 'text-accent' : 'text-white/30'
                  }`}
                  style={{ transitionDelay: `${i * 150}ms` }}
                >
                  {step.icon}
                </span>
              </div>
              <span
                className={`text-[13px] font-medium transition-all duration-700 ${
                  activated ? 'text-white/80 opacity-100' : 'text-white/20 opacity-0'
                }`}
                style={{ transitionDelay: `${i * 150 + 80}ms` }}
              >
                {step.label}
              </span>
            </div>

            {/* Vertical connector */}
            {i < pipelineSteps.length - 1 && (
              <div className="w-[2px] h-5 ml-[-68px] relative">
                <div className="absolute inset-0 bg-white/10 rounded-full" />
                <div
                  className={`absolute inset-x-0 top-0 bg-accent/50 rounded-full transition-all duration-400 ease-out ${
                    activated ? 'h-full' : 'h-0'
                  }`}
                  style={{ transitionDelay: `${i * 150 + 100}ms` }}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Differentiation() {
  return (
    <section className="py-16 md:py-24 bg-primary text-center">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Decorative rule */}
          <FadeIn>
            <div className="w-8 h-0.5 bg-accent rounded-full mx-auto mb-8"></div>
          </FadeIn>

          {/* Main statement */}
          <FadeIn delay={100}>
            <p className="text-[clamp(28px,4.5vw,56px)] font-bold leading-[1.15] tracking-[-1.5px] text-white mb-0">
              No vendemos rutas.<br />
              Ordenamos tu <span className="text-accent">operación completa.</span>
            </p>
          </FadeIn>

          {/* Support text */}
          <FadeIn delay={200}>
            <p className="mt-7 text-[clamp(15px,1.4vw,18px)] text-white/70 tracking-wide leading-relaxed max-w-2xl mx-auto">
              Hoy hay una persona que sabe dónde está cada chofer, qué pedidos van atrasados y cuánto se cobró. LIVIO hace que esa información no dependa de nadie en particular — queda visible, trazable y disponible para todo el equipo.
            </p>
            <p className="mt-4 text-[clamp(15px,1.4vw,18px)] text-white/75 tracking-wide leading-relaxed max-w-2xl mx-auto font-medium">
              Desde que llega el primer pedido hasta que cierras el día con evidencia. Eso es lo que resuelve LIVIO.
            </p>
          </FadeIn>

          {/* Pipeline */}
          <Pipeline />
        </div>
      </Container>
    </section>
  );
}
