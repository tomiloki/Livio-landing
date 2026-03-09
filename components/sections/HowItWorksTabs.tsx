'use client';

import { useState } from 'react';
import Container from "@/components/layout/Container";

export default function HowItWorksTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 11l3 3L22 4"/>
          <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
        </svg>
      ),
      number: "01",
      label: "Recibe pedidos",
      title: "Recibe todos los pedidos en un solo lugar",
      description: "Sin importar de dónde vienen — WhatsApp, llamada, formulario — todos los pedidos del día quedan centralizados. Nada se pierde, nada queda en la memoria de nadie.",
      bullets: [
        "Pedidos ingresados desde múltiples canales",
        "Estado visible desde el primer momento",
        "Sin duplicados ni pedidos perdidos",
        "Historial de cada pedido desde el ingreso"
      ]
    },
    {
      id: 1,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="7" height="7"/>
          <rect x="14" y="3" width="7" height="7"/>
          <rect x="14" y="14" width="7" height="7"/>
          <rect x="3" y="14" width="7" height="7"/>
        </svg>
      ),
      number: "02",
      label: "Planifica",
      title: "Planifica y asigna con claridad",
      description: "Asigna pedidos a vehículos y conductores de forma clara y ordenada. Cada conductor sabe exactamente qué lleva, a dónde va y en qué orden.",
      bullets: [
        "Asignación por vehículo y conductor",
        "Organización por zona o sector",
        "Capacidad de carga visible por vehículo",
        "Cambios de último minuto sin desorden"
      ]
    },
    {
      id: 2,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      number: "03",
      label: "Ejecuta",
      title: "Ejecuta con visibilidad en tiempo real",
      description: "Los conductores ven su ruta del día y ejecutan. Tú ves desde el panel qué está pasando en terreno sin tener que llamar a nadie.",
      bullets: [
        "Seguimiento de vehículos en tiempo real",
        "Estado de cada entrega visible al instante",
        "Conductores con ruta clara en la app móvil",
        "Alertas de retraso o incidencia"
      ]
    },
    {
      id: 3,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
          <circle cx="12" cy="13" r="4"/>
        </svg>
      ),
      number: "04",
      label: "Registra evidencia",
      title: "Cada entrega queda respaldada",
      description: "Foto, firma digital y ubicación GPS por cada entrega. Si un cliente reclama, tienes el respaldo completo. Sin papeles perdidos, sin WhatsApps que desaparecen.",
      bullets: [
        "Foto de entrega desde la app del conductor",
        "Firma digital del receptor",
        "Coordenadas GPS registradas automáticamente",
        "Todo vinculado al pedido y al conductor"
      ]
    },
    {
      id: 4,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14,2 14,8 20,8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      ),
      number: "05",
      label: "Cierra el día",
      title: "Cierra el día con control total",
      description: "Al final del día, tienes un reporte completo de lo entregado, lo pendiente y lo que necesita seguimiento. Sin llamadas de cierre, sin planillas manuales.",
      bullets: [
        "Resumen automático de entregas del día",
        "Pendientes con detalle de cada caso",
        "Exportable para administración o cliente",
        "Historial acumulado de cada conductor"
      ]
    }
  ];

  const nextTab = () => {
    setActiveTab((prev) => (prev + 1) % tabs.length);
  };

  const prevTab = () => {
    setActiveTab((prev) => (prev - 1 + tabs.length) % tabs.length);
  };

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-accent font-semibold mb-4 tracking-[2px] uppercase text-[11px]">
            Cómo funciona
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-bold text-text-primary mb-4 leading-[1.15] tracking-tight max-w-3xl mx-auto">
            Un flujo simple que ordena<br />tu operación de principio a fin
          </h2>
          <p className="text-[17px] text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Cinco pasos que convierten el caos de cada día en una rutina clara, visible y cerrable.
          </p>
        </div>

        {/* Tab Navigation - Slightly larger but not too much */}
        <div className="bg-white border-2 border-border rounded-[16px] p-2 flex gap-1.5 mb-12 overflow-x-auto shadow-sm">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-0 flex items-center justify-center gap-2.5 px-4 py-3.5 rounded-[12px] text-[14px] font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-transparent text-text-secondary hover:bg-background hover:text-text-primary'
              }`}
            >
              <span className="w-[16px] h-[16px] flex-shrink-0">{tab.icon}</span>
              <span className={`text-[11px] font-bold ${activeTab === tab.id ? 'opacity-70' : 'opacity-50'}`}>
                {tab.number}
              </span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panels with Navigation */}
        <div className="relative px-16">
          {/* Previous Button - Inside container */}
          <button
            onClick={prevTab}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-border shadow-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all hover:scale-110 z-10"
            aria-label="Paso anterior"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"/>
            </svg>
          </button>

          {/* Next Button - Inside container */}
          <button
            onClick={nextTab}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border-2 border-border shadow-lg flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all hover:scale-110 z-10"
            aria-label="Siguiente paso"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </button>

          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`grid md:grid-cols-2 gap-16 items-center transition-all duration-300 ${
                activeTab === tab.id ? 'block animate-fadePanel' : 'hidden'
              }`}
            >
              {/* Left: Content */}
              <div>
                <div className="text-[76px] font-extrabold text-accent-light leading-none mb-3.5 tracking-[-3px]">
                  {tab.number}
                </div>
                <h3 className="text-[31px] font-bold text-text-primary mb-4.5 leading-tight tracking-tight">
                  {tab.title}
                </h3>
                <p className="text-[16.5px] text-text-secondary mb-7 leading-relaxed">
                  {tab.description}
                </p>
                <ul className="space-y-2.5">
                  {tab.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-[14.5px] text-text-secondary">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 flex-shrink-0"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right: Mockup */}
              <div>
                {tab.id === 0 && <MockupRecibePedidos />}
                {tab.id === 1 && <MockupPlanifica />}
                {tab.id === 2 && <MockupEjecuta />}
                {tab.id === 3 && <MockupEvidencia />}
                {tab.id === 4 && <MockupCierre />}
              </div>
            </div>
          ))}
        </div>

        {/* Dot Indicators */}
        <div className="flex items-center justify-center gap-2.5 mt-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`transition-all duration-200 rounded-full ${
                activeTab === tab.id
                  ? 'w-10 h-3 bg-accent'
                  : 'w-3 h-3 bg-border hover:bg-accent/40'
              }`}
              aria-label={`Ir a paso ${tab.number}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

