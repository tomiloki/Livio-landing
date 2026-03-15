'use client';

import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";
import { homeContent } from "@/content/home";

export default function BeforeAfter() {
  const { beforeAfter } = homeContent;

  return (
    <section className="py-8 md:py-12 bg-white">
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
          {/* Sin LIVIO */}
          <FadeIn delay={0}>
            <div className="bg-red-50/50 border-2 border-red-200 rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Sin LIVIO</h3>
              </div>
              <ul className="space-y-3">
                {beforeAfter.without.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-red-500 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Con LIVIO */}
          <FadeIn delay={150}>
            <div className="bg-accent-light/50 border-2 border-accent rounded-2xl p-5 md:p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-accent/20 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-text-primary">Con LIVIO</h3>
              </div>
              <ul className="space-y-3">
                {beforeAfter.with.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-text-secondary">
                    <span className="text-accent mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
