'use client';

import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section id="problema" className="relative bg-[#F7F8F6] py-14 md:py-20 px-5 md:px-12 overflow-hidden">
      <div className="relative z-10 max-w-[1100px] w-full mx-auto">
        {/* Header — centered */}
        <FadeIn className="text-center mb-16 md:mb-20">
          <span className="text-[11px] font-semibold tracking-[3px] uppercase text-[#2F8F83] mb-5 block">
            El problema real
          </span>
          <h2 className="font-sans text-[clamp(28px,4vw,48px)] font-bold leading-[1.15] tracking-[-1px] text-[#162126] mb-6">
            Tu operación funciona porque tú estás en todo.<br />
            El problema es que <em className="not-italic text-[#162126]/40 font-normal">eso no escala.</em>
          </h2>
          <p className="text-[clamp(14px,1.3vw,17px)] text-[#5F6B70] leading-relaxed max-w-3xl mx-auto">
            Los pedidos llegan por WhatsApp, por llamada, por chat. El dueño los anota, los asigna de memoria, manda a los choferes por teléfono y al final del día intenta reconstruir qué se entregó, qué se cobró y qué quedó pendiente. Si esa persona falta, la operación se cae.
          </p>
        </FadeIn>

        {/* Two columns — chaos + pain statements */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mb-14 md:mb-18">
          {/* Left — Chaos Stack */}
          <FadeIn delay={100} className="relative w-full max-w-[460px] mx-auto md:mx-0 h-[400px] md:h-[440px]">
            {/* Shadow base — desk surface stain */}
            <div className="absolute inset-2 rounded-3xl bg-gradient-to-br from-black/[0.04] to-black/[0.02]" />

            {/* WhatsApp conversation — main anchor piece */}
            <div
              className="absolute top-6 left-0 w-[260px] bg-white rounded-2xl p-3 rotate-[-3deg] z-30 border border-gray-200/70"
              style={{ boxShadow: '0 6px 28px rgba(0,0,0,0.14), 0 16px 56px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <div className="flex items-center gap-2 mb-2.5 pb-2 border-b border-gray-100">
                <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </div>
                <span className="text-[10px] font-semibold text-gray-700 truncate">Pedidos del día</span>
                <span className="ml-auto text-[8px] text-white font-bold bg-red-500 w-5 h-5 rounded-full flex items-center justify-center animate-pulse flex-shrink-0">7</span>
              </div>
              <div className="space-y-1">
                <div className="bg-[#DCF8C6] rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[200px]">
                  <p className="text-[10px] text-gray-800 leading-snug">Jefe necesito 50 bidones para mañana temprano</p>
                  <span className="text-[7px] text-gray-500 float-right mt-0.5">8:12</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[175px]">
                  <p className="text-[10px] text-gray-800 leading-snug">ya va el pedido??? estoy esperando</p>
                  <span className="text-[7px] text-gray-500 float-right mt-0.5">9:47</span>
                </div>
                <div className="bg-[#DCF8C6] rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[155px]">
                  <p className="text-[10px] text-gray-800 leading-snug">no me contestan el teléfono</p>
                  <span className="text-[7px] text-gray-500 float-right mt-0.5">10:03</span>
                </div>
                <div className="bg-[#FED7AA] rounded-lg rounded-tl-none px-2.5 py-1.5 max-w-[185px] border border-orange-300/40">
                  <p className="text-[10px] text-orange-900 leading-snug font-medium">oigan necesito respuesta URGENTE</p>
                  <span className="text-[7px] text-orange-600 float-right mt-0.5">10:15</span>
                </div>
              </div>
            </div>

            {/* Push notification — floating above everything */}
            <div
              className="absolute -top-3 right-2 w-[225px] bg-white rounded-2xl p-2.5 z-50 border border-gray-200/80 animate-[float_4s_ease-in-out_infinite]"
              style={{ boxShadow: '0 10px 40px rgba(0,0,0,0.18), 0 2px 8px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#25D366] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold text-gray-800">Bodega Sur</p>
                  <p className="text-[9px] text-gray-500 truncate">dónde está mi pedido???</p>
                </div>
                <span className="text-[7px] text-gray-400 flex-shrink-0">ahora</span>
              </div>
            </div>

            {/* Excel spreadsheet — overlapping, rotated the other way */}
            <div
              className="absolute bottom-8 -right-1 md:right-0 w-[260px] bg-white rounded-xl overflow-hidden rotate-[4deg] z-20 border border-gray-200/70"
              style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.14), 0 20px 60px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <div className="bg-[#217346] px-3 py-1.5 flex items-center gap-1.5">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14,2 14,8 20,8" fill="none" stroke="white" strokeWidth="1.5"/></svg>
                <span className="text-[8px] text-white/90 font-medium truncate">Rutas_marzo_FINAL_v3_CORREGIDO.xlsx</span>
              </div>
              <table className="w-full text-[8px]">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="px-2 py-1 text-left text-gray-400 font-medium border-r border-b border-gray-200">Ruta</th>
                    <th className="px-2 py-1 text-left text-gray-400 font-medium border-r border-b border-gray-200">Chofer</th>
                    <th className="px-2 py-1 text-left text-gray-400 font-medium border-r border-b border-gray-200">Pedidos</th>
                    <th className="px-2 py-1 text-left text-gray-400 font-medium border-b border-gray-200">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">Norte</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">Pérez</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">8</td>
                    <td className="px-2 py-1 border-b border-gray-100"><span className="bg-yellow-100 text-yellow-700 px-1 rounded text-[7px] font-medium">???</span></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">Sur</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-red-400 italic">sin asignar</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">12</td>
                    <td className="px-2 py-1 border-b border-gray-100"><span className="bg-red-100 text-red-600 px-1 rounded text-[7px] font-medium">atrasado</span></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">Centro</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">López</td>
                    <td className="px-2 py-1 border-r border-b border-gray-100 text-gray-600">6</td>
                    <td className="px-2 py-1 border-b border-gray-100"><span className="bg-yellow-100 text-yellow-700 px-1 rounded text-[7px] font-medium">pendiente</span></td>
                  </tr>
                  <tr>
                    <td className="px-2 py-1 border-r border-gray-100 text-gray-600">Oriente</td>
                    <td className="px-2 py-1 border-r border-gray-100 text-red-400 italic">sin asignar</td>
                    <td className="px-2 py-1 border-r border-gray-100 text-gray-600">5</td>
                    <td className="px-2 py-1"><span className="bg-red-100 text-red-600 px-1 rounded text-[7px] font-medium">sin ruta</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Missed calls — wedged between WhatsApp and Excel */}
            <div
              className="absolute top-[44%] right-4 md:right-8 w-[190px] bg-white rounded-xl p-2.5 rotate-[-3deg] z-40 border border-red-200/70 animate-[floatSlow_5s_ease-in-out_infinite_0.5s]"
              style={{ boxShadow: '0 6px_24px rgba(220,38,38,0.12), 0 12px 40px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0 border border-red-200">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#DC2626" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91"/>
                    <line x1="1" y1="1" x2="23" y2="23"/>
                  </svg>
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold text-gray-800">3 llamadas perdidas</p>
                  <p className="text-[8px] text-red-500 font-medium">Bodega Sur · hace 20 min</p>
                </div>
              </div>
            </div>

            {/* Post-it yellow — tucked under WhatsApp, peeking out */}
            <div
              className="absolute bottom-0 left-0 w-[115px] bg-[#FEF08A] p-2.5 rotate-[8deg] z-10 border-b-[3px] border-yellow-400/50 animate-[floatSlow_6s_ease-in-out_infinite_1s]"
              style={{ boxShadow: '0 3px 16px rgba(0,0,0,0.12), 0 1px 4px rgba(0,0,0,0.06)' }}
            >
              <p className="text-[10px] text-yellow-900 leading-snug" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Cobrar a Minimarket!! No olvidar
              </p>
            </div>

            {/* Post-it red — overlapping Excel corner */}
            <div
              className="absolute bottom-20 left-[52%] w-[95px] bg-[#FECACA] p-2 rotate-[-10deg] z-15 border-b-[3px] border-red-300/50 animate-[floatSlow_7s_ease-in-out_infinite_2s]"
              style={{ boxShadow: '0 3px 12px rgba(0,0,0,0.10), 0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <p className="text-[9px] text-red-900 leading-snug" style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic' }}>
                Llamar a López URGENTE
              </p>
            </div>

            {/* Tiny voice memo bubble — extra layer of chaos */}
            <div
              className="absolute top-[58%] left-[8%] w-[100px] bg-white rounded-xl p-2 rotate-[5deg] z-12 border border-gray-200/60 animate-[floatSlow_5.5s_ease-in-out_infinite_0.8s]"
              style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}
            >
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
                    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  </svg>
                </div>
                <div>
                  <div className="flex gap-[2px]">
                    {[3,5,8,4,7,9,3,6,8,5,3,7].map((h, j) => (
                      <div key={j} className="w-[2px] bg-blue-300 rounded-full" style={{ height: `${h}px` }} />
                    ))}
                  </div>
                  <p className="text-[7px] text-gray-400 mt-0.5">0:12</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right — Pain Statements with icons */}
          <FadeIn delay={200} className="flex flex-col gap-8 md:gap-10">
            {/* Pain 1 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#2F8F83]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#2F8F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <div>
                <p className="text-[clamp(17px,1.8vw,22px)] font-bold text-[#162126] leading-[1.35] tracking-[-0.3px]">
                  WhatsApp, llamadas, Excel. Todo llega, nada se cruza.
                </p>
                <p className="text-[13px] text-[#5F6B70] mt-2 leading-relaxed">
                  Pedidos por un lado, llamadas por otro, un Excel que nadie más entiende. Todo disperso.
                </p>
              </div>
            </div>

            {/* Pain 2 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#2F8F83]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#2F8F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="8.5" cy="7" r="4"/>
                  <line x1="18" y1="8" x2="23" y2="13"/>
                  <line x1="23" y1="8" x2="18" y2="13"/>
                </svg>
              </div>
              <div>
                <p className="text-[clamp(17px,1.8vw,22px)] font-bold text-[#162126] leading-[1.35] tracking-[-0.3px]">
                  Si falta la persona clave, la operación se para.
                </p>
                <p className="text-[13px] text-[#5F6B70] mt-2 leading-relaxed">
                  El dueño, el despachador, el que sabe. Si no está, nadie sabe qué hacer.
                </p>
              </div>
            </div>

            {/* Pain 3 */}
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-xl bg-[#2F8F83]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-5 h-5 text-[#2F8F83]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="2" width="16" height="20" rx="2"/>
                  <line x1="8" y1="6" x2="16" y2="6"/>
                  <line x1="8" y1="10" x2="16" y2="10"/>
                  <line x1="8" y1="14" x2="12" y2="14"/>
                </svg>
              </div>
              <div>
                <p className="text-[clamp(17px,1.8vw,22px)] font-bold text-[#162126] leading-[1.35] tracking-[-0.3px]">
                  El día termina y hay que armar el rompecabezas para cerrar.
                </p>
                <p className="text-[13px] text-[#5F6B70] mt-2 leading-relaxed">
                  Fotos en un chat, pagos en otro, pedidos en el Excel. Cerrar el día toma más que el reparto.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Transition + CTA — centered */}
        <FadeIn delay={300} className="text-center">
          <p className="text-[clamp(16px,1.5vw,20px)] text-[#162126]/50 italic mb-6 font-light">
            Esto tiene solución.
          </p>
          <a
            href="#como-funciona"
            className="inline-flex items-center gap-2 bg-[#2F8F83] text-white font-medium text-[15px] rounded-lg px-7 py-3.5 transition-all hover:bg-[#278A7E] hover:shadow-lg hover:-translate-y-0.5"
          >
            Ver cómo lo resolvemos
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
              <line x1="5" y1="12" x2="19" y2="12"/>
              <polyline points="12 5 19 12 12 19"/>
            </svg>
          </a>
        </FadeIn>
      </div>

      {/* Float animation keyframes */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0px) rotate(var(--tw-rotate, 0deg)); }
          50% { transform: translateY(-4px) rotate(var(--tw-rotate, 0deg)); }
        }
      `}</style>
    </section>
  );
}
