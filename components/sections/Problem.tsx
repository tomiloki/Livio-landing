'use client';

import React, { useRef, useState } from 'react';

type Severity = 'warn' | 'bad' | 'chaos';

const illusBg: Record<Severity, React.CSSProperties> = {
  warn: { background: 'radial-gradient(ellipse at 50% 80%, rgba(251,191,36,0.10) 0%, transparent 70%), #111e23' },
  bad: { background: 'radial-gradient(ellipse at 50% 80%, rgba(239,68,68,0.10) 0%, transparent 70%), #111e23' },
  chaos: { background: 'radial-gradient(ellipse at 50% 80%, rgba(220,38,38,0.15) 0%, transparent 70%), #111e23' },
};

const dotClass: Record<Severity, string> = {
  warn: 'border-[rgba(251,191,36,0.5)] text-[#FCD34D]',
  bad: 'border-[rgba(239,68,68,0.5)] text-[#FCA5A5]',
  chaos: 'border-[rgba(220,38,38,0.6)] text-[#F87171]',
};

const badgeClass: Record<Severity, string> = {
  warn: 'border-[rgba(251,191,36,0.3)] text-[#FCD34D] bg-[rgba(251,191,36,0.08)]',
  bad: 'border-[rgba(239,68,68,0.3)] text-[#FCA5A5] bg-[rgba(239,68,68,0.08)]',
  chaos: 'border-[rgba(220,38,38,0.45)] text-[#F87171] bg-[rgba(220,38,38,0.14)]',
};

/* ─── Dot icons per card ─── */
function DotIconChat() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  );
}
function DotIconFile() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/>
    </svg>
  );
}
function DotIconEye() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/>
    </svg>
  );
}

function DotIconTriangle() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
    </svg>
  );
}
function DotIconRefresh() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/>
    </svg>
  );
}
function DotIconOctagon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}

/* ─── Badge icons ─── */
function BadgeIconWarn() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[9px] h-[9px]">
      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
    </svg>
  );
}
function BadgeIconChaos() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" className="w-[9px] h-[9px]">
      <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="2.5"/>
    </svg>
  );
}

/* ═══════════════════════════════════════
   ILLUSTRATION COMPONENTS
   ═══════════════════════════════════════ */

function IllusMessages() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Burbuja principal izq */}
      <rect x="10" y="30" width="64" height="32" rx="8" fill="#25D366" opacity="0.9"/>
      <polygon points="18,62 10,72 28,62" fill="#25D366" opacity="0.9"/>
      <rect x="16" y="38" width="40" height="4" rx="2" fill="rgba(255,255,255,0.7)"/>
      <rect x="16" y="46" width="28" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
      {/* Burbuja top center — animada */}
      <g className="animate-[float-y_2.4s_ease-in-out_infinite]" style={{animationDelay: '0.3s'}}>
        <rect x="58" y="8" width="72" height="28" rx="7" fill="#DCF8C6" opacity="0.95"/>
        <polygon points="66,36 58,44 76,36" fill="#DCF8C6" opacity="0.95"/>
        <rect x="64" y="15" width="44" height="3" rx="1.5" fill="rgba(0,0,0,0.25)"/>
        <rect x="64" y="22" width="30" height="3" rx="1.5" fill="rgba(0,0,0,0.18)"/>
      </g>
      {/* Burbuja roja reclamo — shake */}
      <g className="animate-[shake_0.5s_ease-in-out_infinite]">
        <rect x="104" y="48" width="66" height="36" rx="8" fill="#FF6B6B" opacity="0.85"/>
        <polygon points="112,84 104,94 122,84" fill="#FF6B6B" opacity="0.85"/>
        <rect x="110" y="57" width="44" height="4" rx="2" fill="rgba(255,255,255,0.7)"/>
        <rect x="110" y="65" width="32" height="4" rx="2" fill="rgba(255,255,255,0.5)"/>
        <text x="146" y="62" fontSize="11" textAnchor="middle" fill="rgba(255,255,255,0.9)">😤</text>
      </g>
      {/* Badge de notificaciones */}
      <circle cx="22" cy="14" r="10" fill="#FF3B30" className="animate-[blink_1.4s_ease-in-out_infinite]"/>
      <text x="22" y="19" fontSize="11" textAnchor="middle" fontWeight="700" fill="white">7</text>
      {/* Líneas de conexión caóticas */}
      <line x1="74" y1="46" x2="104" y2="60" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3"/>
      <line x1="42" y1="62" x2="58" y2="36" stroke="rgba(255,255,255,0.12)" strokeWidth="1" strokeDasharray="3 3"/>
    </svg>
  );
}

