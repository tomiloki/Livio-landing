'use client';

import { useRef, useState } from 'react';
import Container from "@/components/layout/Container";

export default function Problem() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1.2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const timelineItems = [
    {
      time: "07:30",
      severity: "warn",
      label: "El día empieza en WhatsApp",
      description: "Tres grupos distintos, pedidos mezclados con fotos y audios. Hay que leer todo para entender qué llega hoy.",
      chat: {
        sender: "Cliente Norte",
        message: '"Necesito 3 botellones hoy antes de las 11"',
        icon: "💬"
      },
      badge: "Pedidos dispersos",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    },
    {
      time: "08:15",
      severity: "warn",
      label: "Planificación en Excel",
      description: "Copias los pedidos a mano, asignas vehículos, calculas rutas. 40 minutos después falta un pedido. Empiezas de nuevo.",
      badge: "40 min perdidos cada mañana",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
        </svg>
      )
    },
    {
      time: "10:00",
      severity: "bad",
      label: "¿Dónde está el camión?",
      description: "Para saber qué pasa en terreno, hay que llamar. Si no contesta, a esperar.",
      chat: {
        sender: "Tú → Juan",
        message: '"Juan, ¿ya entregaste en Av. Central?"',
        icon: "📞"
      },
      badge: "Sin visibilidad en terreno",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      )
    },
    {
      time: "12:30",
      severity: "bad",
      label: "Reclamo sin prueba",
      description: "El cliente dice que faltó una caja. El conductor jura que entregó todo. No hay foto, no hay firma, no hay prueba. Imposible resolver.",
      badge: "Sin evidencia para respaldarte",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <line x1="1" y1="1" x2="23" y2="23"/>
        </svg>
      )
    },
    {
      time: "15:00",
      severity: "bad",
      label: "Cambio de último minuto",
      description: "Un cliente cancela, otro agrega parada. Hay que reorganizar dos rutas por teléfono, en tiempo real, de memoria.",
      badge: "Caos en cascada",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/>
          <polyline points="12 8 12 12"/>
          <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3"/>
        </svg>
      )
    },
    {
      time: "18:30",
      severity: "chaos",
      label: "Cierre de memoria",
      description: "¿Cuánto se entregó? ¿Qué quedó pendiente? Nadie sabe con certeza. Se junta en un Excel mañana... o no se junta.",
      badge: "El día termina sin control",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
          <line x1="12" y1="8" x2="12" y2="12"/>
          <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5"/>
        </svg>
      )
    }
  ];

  const severityClasses = {
    warn: {
      dot: "bg-[rgba(251,191,36,0.12)] border-[rgba(251,191,36,0.45)] text-[#FCD34D]",
      badge: "border-[rgba(251,191,36,0.3)] text-[#FCD34D] bg-[rgba(251,191,36,0.08)]"
    },
    bad: {
      dot: "bg-[rgba(239,68,68,0.12)] border-[rgba(239,68,68,0.45)] text-[#FCA5A5]",
      badge: "border-[rgba(239,68,68,0.3)] text-[#FCA5A5] bg-[rgba(239,68,68,0.08)]"
    },
    chaos: {
      dot: "bg-[rgba(220,38,38,0.20)] border-[rgba(220,38,38,0.55)] text-[#F87171]",
      badge: "border-[rgba(220,38,38,0.45)] text-[#F87171] bg-[rgba(220,38,38,0.14)]"
    }
  };

  return (
    <section className="relative pt-16 pb-0 bg-primary overflow-hidden">
      {/* Header */}
      <div className="text-center px-12 mb-16">
        <p className="text-accent font-medium mb-4 tracking-[2.5px] uppercase text-[11px]">
          El problema real
        </p>
        <h2 className="text-[clamp(28px,4vw,48px)] font-bold text-white mb-4 leading-[1.1] tracking-[-1.5px] max-w-[640px] mx-auto">
          Así se ve un día sin sistema
        </h2>
        <p className="text-base text-white/45 max-w-[440px] mx-auto leading-[1.65]">
          Si esto te suena familiar, tu operación está lista para LIVIO.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-2 px-12 mb-8">
        <svg className="w-3.5 h-3.5 text-white/30 animate-[nudge_1.8s_ease-in-out_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
        <span className="text-xs text-white/30 font-medium tracking-wide">
          Desliza para ver el día completo
        </span>
      </div>

      {/* Timeline track container */}
      <div className="relative px-12 pb-0">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none" />

        {/* Scrollable track */}
        <div
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          className={`flex gap-0 overflow-x-auto overflow-y-visible pb-6 snap-x snap-mandatory scrollbar-none ${
            isDragging ? 'cursor-grabbing' : 'cursor-grab'
          }`}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {timelineItems.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[280px] snap-start relative pt-5"
            >
              {/* Horizontal connector line */}
              <div
                className={`absolute top-[37px] h-px bg-white/10 ${
                  idx === 0 ? 'left-1/2 right-0' : idx === timelineItems.length - 1 ? 'left-0 right-1/2' : 'left-0 right-0'
                }`}
              />

              {/* Node + time */}
              <div className="flex flex-col items-center gap-2 mb-5 relative z-10">
                <span className="font-bold text-[11px] text-accent tracking-wide">
                  {item.time}
                </span>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 ${severityClasses[item.severity].dot}`}>
                  <span className="w-[15px] h-[15px]">{item.icon}</span>
                </div>
              </div>

              {/* Card body */}
              <div className="mx-2 bg-white/[0.055] border border-white/[0.09] rounded-[14px] p-5 transition-all hover:bg-white/[0.09]">
                <p className="font-semibold text-[14px] text-white mb-2 leading-[1.3]">
                  {item.label}
                </p>

                {item.chat && (
                  <div className="flex items-start gap-2 bg-white/[0.06] border border-white/[0.09] rounded-lg px-2.5 py-2 mb-3.5">
                    <span className="text-xs flex-shrink-0 mt-0.5">{item.chat.icon}</span>
                    <div className="text-[11px] text-white/50 leading-[1.5] italic">
                      <span className="font-semibold not-italic text-white/65 text-[10px] block mb-0.5 uppercase tracking-wide">
                        {item.chat.sender}
                      </span>
                      {item.chat.message}
                    </div>
                  </div>
                )}

                <p className="text-[13px] text-white/45 leading-[1.65] mb-3.5">
                  {item.description}
                </p>

                <span className={`inline-flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border ${severityClasses[item.severity].badge}`}>
                  <svg className="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/>
                    <line x1="12" y1="8" x2="12" y2="12"/>
                    <line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {item.badge}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="flex items-center justify-between gap-8 flex-wrap px-12 py-12 border-t border-white/[0.07] mt-8">
        <p className="text-[clamp(18px,2.5vw,24px)] font-semibold text-white leading-[1.35] tracking-[-0.4px]">
          ¿Te suena familiar?<br />
          <span className="text-accent">Tu operación está lista para LIVIO.</span>
        </p>
        <a
          href="#como-funciona"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-white text-[15px] font-medium rounded-lg px-7 py-3.5 shadow-[0_4px_20px_rgba(47,143,131,0.35)] transition-all hover:bg-[#278A7E] hover:-translate-y-0.5"
        >
          Ver cómo funciona
          <svg className="w-[15px] h-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"/>
            <polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
