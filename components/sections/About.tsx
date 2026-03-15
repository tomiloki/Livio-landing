'use client';

import Image from "next/image";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import { homeContent } from "@/content/home";

export default function About() {
  const { about } = homeContent;

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-white">
      <Container>
        {/* Header */}
        <FadeIn className="text-center mb-10 md:mb-16">
          <p className="text-accent font-medium mb-3 tracking-[2.5px] uppercase text-[11px]">
            El equipo
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary leading-tight tracking-tight mb-4">
            {about.title}
          </h2>
          <p className="text-[15px] text-text-secondary leading-relaxed max-w-[520px] mx-auto">
            {about.subtitle}
          </p>
        </FadeIn>

        {/* Grid */}
        <div className="flex md:grid md:grid-cols-4 gap-5 max-w-5xl mx-auto overflow-x-auto snap-x snap-mandatory scrollbar-none pt-2 pb-4 md:pb-0 -mx-6 px-6 md:mx-auto md:px-0">
          {about.team.map((member) => (
            <div
              key={member.name}
              className="group relative bg-[#F7F8F6] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex-shrink-0 w-[75vw] sm:w-[60vw] md:w-auto snap-center will-change-transform"
            >
              {/* Photo / Avatar zone */}
              <div className="aspect-[3/4] relative overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                {member.photo ? (
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <span className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center text-white font-bold text-2xl tracking-tight shadow-md">
                      {member.initials}
                    </span>
                  </div>
                )}

                {/* Gradient overlay at bottom for text readability */}
                {member.photo && (
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                )}

                {/* Founder badge */}
                {member.isFounder && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[9px] font-semibold tracking-wider uppercase text-white bg-accent/90 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"/>
                    </svg>
                    {member.badge ?? 'Co-founder'}
                  </span>
                )}

                {/* Name overlay on photo */}
                {member.photo && (
                  <div className="absolute bottom-3 left-3 right-3">
                    <h3 className="text-base font-bold text-white leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-[12px] font-medium text-white/80">
                      {member.role}
                    </p>
                  </div>
                )}
              </div>

              {/* Text zone — only for members without photo */}
              {!member.photo && (
                <div className="px-4 pt-3 pb-4">
                  <h3 className="text-base font-bold text-text-primary leading-tight mb-0.5">
                    {member.name}
                  </h3>
                  <p className="text-[12px] font-medium text-accent mb-2">
                    {member.role}
                  </p>
                </div>
              )}

              {/* Bio — always visible below */}
              <div className={`px-4 pb-4 ${member.photo ? 'pt-3' : 'pt-0'}`}>
                {member.photo && (
                  <>
                    <h3 className="text-base font-bold text-text-primary leading-tight mb-0.5 md:hidden">
                      {member.name}
                    </h3>
                    <p className="text-[12px] font-medium text-accent mb-2 md:hidden">
                      {member.role}
                    </p>
                  </>
                )}
                <p className="text-[12px] text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
