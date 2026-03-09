export default function CloseSummaryMockup() {
  return (
    <div className="bg-background border border-border rounded-xl p-4 w-full max-w-sm">
      <h4 className="text-xs font-semibold text-text-primary mb-4">Resumen del día</h4>
      
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-text-secondary">Completado</span>
          <span className="text-sm font-semibold text-accent">92%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div className="bg-accent h-2 rounded-full" style={{ width: '92%' }}></div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-xs text-text-secondary">Entregas completadas</span>
          <span className="text-xs font-semibold text-text-primary">11 / 12</span>
        </div>
        
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-xs text-text-secondary">Con evidencia</span>
          <span className="text-xs font-semibold text-text-primary">11 / 11</span>
        </div>
        
        <div className="flex items-center justify-between py-2 border-b border-border">
          <span className="text-xs text-text-secondary">Pendientes</span>
          <span className="text-xs font-semibold text-yellow-600">1</span>
        </div>
        
        <div className="flex items-center justify-between py-2">
          <span className="text-xs text-text-secondary">Incidencias</span>
          <span className="text-xs font-semibold text-text-primary">0</span>
        </div>
      </div>
      
      <div className="mt-4 pt-3 border-t border-border">
        <div className="flex items-center gap-2 text-xs text-accent">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Listo para cerrar el día</span>
        </div>
      </div>
    </div>
  );
}