function IllusExcel() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ventana Excel */}
      <rect x="20" y="8" width="140" height="84" rx="6" fill="#1a2a1e" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="20" y="8" width="140" height="18" rx="6" fill="#1D6F42"/>
      <rect x="20" y="20" width="140" height="6" fill="#1D6F42"/>
      <circle cx="30" cy="17" r="3" fill="#FF5F57"/>
      <circle cx="40" cy="17" r="3" fill="#FFBD2E"/>
      <circle cx="50" cy="17" r="3" fill="#28C840"/>
      <text x="90" y="20" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Planilla_rutas_HOY_v3_FINAL.xlsx</text>
      {/* Cabecera columnas */}
      <rect x="24" y="28" width="132" height="10" fill="rgba(29,111,66,0.4)"/>
      <text x="50" y="36" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Cliente</text>
      <text x="98" y="36" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Conductor</text>
      <text x="136" y="36" fontSize="6" fill="rgba(255,255,255,0.5)" fontFamily="sans-serif">Estado</text>
      <line x1="84" y1="28" x2="84" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      <line x1="122" y1="28" x2="122" y2="90" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* Fila 1 */}
      <rect x="24" y="38" width="132" height="10" fill="rgba(255,255,255,0.02)"/>
      <text x="50" y="46" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Com. Norte</text>
      <text x="98" y="46" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Juan P.</text>
      <rect x="123" y="39" width="32" height="8" rx="2" fill="rgba(251,191,36,0.2)"/>
      <text x="139" y="46" fontSize="6" textAnchor="middle" fill="#FCD34D" fontFamily="sans-serif">Pendiente</text>
      {/* Fila 2 — sin asignar, roja, blink */}
      <rect x="24" y="48" width="132" height="10" fill="rgba(239,68,68,0.12)" className="animate-[blink_1.4s_ease-in-out_infinite]"/>
      <text x="50" y="56" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Bod. Sur</text>
      <text x="98" y="56" fontSize="6" fill="#F87171" fontWeight="bold" fontFamily="sans-serif">???</text>
      <rect x="123" y="49" width="32" height="8" rx="2" fill="rgba(239,68,68,0.3)"/>
      <text x="139" y="56" fontSize="6" textAnchor="middle" fill="#FCA5A5" fontFamily="sans-serif">Sin asignar</text>
      {/* Fila 3 */}
      <rect x="24" y="58" width="132" height="10" fill="rgba(255,255,255,0.02)"/>
      <text x="50" y="66" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Rest. El Sol</text>
      <text x="98" y="66" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Mario R.</text>
      <rect x="123" y="59" width="32" height="8" rx="2" fill="rgba(34,197,94,0.2)"/>
      <text x="139" y="66" fontSize="6" textAnchor="middle" fill="#86EFAC" fontFamily="sans-serif">Entregado</text>
      {/* Fila 4 — warn */}
      <rect x="24" y="68" width="132" height="10" fill="rgba(251,191,36,0.08)"/>
      <text x="50" y="76" fontSize="6" fill="rgba(255,255,255,0.55)" fontFamily="sans-serif">Dist. Central</text>
      <text x="98" y="76" fontSize="6" fill="#FCD34D" fontFamily="sans-serif">Pedro??</text>
      <rect x="123" y="69" width="32" height="8" rx="2" fill="rgba(251,191,36,0.2)"/>
      <text x="139" y="76" fontSize="6" textAnchor="middle" fill="#FCD34D" fontFamily="sans-serif">Sin confirmar</text>
      {/* Nota de error */}
      <rect x="24" y="80" width="132" height="10" fill="rgba(239,68,68,0.08)"/>
      <text x="90" y="88" fontSize="6" textAnchor="middle" fill="#F87171" fontFamily="sans-serif">⚠ Falta confirmar 3 pedidos — actualizar ya</text>
    </svg>
  );
}

