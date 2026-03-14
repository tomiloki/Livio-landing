import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-28 pb-28 px-5 md:pt-36 md:pb-32 md:px-12 bg-[#16353F]">
      {/* Radial teal glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 70% 20%, rgba(47,143,131,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <Container>
        <div className="relative z-10 grid md:grid-cols-[55fr_45fr] gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <div className="text-center md:text-left">
            {/* Eyebrow pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-medium text-white/80">
                Software de gestión logística para pymes
              </span>
            </div>

            {/* Título */}
            <h1 className="text-[clamp(32px,5.5vw,62px)] font-extrabold leading-[1.07] tracking-[-2px] text-white mb-6">
              Hiciste crecer tu negocio solo,<br className="hidden md:inline" />{" "}
              ahora que <span className="text-accent">no se caiga sin ti.</span>
            </h1>

            {/* Subtítulo */}
            <p className="text-[clamp(15px,1.6vw,18px)] text-white/65 leading-[1.7] max-w-[520px] mx-auto md:mx-0 mb-8">
              Deja de depender de que una persona esté en todo para que la operación no se caiga. LIVIO centraliza tus pedidos, guía a tus choferes y cierra el día con evidencia — desde el primer día.
            </p>

            {/* CTAs */}
            <div className="flex items-center justify-center md:justify-start gap-3 flex-wrap mb-8">
              <Button
                href="#contacto"
                variant="primary"
                className="shadow-[0_4px_24px_rgba(47,143,131,0.45)] hover:shadow-[0_6px_28px_rgba(47,143,131,0.50)] hover:-translate-y-0.5 transition-all"
              >
                Quiero ser empresa piloto
                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </Button>
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white border-[1.5px] border-white/25 rounded-lg px-7 py-3.5 text-[15px] font-medium transition-all hover:bg-white/[0.16] hover:border-white/40"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none"/>
                </svg>
                Ver cómo funciona
              </a>
            </div>

            {/* Pilot offer strip */}
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-6 flex-wrap">
              <div className="flex items-center gap-1.5 text-[13px] text-white/60 font-medium">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                Lanzamiento en abril — reserva tu cupo
              </div>
              <div className="w-px h-3 bg-white/15 hidden sm:block"></div>
              <div className="flex items-center gap-1.5 text-[13px] text-white/50">
                <svg className="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                Piloto gratuito — 2 meses sin costo
              </div>
            </div>
          </div>

          {/* Right — Product Mockup */}
          <div className="relative hidden md:block">
            {/* Main Dashboard Mockup */}
            <div className="relative z-10">
              <HeroDashboardMockup />
            </div>

            {/* Floating card — Evidence */}
            <div className="absolute -bottom-6 -left-8 z-20 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] p-3.5 rotate-[-3deg] border border-gray-100 w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-7 h-7 rounded-lg bg-[#DCFCE7] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
                    <circle cx="12" cy="13" r="4"/>
                  </svg>
                </div>
                <span className="text-[11px] font-semibold text-gray-800">Entrega verificada</span>
              </div>
              <div className="flex items-center gap-1.5">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="#16A34A">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                  <polyline points="22,4 12,14.01 9,11.01" stroke="white" strokeWidth="2.5" fill="none"/>
                </svg>
                <span className="text-[10px] text-green-700 font-medium">Foto + firma + GPS</span>
              </div>
            </div>

            {/* Floating card — Daily Close */}
            <div className="absolute -top-4 -right-4 z-20 bg-white rounded-xl shadow-[0_12px_40px_rgba(0,0,0,0.25)] p-3.5 rotate-[2deg] border border-gray-100 w-[180px]">
              <div className="text-[10px] font-semibold text-gray-500 uppercase tracking-wide mb-2">Cierre del día</div>
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-[20px] font-bold text-gray-900">87.5%</span>
                <span className="text-[10px] text-[#2F8F83] font-semibold">21/24</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-gray-100 overflow-hidden">
                <div className="h-full rounded-full bg-gradient-to-r from-[#2F8F83] to-[#3DADA0]" style={{ width: '87.5%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-35 animate-bounce">
        <svg className="w-4.5 h-4.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>

      {/* Bottom border — subtle separator since next section is same bg color */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/[0.06]"></div>
    </section>
  );
}

/* ─── Hero Dashboard Mockup ─── */
function HeroDashboardMockup() {
  const pedidos = [
    { id: 1047, cliente: "Distribuidora Central", tiempo: "8 min", canal: "WhatsApp", status: "nuevo" },
    { id: 1046, cliente: "Comercial Norte", tiempo: "24 min", canal: "Formulario", status: "asignado" },
    { id: 1045, cliente: "Minimarket Los Olivos", tiempo: "1 h", canal: "Llamada", status: "en-ruta" },
    { id: 1044, cliente: "Bodega Sur", tiempo: "1 h 15 min", canal: "WhatsApp", status: "entregado" },
  ];

  const statusConfig: Record<string, { bg: string; text: string; dot: string; label: string }> = {
    "nuevo":    { bg: "bg-[#FEF3C7]", text: "text-[#92400E]", dot: "bg-[#F59E0B]", label: "Nuevo" },
    "asignado": { bg: "bg-[#D9F0EC]", text: "text-[#2F8F83]", dot: "bg-[#2F8F83]", label: "Asignado" },
    "en-ruta":  { bg: "bg-[#DBEAFE]", text: "text-[#1E40AF]", dot: "bg-[#3B82F6]", label: "En ruta" },
    "entregado":{ bg: "bg-[#DCFCE7]", text: "text-[#166534]", dot: "bg-[#22C55E]", label: "Entregado" },
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_24px_64px_rgba(0,0,0,0.3),0_8px_24px_rgba(0,0,0,0.15)] border border-white/20 overflow-hidden">
      {/* Top bar */}
      <div className="bg-[#F7F8F6] px-5 py-3 border-b border-[#D7DEDC] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <div className="w-2.5 h-2.5 rounded-full bg-[#FF6058]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
          </div>
          <span className="text-[11px] font-semibold text-[#5F6B70] tracking-wide">LIVIO — Tablero del día</span>
        </div>
        <span className="text-[10px] font-medium text-[#2F8F83] bg-[#D9F0EC] px-2 py-0.5 rounded">Lunes 09/03</span>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-px bg-[#D7DEDC]">
        {[
          { label: "Pedidos", value: "24", color: "text-[#162126]" },
          { label: "Asignados", value: "18", color: "text-[#2F8F83]" },
          { label: "En ruta", value: "12", color: "text-[#3B82F6]" },
          { label: "Entregados", value: "8", color: "text-[#22C55E]" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white px-4 py-3 text-center">
            <div className={`text-[18px] font-bold ${stat.color} leading-none`}>{stat.value}</div>
            <div className="text-[9px] text-[#5F6B70] mt-1 uppercase tracking-wider font-medium">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Pedidos list */}
      <div className="p-4 space-y-2">
        {pedidos.map((pedido) => {
          const s = statusConfig[pedido.status];
          return (
            <div key={pedido.id} className="flex items-center gap-3 p-3 rounded-xl bg-[#F7F8F6] border border-[#D7DEDC]">
              <div className={`w-2 h-2 rounded-full ${s.dot} flex-shrink-0`}></div>
              <div className="flex-1 min-w-0">
                <div className="text-[12px] font-semibold text-[#162126] truncate">{pedido.cliente}</div>
                <div className="text-[10px] text-[#5F6B70] mt-0.5">#{pedido.id} · hace {pedido.tiempo} · {pedido.canal}</div>
              </div>
              <span className={`text-[9px] font-semibold px-2 py-0.5 rounded-full ${s.bg} ${s.text} flex-shrink-0`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