// Mockup Components
function MockupShell({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white border border-border rounded-2xl p-6 shadow-[0_20px_60px_rgba(22,53,63,0.10),0_4px_16px_rgba(22,53,63,0.06)] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-accent/70"></div>
      <div className="flex items-center gap-1.5 mb-5">
        <div className="w-2 h-2 rounded-full bg-[#FF6058]"></div>
        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
        <div className="w-2 h-2 rounded-full bg-[#27C93F]"></div>
        <span className="text-[11px] font-medium text-text-secondary ml-2 tracking-wide">{title}</span>
      </div>
      {children}
    </div>
  );
}

function MockupRecibePedidos() {
  const pedidos = [
    { id: 1047, cliente: "Distribuidora Central", tiempo: "8 min", canal: "WhatsApp", status: "nuevo", color: "bg-[#F59E0B]" },
    { id: 1046, cliente: "Comercial Norte", tiempo: "24 min", canal: "Formulario", status: "asignado", color: "bg-accent" },
    { id: 1045, cliente: "Minimarket Los Olivos", tiempo: "1 h", canal: "Llamada", status: "entregado", color: "bg-[#22C55E]" },
    { id: 1044, cliente: "Bodega Sur", tiempo: "1 h 15 min", canal: "WhatsApp", status: "nuevo", color: "bg-[#F59E0B]" }
  ];

  const statusLabels: Record<string, { bg: string; text: string; label: string }> = {
    nuevo: { bg: "bg-[#FEF3C7]", text: "text-[#92400E]", label: "Nuevo" },
    asignado: { bg: "bg-accent-light", text: "text-accent", label: "Asignado" },
    entregado: { bg: "bg-[#DCFCE7]", text: "text-[#166534]", label: "Entregado" }
  };

  return (
    <MockupShell title="Panel de pedidos — hoy">
      <div className="flex justify-between items-center mb-3.5">
        <span className="text-xs font-medium text-text-secondary">12 pedidos recibidos</span>
        <span className="text-[11px] px-2.5 py-0.5 rounded bg-accent-light text-accent font-medium">Lunes 09/03</span>
      </div>
      <div className="space-y-2">
        {pedidos.map((pedido) => (
          <div key={pedido.id} className="flex items-center gap-3 p-3 rounded-[10px] bg-background border border-border hover:border-accent transition-all">
            <div className={`w-2 h-2 rounded-full ${pedido.color} flex-shrink-0`}></div>
            <div className="flex-1">
              <div className="text-xs font-medium text-text-primary">{pedido.cliente} — Pedido #{pedido.id}</div>
              <div className="text-[11px] text-text-secondary mt-0.5">Ingresado hace {pedido.tiempo} · {pedido.canal}</div>
            </div>
            <span className={`text-[10px] font-medium px-2 py-0.5 rounded ${statusLabels[pedido.status].bg} ${statusLabels[pedido.status].text}`}>
              {statusLabels[pedido.status].label}
            </span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function MockupPlanifica() {
  const conductores = [
    { nombre: "J. Pérez", avatar: "JP", vehiculo: "ABC-123", zona: "Norte", paradas: 8 },
    { nombre: "M. López", avatar: "ML", vehiculo: "XYZ-789", zona: "Sur", paradas: 6 },
    { nombre: "C. Rojas", avatar: "CR", vehiculo: "DEF-456", zona: "Centro", paradas: 10 }
  ];

  return (
    <MockupShell title="Planificación del día">
      <table className="w-full">
        <thead>
          <tr>
            <th className="text-[10px] font-medium text-text-secondary text-left pb-2.5 px-2.5 uppercase tracking-wide">Conductor</th>
            <th className="text-[10px] font-medium text-text-secondary text-left pb-2.5 px-2.5 uppercase tracking-wide">Vehículo</th>
            <th className="text-[10px] font-medium text-text-secondary text-left pb-2.5 px-2.5 uppercase tracking-wide">Zona</th>
            <th className="text-[10px] font-medium text-text-secondary text-left pb-2.5 px-2.5 uppercase tracking-wide">Paradas</th>
          </tr>
        </thead>
        <tbody>
          {conductores.map((conductor, idx) => (
            <tr key={idx}>
              <td className="text-xs py-2.5 px-2.5 border-t border-border">
                <div className="flex items-center gap-1.5">
                  <div className="w-[22px] h-[22px] rounded-full bg-accent-light flex items-center justify-center text-[10px] font-semibold text-accent">
                    {conductor.avatar}
                  </div>
                  {conductor.nombre}
                </div>
              </td>
              <td className="text-[11px] text-text-secondary py-2.5 px-2.5 border-t border-border">{conductor.vehiculo}</td>
              <td className="py-2.5 px-2.5 border-t border-border">
                <span className="inline-block px-2 py-0.5 rounded bg-background-alt text-[11px] text-text-secondary">{conductor.zona}</span>
              </td>
              <td className="text-[13px] font-semibold text-accent py-2.5 px-2.5 border-t border-border">{conductor.paradas}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-4 p-3 bg-accent-light rounded-lg flex justify-between items-center">
        <span className="text-xs text-accent font-medium">Total: 24 paradas asignadas</span>
        <span className="text-xs text-accent">3 vehículos activos</span>
      </div>
    </MockupShell>
  );
}

function MockupEjecuta() {
  const vehiculos = [
    { conductor: "JP", nombre: "J. Pérez · ABC-123", progreso: 62, completadas: 5, total: 8 },
    { conductor: "ML", nombre: "M. López · XYZ-789", progreso: 33, completadas: 2, total: 6 },
    { conductor: "CR", nombre: "C. Rojas · DEF-456", progreso: 80, completadas: 8, total: 10 }
  ];

  return (
    <MockupShell title="Seguimiento en tiempo real">
      <div className="h-[140px] rounded-[10px] bg-[#EEF4F0] relative overflow-hidden mb-4 border border-border">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(22,53,63,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(22,53,63,0.06) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        <div className="absolute top-1/2 left-[20%] right-[15%] h-[3px] bg-accent rounded -translate-y-1/2"></div>
        <div className="absolute w-2 h-2 rounded-full bg-[#22C55E] top-[40%] left-[22%]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-[#22C55E] top-[55%] left-[38%]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-[#F59E0B] top-[42%] left-[72%]"></div>
        <div className="absolute w-2 h-2 rounded-full bg-[#E5E7EB] top-[50%] left-[85%]"></div>
        <div className="absolute top-1/2 left-[55%] -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-accent border-[3px] border-white shadow-[0_0_0_4px_rgba(47,143,131,0.25)] flex items-center justify-center">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
            <polygon points="12,2 2,22 12,17 22,22"/>
          </svg>
        </div>
      </div>
      <div className="space-y-1.5">
        {vehiculos.map((veh, idx) => (
          <div key={idx} className="flex items-center gap-2.5 p-2 rounded-lg bg-background border border-border">
            <div className="w-7 h-7 rounded-full bg-accent-light flex items-center justify-center text-[11px] font-semibold text-accent">
              {veh.conductor}
            </div>
            <span className="text-xs font-medium text-text-primary flex-1">{veh.nombre}</span>
            <div className="w-20 h-1 rounded bg-border overflow-hidden">
              <div className="h-full rounded bg-accent" style={{ width: `${veh.progreso}%` }}></div>
            </div>
            <span className="text-[11px] font-semibold text-accent w-8 text-right">{veh.completadas}/{veh.total}</span>
          </div>
        ))}
      </div>
    </MockupShell>
  );
}

function MockupEvidencia() {
  return (
    <MockupShell title="Evidencia — Pedido #1046">
      <div className="py-2.5 border-b border-border mb-3.5">
        <span className="text-xs text-text-secondary">Comercial Norte · Entregado a las 10:47 am</span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 mb-3">
        <div className="p-3.5 rounded-[10px] bg-background border border-border">
          <div className="text-[10px] font-medium text-text-secondary uppercase tracking-wide mb-2">📷 Foto entrega</div>
          <div className="h-14 rounded-lg bg-accent-light flex items-center justify-center text-accent text-xl">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
              <circle cx="12" cy="13" r="4"/>
            </svg>
          </div>
        </div>
        <div className="p-3.5 rounded-[10px] bg-background border border-border">
          <div className="text-[10px] font-medium text-text-secondary uppercase tracking-wide mb-2">✍️ Firma digital</div>
          <div className="h-14 rounded-lg bg-[#F0F9FF] border-[1.5px] border-dashed border-accent flex items-center justify-center">
            <svg className="opacity-40" width="80" height="30" viewBox="0 0 80 30">
              <path d="M5 20 Q20 5 30 18 Q40 30 50 10 Q60 -5 75 15" stroke="#2F8F83" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div className="p-2.5 bg-background rounded-lg border border-border mb-2.5">
        <div className="text-[10px] text-text-secondary uppercase tracking-wide mb-1">📍 Ubicación GPS</div>
        <div className="text-xs text-text-primary font-medium">-33.4489, -70.6693 · Precisión ±8m</div>
      </div>
      <div className="flex items-center gap-2 p-2.5 bg-[#DCFCE7] border border-[#BBF7D0] rounded-lg">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="#16A34A">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
          <polyline points="22,4 12,14.01 9,11.01" stroke="white" strokeWidth="2" fill="none"/>
        </svg>
        <span className="text-xs text-[#166534] font-medium">Entrega verificada con respaldo completo</span>
      </div>
    </MockupShell>
  );
}

function MockupCierre() {
  return (
    <MockupShell title="Cierre del día — Lunes 09/03">
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="p-3.5 rounded-[10px] text-center bg-background border border-border">
          <span className="block text-[22px] font-bold text-[#16A34A] leading-none">21</span>
          <span className="block text-[10px] text-text-secondary mt-1">Entregados</span>
        </div>
        <div className="p-3.5 rounded-[10px] text-center bg-background border border-border">
          <span className="block text-[22px] font-bold text-[#D97706] leading-none">2</span>
          <span className="block text-[10px] text-text-secondary mt-1">Pendientes</span>
        </div>
        <div className="p-3.5 rounded-[10px] text-center bg-background border border-border">
          <span className="block text-[22px] font-bold text-text-primary leading-none">1</span>
          <span className="block text-[10px] text-text-secondary mt-1">Incidencia</span>
        </div>
      </div>
      <div className="mb-3.5">
        <div className="flex justify-between text-xs text-text-secondary mb-1.5">
          <span>Tasa de completado</span>
          <strong className="text-accent font-semibold">87.5%</strong>
        </div>
        <div className="w-full h-2 rounded bg-border overflow-hidden">
          <div className="h-full rounded bg-gradient-to-r from-accent to-[#3DADA0]" style={{ width: '87.5%' }}></div>
        </div>
      </div>
      <div className="p-3 bg-background rounded-lg border border-border">
        <div className="text-[11px] font-medium text-text-secondary uppercase tracking-wide mb-2">Pendientes para mañana</div>
        <div className="flex items-center gap-2 text-xs text-text-primary">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
          Bodega Sur — Pedido #1044 · Reprogramar
        </div>
        <div className="flex items-center gap-2 text-xs text-text-primary mt-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]"></span>
          Minimarket Oriente — Pedido #1039 · Cliente ausente
        </div>
      </div>
    </MockupShell>
  );
}