function IllusMap() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Fondo mapa abstracto */}
      <rect x="14" y="10" width="152" height="80" rx="8" fill="#0f1e24" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
      {/* Calles del mapa */}
      <line x1="14" y1="50" x2="166" y2="50" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
      <line x1="90" y1="10" x2="90" y2="90" stroke="rgba(255,255,255,0.08)" strokeWidth="6"/>
      <line x1="14" y1="30" x2="80" y2="30" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
      <line x1="110" y1="70" x2="166" y2="70" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
      <line x1="40" y1="10" x2="40" y2="50" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
      <line x1="140" y1="50" x2="140" y2="90" stroke="rgba(255,255,255,0.05)" strokeWidth="3"/>
      {/* Pin destino A */}
      <circle cx="42" cy="30" r="6" fill="rgba(47,143,131,0.3)" stroke="#2F8F83" strokeWidth="1.5"/>
      <text x="42" y="34" fontSize="7" textAnchor="middle" fill="#2F8F83" fontWeight="bold" fontFamily="sans-serif">A</text>
      {/* Pin destino B */}
      <circle cx="138" cy="70" r="6" fill="rgba(47,143,131,0.3)" stroke="#2F8F83" strokeWidth="1.5"/>
      <text x="138" y="74" fontSize="7" textAnchor="middle" fill="#2F8F83" fontWeight="bold" fontFamily="sans-serif">B</text>
      {/* Camión con signo de pregunta — flotando */}
      <g className="animate-[float-y_2.4s_ease-in-out_infinite]">
        <rect x="72" y="38" width="28" height="16" rx="3" fill="#FCD34D" opacity="0.9"/>
        <rect x="84" y="34" width="16" height="8" rx="2" fill="#FCD34D" opacity="0.8"/>
        <circle cx="78" cy="55" r="4" fill="#1a2a32" stroke="#FCD34D" strokeWidth="1.5"/>
        <circle cx="94" cy="55" r="4" fill="#1a2a32" stroke="#FCD34D" strokeWidth="1.5"/>
        <circle cx="86" cy="28" r="9" fill="rgba(239,68,68,0.9)"/>
        <text x="86" y="33" fontSize="11" textAnchor="middle" fill="white" fontWeight="800" fontFamily="sans-serif">?</text>
      </g>
      {/* Ruta punteada interrumpida */}
      <path d="M42 30 Q60 50 72 50" stroke="#2F8F83" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5" className="animate-[dash-move_1.2s_linear_infinite]"/>
      <path d="M100 50 Q120 60 138 70" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5" strokeDasharray="4 3"/>
      {/* Señal de llamada perdida */}
      <g style={{transform: 'translate(118px, 14px)'}}>
        <rect width="38" height="20" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.4)" strokeWidth="1"/>
        <text x="19" y="14" fontSize="9" textAnchor="middle" fill="#FCA5A5" fontFamily="sans-serif">📞 ×3</text>
      </g>
    </svg>
  );
}

function IllusClaim() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Lado izquierdo: cliente reclamando */}
      <rect x="10" y="15" width="70" height="70" rx="8" fill="#1a1a2e" stroke="rgba(239,68,68,0.3)" strokeWidth="1"/>
      <circle cx="45" cy="36" r="12" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
      <text x="45" y="40" fontSize="13" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">👤</text>
      <rect x="14" y="54" width="62" height="22" rx="5" fill="rgba(239,68,68,0.2)" stroke="rgba(239,68,68,0.35)" strokeWidth="1"/>
      <text x="45" y="62" fontSize="6.5" textAnchor="middle" fill="#FCA5A5" fontFamily="sans-serif">{'"'}Faltó una caja.</text>
      <text x="45" y="71" fontSize="6.5" textAnchor="middle" fill="#FCA5A5" fontFamily="sans-serif">¿Dónde está?{'"'} 😤</text>
      {/* VS */}
      <circle cx="90" cy="50" r="10" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
      <text x="90" y="54" fontSize="8" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontWeight="700" fontFamily="sans-serif">VS</text>
      {/* Lado derecho: conductor sin prueba */}
      <rect x="100" y="15" width="70" height="70" rx="8" fill="#1a1a2e" stroke="rgba(251,191,36,0.3)" strokeWidth="1"/>
      <circle cx="135" cy="36" r="12" fill="rgba(251,191,36,0.15)" stroke="rgba(251,191,36,0.3)" strokeWidth="1.5"/>
      <text x="135" y="40" fontSize="13" textAnchor="middle" fill="rgba(255,255,255,0.7)" fontFamily="sans-serif">🧑</text>
      <rect x="104" y="54" width="62" height="22" rx="5" fill="rgba(251,191,36,0.1)" stroke="rgba(251,191,36,0.25)" strokeWidth="1"/>
      {/* Foto rota */}
      <rect x="112" y="58" width="14" height="12" rx="2" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      <line x1="112" y1="58" x2="126" y2="70" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
      <line x1="126" y1="58" x2="112" y2="70" stroke="rgba(239,68,68,0.5)" strokeWidth="1.5"/>
      <text x="148" y="66" fontSize="6.5" textAnchor="middle" fill="#FCD34D" fontFamily="sans-serif">{'"'}Yo entregué</text>
      <text x="148" y="74" fontSize="6.5" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontFamily="sans-serif">sin foto 🤷{'"'}</text>
    </svg>
  );
}

