"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    empresa: "",
    email: "",
    telefono: "",
    descripcion: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({
          nombre: "",
          empresa: "",
          email: "",
          telefono: "",
          descripcion: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (status === "success") {
    return (
      <div className="bg-accent-light rounded-xl p-8 text-center" role="status" aria-live="polite">
        <h3 className="text-xl font-semibold text-accent mb-2">¡Solicitud enviada!</h3>
        <p className="text-text-secondary">Respondemos en menos de 24 horas.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" aria-busy={status === "loading"}>
      <p className="text-sm text-accent font-medium bg-accent/10 rounded-lg px-3 py-2 text-center">
        Las primeras empresas entran gratis — 2 meses sin costo, sin contrato largo.
      </p>
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-text-primary mb-1">
            Nombre <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            value={formData.nombre}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="block text-sm font-medium text-text-primary mb-1">
            Empresa <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="empresa"
            name="empresa"
            required
            autoComplete="organization"
            placeholder="Nombre de tu empresa"
            value={formData.empresa}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1">
            Email <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            placeholder="tu@empresa.cl"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-text-primary mb-1">
            Teléfono / WhatsApp
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            autoComplete="tel"
            placeholder="+56 9 0000 0000"
            value={formData.telefono}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
          />
        </div>
      </div>

      <div>
        <label htmlFor="descripcion" className="block text-sm font-medium text-text-primary mb-1">
          Cuéntanos cómo coordinan hoy su operación
        </label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows={4}
          placeholder="Ej: tengo 8 vehículos, repartimos agua embotellada, coordinamos por WhatsApp…"
          value={formData.descripcion}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm" role="alert">
          Hubo un error. Por favor intenta nuevamente.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full px-4 py-3 bg-accent text-white text-base font-medium rounded-lg transition-all hover:bg-[#278A7E] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "loading" ? "Enviando..." : "Quiero ser empresa piloto"}
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/>
          <polyline points="12 5 19 12 12 19"/>
        </svg>
      </button>

      <p className="text-center text-xs text-text-secondary opacity-70">
        Respondemos en menos de 24 horas. Tu información no se comparte con terceros.
      </p>
    </form>
  );
}
