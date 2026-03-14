**05 — LIVIO Restricciones técnicas e implementación web**

*Documento rector de stack, arquitectura, restricciones y QA técnico.*

|**Paquete documental para construcción web en Claude**|
| :-: |

# **1. Objetivo técnico**
- La web de LIVIO es un sitio comercial / marketing site.
- No es el producto principal, ni un dashboard, ni una app compleja, ni una plataforma con backend pesado.
- Debe priorizar rapidez de construcción, claridad del código, SEO técnico, rendimiento, facilidad de iteración y despliegue.
  # **2. Stack obligatorio**
- Next.js
- React
- TypeScript
- Tailwind CSS
- Vercel
- App Router
- Server Components por defecto y Client Components solo cuando haga falta
  # **3. Rutas mínimas v1**
- /
- /como-funciona
- /soluciones
- /nosotros
- /contacto
- /privacidad
- /terminos
  # **4. Restricciones duras**
- No sobreingeniería: nada de autenticación, panel admin, base de datos, CMS complejo, dashboard interno, multi-tenant o i18n si no se pide.
- No confundir la web con el producto.
- No inventar backend innecesario.
- No depender de demasiados servicios externos.
- No dejar contenido hardcodeado por todas partes.
  # **5. Arquitectura sugerida del proyecto**
  /app, /components/ui, /components/layout, /components/sections, /components/forms, /content, /lib y /public como base.
  # **6. Reglas de implementación**
- Pages livianas que compongan secciones.
- Secciones en /components/sections.
- UI reutilizable en /components/ui.
- Contenido separado del JSX siempre que sea razonable.
  # **7. SEO técnico obligatorio**
- Metadata por página.
- Title y description por ruta.
- Open Graph básico.
- Favicon.
- robots y sitemap.
- Estructura semántica correcta.
- Headings ordenados.
- Alt text en imágenes.
- URLs limpias.
  # **8. Performance**
- Usar next/image para imágenes relevantes y next/font para tipografías.
- Evitar bundles y librerías pesadas innecesarias.
- No cargar videos pesados automáticamente.
- Optimizar assets.
  # **9. Accesibilidad mínima**
- Contraste legible, labels correctos, foco visible, botones reales, links reales, encabezados ordenados y navegación razonable por teclado.
  # **10. Formulario de contacto**
- Campos base: nombre, empresa, cargo, email, teléfono/WhatsApp, rubro, cantidad de vehículos y descripción breve.
- Validación cliente y servidor si existe endpoint.
- Endpoint preferido: app/api/contact/route.ts.
- No amarrarlo rígidamente a un proveedor único.
  # **11. Dependencias y motion**
- Permitidas si hacen sentido: clsx, tailwind-merge, Lucide, validación ligera y motion ligera.
- Evitar UI kits pesados, librerías de animación innecesarias, CMS tempranos e integraciones que compliquen el deploy.
  # **12. Despliegue y variables**
- Deploy en Vercel, listo para conectar dominio más adelante.
- Variables claras como NEXT\_PUBLIC\_SITE\_URL, CONTACT\_EMAIL, FORM\_WEBHOOK\_URL y OG\_BASE\_URL.
- No hardcodear URLs de producción ni exponer secretos innecesarios.
  # **13. QA mínimo antes de cerrar**
- QA visual: spacing, responsive, hover/focus, cards limpias, mockups coherentes, legibilidad.
- QA técnico: build correcto, sin errores TypeScript, sin links rotos, metadata base, formulario funcionando.
- QA de contenido: sin nombres antiguos de marca, sin placeholders, sin mezcla CamiON / Rumio / LIVIO.
  # **14. Qué NO debe inventar Kiro**
- Métricas falsas, testimonios falsos, clientes falsos, logos sin autorización, integraciones inexistentes, funcionalidades no definidas o pantallas irreales solo para verse más tech.
  # **15. Veredicto final**
  La implementación correcta para LIVIO no es la más compleja. Es la más clara: una web comercial seria, modular, rápida, editable y sin inventos innecesarios.
Página 1