function IllusRoute() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Ruta original — tachada */}
      <path d="M24 50 Q60 25 90 50 Q120 75 156 50" stroke="rgba(239,68,68,0.25)" strokeWidth="2" strokeDasharray="5 3"/>
      <line x1="20" y1="25" x2="160" y2="75" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
      {/* Nodos de la ruta original */}
      <circle cx="24" cy="50" r="7" fill="#1a2a32" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
      <text x="24" y="54" fontSize="7" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontFamily="sans-serif">A</text>
      <circle cx="90" cy="50" r="7" fill="#1a2a32" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
      <text x="90" y="54" fontSize="7" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontFamily="sans-serif">B</text>
      <circle cx="156" cy="50" r="7" fill="#1a2a32" stroke="rgba(239,68,68,0.4)" strokeWidth="1.5"/>
      <text x="156" y="54" fontSize="7" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontFamily="sans-serif">C</text>
      {/* Nueva ruta — caótica */}
      <path d="M24 50 Q40 15 90 30" stroke="#FCD34D" strokeWidth="1.5" strokeDasharray="4 2" className="animate-[dash-move_1.2s_linear_infinite]"/>
      <path d="M90 30 Q130 15 156 50" stroke="#FCD34D" strokeWidth="1.5" strokeDasharray="4 2" className="animate-[dash-move_1.2s_linear_infinite]" style={{animationDelay: '0.3s'}}/>
      {/* Nuevo nodo D inesperado — shake */}
      <g className="animate-[shake_0.5s_ease-in-out_infinite]">
        <circle cx="90" cy="30" r="9" fill="rgba(239,68,68,0.85)"/>
        <text x="90" y="34" fontSize="8" textAnchor="middle" fill="white" fontWeight="800" fontFamily="sans-serif">+D</text>
      </g>
      {/* Flecha caótica extra */}
      <path d="M60 70 Q75 45 90 30" stroke="rgba(255,255,255,0.15)" strokeWidth="1" strokeDasharray="3 3"/>
      <circle cx="60" cy="70" r="5" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
      <text x="60" y="74" fontSize="6" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontFamily="sans-serif">?</text>
      {/* Label "cambio" */}
      <rect x="104" y="14" width="58" height="18" rx="4" fill="rgba(239,68,68,0.15)" stroke="rgba(239,68,68,0.35)" strokeWidth="1"/>
      <text x="133" y="27" fontSize="7.5" textAnchor="middle" fill="#FCA5A5" fontFamily="sans-serif">⚡ Cambio urgente</text>
    </svg>
  );
}

