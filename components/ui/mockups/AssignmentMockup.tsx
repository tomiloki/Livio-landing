export default function AssignmentMockup() {
  return (
    <div className="bg-background border border-border rounded-xl p-4 w-full max-w-sm">
      <h4 className="text-xs font-semibold text-text-primary mb-4">Asignar entrega</h4>
      <div className="space-y-3">
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Conductor</label>
          <div className="bg-white border border-border rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-xs text-text-primary">Juan Pérez</span>
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Vehículo</label>
          <div className="bg-white border border-border rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-xs text-text-primary">ABC-123</span>
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        
        <div>
          <label className="text-xs text-text-secondary mb-1 block">Zona</label>
          <div className="bg-white border border-border rounded-lg px-3 py-2 flex items-center justify-between">
            <span className="text-xs text-text-primary">Norte</span>
            <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
