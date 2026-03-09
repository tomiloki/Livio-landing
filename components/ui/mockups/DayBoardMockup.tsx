export default function DayBoardMockup() {
  return (
    <div className="bg-background border border-border rounded-xl p-4 w-full max-w-sm">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-xs font-semibold text-text-primary">Pedidos del día</h4>
        <span className="text-xs text-text-secondary">12 total</span>
      </div>
      <div className="space-y-2">
        {/* Pedido pendiente */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-primary">#1024</span>
            <span className="text-xs px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded">Pendiente</span>
          </div>
          <p className="text-xs text-text-secondary">Cliente: Distribuidora Norte</p>
        </div>
        
        {/* Pedido asignado */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-primary">#1023</span>
            <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded">Asignado</span>
          </div>
          <p className="text-xs text-text-secondary">Vehículo: ABC-123</p>
        </div>
        
        {/* Pedido en ruta */}
        <div className="bg-accent-light border border-accent rounded-lg p-3">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-medium text-text-primary">#1022</span>
            <span className="text-xs px-2 py-0.5 bg-accent/20 text-accent rounded">En ruta</span>
          </div>
          <p className="text-xs text-text-secondary">Conductor: Juan Pérez</p>
        </div>
      </div>
    </div>
  );
}