function IllusReport() {
  return (
    <svg className="w-[180px] h-[100px]" viewBox="0 0 180 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Documento / reporte vacío */}
      <rect x="20" y="10" width="64" height="80" rx="6" fill="#0f1e24" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      <rect x="20" y="10" width="64" height="14" rx="6" fill="rgba(220,38,38,0.3)"/>
      <rect x="20" y="18" width="64" height="6" fill="rgba(220,38,38,0.3)"/>
      <text x="52" y="21" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontFamily="sans-serif">Reporte del día</text>
      <text x="52" y="38" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">Entregados: ???</text>
      <text x="52" y="50" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">Pendientes: ???</text>
      <text x="52" y="62" fontSize="7" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontFamily="sans-serif">Evidencia: 0</text>
      <text x="52" y="74" fontSize="7" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontFamily="sans-serif">actualizar mañana</text>
      {/* Cabeza humana con signos de pregunta flotando */}
      <g style={{transform: 'translate(104px, 10px)'}}>
        <circle cx="36" cy="38" r="22" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5"/>
        <circle cx="29" cy="35" r="2.5" fill="rgba(255,255,255,0.3)"/>
        <circle cx="43" cy="35" r="2.5" fill="rgba(255,255,255,0.3)"/>
        <path d="M28 44 Q36 40 44 44" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <text x="14" y="18" fontSize="12" fill="#F87171" fontWeight="700" fontFamily="sans-serif" className="animate-[float-y_2.4s_ease-in-out_infinite]">?</text>
        <text x="50" y="14" fontSize="10" fill="#FCD34D" fontWeight="700" fontFamily="sans-serif" className="animate-[float-y_2.4s_ease-in-out_infinite]" style={{animationDelay: '0.4s'}}>?</text>
        <text x="62" y="30" fontSize="9" fill="#FCA5A5" fontFamily="sans-serif" className="animate-[float-y_2.4s_ease-in-out_infinite]" style={{animationDelay: '0.8s'}}>?</text>
        <rect x="20" y="60" width="32" height="26" rx="4" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════
   CARD DATA
   ═══════════════════════════════════════ */

interface CardData {
  time: string;
  severity: Severity;
  dotIcon: React.ReactNode;
  illustration: React.ReactNode;
  label: string;
  desc: string;
  badgeIcon: React.ReactNode;
  badgeText: string;
}

const cards: CardData[] = [
  {
    time: '07:30',
    severity: 'warn',
    dotIcon: <DotIconChat />,
    illustration: <IllusMessages />,
    label: 'Mensajes por todas partes',
    desc: 'WhatsApp, llamadas, correos. Tres grupos distintos, todo mezclado. Cada mañana desde cero.',
    badgeIcon: <BadgeIconWarn />,
    badgeText: 'Pedidos dispersos',
  },
  {
    time: '08:15',
    severity: 'warn',
    dotIcon: <DotIconFile />,
    illustration: <IllusExcel />,
    label: 'Planificación manual',
    desc: 'Copias pedidos a mano, asignas vehículos. 40 minutos después, falta uno. Empiezas de nuevo.',
    badgeIcon: <BadgeIconWarn />,
    badgeText: '40 min perdidos cada mañana',
  },
  {
    time: '10:00',
    severity: 'bad',
    dotIcon: <DotIconEye />,
    illustration: <IllusMap />,
    label: '¿Dónde está el camión?',
    desc: 'Para saber qué pasa en terreno, hay que llamar. Si no contesta, a esperar y rezar.',
    badgeIcon: <BadgeIconWarn />,
    badgeText: 'Cero visibilidad en terreno',
  },
  {
    time: '12:30',
    severity: 'bad',
    dotIcon: <DotIconTriangle />,
    illustration: <IllusClaim />,
    label: 'Reclamo sin prueba',
    desc: 'El cliente reclama, el conductor jura que entregó. Sin foto, sin firma. Imposible resolver.',
    badgeIcon: <BadgeIconWarn />,
    badgeText: 'Sin evidencia para respaldarte',
  },
  {
    time: '15:00',
    severity: 'bad',
    dotIcon: <DotIconRefresh />,
    illustration: <IllusRoute />,
    label: 'Cambio de último minuto',
    desc: 'Un cliente cancela, otro agrega una parada. Dos rutas por reorganizar, por teléfono, de memoria.',
    badgeIcon: <BadgeIconWarn />,
    badgeText: 'Caos en cascada',
  },
  {
    time: '18:30',
    severity: 'chaos',
    dotIcon: <DotIconOctagon />,
    illustration: <IllusReport />,
    label: 'Cierre de memoria',
    desc: '¿Cuánto se entregó? ¿Qué quedó pendiente? Nadie sabe con certeza. El día termina sin control.',
    badgeIcon: <BadgeIconChaos />,
    badgeText: 'El día termina sin control',
  },
];

/* ═══════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════ */

export default function Problem() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragState = useRef({ startX: 0, scrollLeft: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    setIsDragging(true);
    dragState.current.startX = e.pageX - trackRef.current.offsetLeft;
    dragState.current.scrollLeft = trackRef.current.scrollLeft;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    trackRef.current.scrollLeft = dragState.current.scrollLeft - (x - dragState.current.startX) * 1.2;
  };

  return (
    <section className="bg-primary pt-[88px] overflow-hidden">
      {/* Header */}
      <div className="text-center px-12 mb-14">
        <span className="text-[11px] font-medium tracking-[2.5px] uppercase text-accent mb-4 block">
          El problema real
        </span>
        <h2 className="font-sans text-[clamp(26px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-1.2px] text-white mb-3">
          Así se ve un día sin sistema
        </h2>
        <p className="text-base text-white/[0.45] max-w-[440px] mx-auto leading-[1.65]">
          Si esto te suena familiar, tu operación está lista para LIVIO.
        </p>
      </div>

      {/* Scroll hint */}
      <div className="flex items-center justify-center gap-2 px-12 mb-7 text-xs text-white/[0.28] font-medium">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5 animate-[nudge_1.8s_ease-in-out_infinite]">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
        Desliza para ver el día completo
      </div>

      {/* Track with fade edges */}
      <div className="relative px-12">
        {/* Left fade */}
        <div className="absolute top-0 bottom-[60px] left-0 w-20 z-[2] pointer-events-none bg-gradient-to-r from-primary to-transparent" />
        {/* Right fade */}
        <div className="absolute top-0 bottom-[60px] right-0 w-20 z-[2] pointer-events-none bg-gradient-to-l from-primary to-transparent" />

        <div
          ref={trackRef}
          className={`flex gap-0 overflow-x-auto scroll-snap-x-mandatory pb-7 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} scrollbar-none`}
          style={{ WebkitOverflowScrolling: 'touch', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' } as React.CSSProperties}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
          onMouseMove={handleMouseMove}
        >
          {cards.map((card, i) => (
            <div
              key={card.time}
              className="flex-shrink-0 w-[264px] snap-start relative pt-5 group"
            >
              {/* Connector line */}
              <div
                className="absolute top-[37px] h-px bg-white/[0.08]"
                style={{
                  left: i === 0 ? '50%' : 0,
                  right: i === cards.length - 1 ? '50%' : 0,
                }}
              />

              {/* Node + time */}
              <div className="flex flex-col items-center gap-2 mb-5 relative z-[1]">
                <span className="font-sans text-[11px] font-bold tracking-[1px] text-accent">
                  {card.time}
                </span>
                <div className={`w-9 h-9 rounded-full flex items-center justify-center border-2 flex-shrink-0 bg-primary ${dotClass[card.severity]}`}>
                  {card.dotIcon}
                </div>
              </div>

              {/* Card body */}
              <div className="bg-white/[0.055] border border-white/[0.08] rounded-2xl overflow-hidden mx-2 transition-[background,border-color] duration-200 group-hover:bg-white/[0.09] group-hover:border-white/[0.13]">
                {/* Illustration zone */}
                <div
                  className="w-full h-[120px] relative overflow-hidden flex items-center justify-center border-b border-white/[0.07]"
                  style={illusBg[card.severity]}
                >
                  {card.illustration}
                </div>

                {/* Text */}
                <div className="px-[18px] pt-4 pb-[18px]">
                  <p className="font-sans text-sm font-semibold text-white mb-1.5 leading-[1.3]">
                    {card.label}
                  </p>
                  <p className="text-xs leading-[1.65] text-white/[0.42] mb-3">
                    {card.desc}
                  </p>
                  <span className={`inline-flex items-center gap-[5px] text-[11px] font-medium px-[9px] py-[3px] rounded-[20px] border ${badgeClass[card.severity]}`}>
                    {card.badgeIcon}
                    {card.badgeText}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Closing CTA */}
      <div className="px-12 py-11 pb-[72px] flex items-center justify-between gap-8 flex-wrap border-t border-white/[0.07] mt-7">
        <p className="font-sans text-[clamp(18px,2.5vw,24px)] font-semibold text-white leading-[1.35] tracking-[-0.4px]">
          ¿Te suena familiar?<br/>
          <em className="not-italic text-accent">Tu operación está lista para LIVIO.</em>
        </p>
        <a
          href="/como-funciona"
          className="flex-shrink-0 inline-flex items-center gap-2 bg-accent text-white font-sans text-[15px] font-medium border-none rounded-[10px] px-7 py-[13px] shadow-[0_4px_20px_rgba(47,143,131,0.35)] transition-[background,transform] duration-150 hover:bg-[#278A7E] hover:translate-y-[-1px]"
        >
          Ver cómo funciona
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px]">
            <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
          </svg>
        </a>
      </div>
    </section>
  );
}
