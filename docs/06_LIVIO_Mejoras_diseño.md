# 06 — LIVIO Mejoras de diseño visual

*Documento de especificaciones de diseño para Claude. Complementa el paquete documental existente (01–05). Aplica sobre la implementación actual para elevar el impacto visual sin romper la estrategia ni el stack.*

---

## 0. Principio rector de estas mejoras

La web actual tiene estructura y copy correctos. Lo que falta es **profundidad visual, contraste y anclaje al producto**. Estas mejoras apuntan a tres objetivos:

1. Que el usuario *sienta* el problema antes de leer la solución.
2. Que pueda *ver* el producto, no solo leerlo.
3. Que la web tenga **contraste lumínico** — bloques claros y oscuros alternados — para que no todo se vea igual de plano.

Estas especificaciones NO modifican la estrategia, el copy base ni la arquitectura técnica definida en los documentos 01–05. Son adiciones y mejoras de capa visual y compositiva.

---

## 1. Sistema de fondos y contraste general

### Problema actual
Toda la web usa fondos blancos y gris muy claro (#F7F8F6, #EEF2F1). No hay contraste real entre secciones. Todo se lee igual de plano.

### Regla de alternancia de fondos

Aplicar este patrón de fondo por sección a lo largo del Home:

| Sección | Fondo recomendado | Lógica |
|---|---|---|
| Navbar | Blanco puro con borde inferior sutil | Neutro, no compite |
| Hero | Fondo claro (#F7F8F6) con forma geométrica sutil en esquina | Base limpia con un poco de textura |
| Problema | **Fondo oscuro: #16353F (primario profundo)** | Contraste máximo, el problema debe sentirse distinto |
| Cómo funciona | Blanco puro (#FFFFFF) | Limpio después del bloque oscuro |
| Beneficios | Superficie alterna (#EEF2F1) | Respiro neutro |
| Casos de uso | Blanco puro | Claridad para que el usuario se identifique |
| Alcance MVP | Fondo claro (#F7F8F6) | Neutro funcional |
| Diferenciación | **Fondo oscuro: #16353F** | Segundo bloque de contraste, refuerza separación vs competencia |
| Nosotros / confianza | Blanco puro | Cercanía, abre hacia el cierre |
| CTA final + formulario | **Fondo oscuro: #16353F o gradiente #16353F → #1F4E5F** | Cierre con peso visual |
| Footer | #162126 (grafito profundo) | Separación clara del cierre |

### Regla para texto en fondos oscuros
- Títulos: blanco puro (#FFFFFF)
- Cuerpo: blanco con opacidad 80% (`rgba(255,255,255,0.80)`)
- Eyebrows/labels: acento teal (#2F8F83)
- Bordes de cards: `rgba(255,255,255,0.10)`

---

## 2. Sección Problema — rediseño completo

### Problema actual
Cards todas iguales con ícono rojo, título y texto. No transmiten urgencia. El ícono de alerta repetido 6 veces pierde fuerza. Se lee, pero no se *siente*.

### Propuesta de rediseño

**Fondo:** #16353F (azul petróleo profundo). Texto blanco. Esto ya genera un cambio de registro: el usuario entra a un territorio visualmente distinto.

**Composición del header de sección:**
```
[eyebrow en teal] — El problema real
[H2 blanco, grande] Si hoy operas con WhatsApp, Excel y memoria,
                    no tienes sistema: tienes dependencia.
[subtítulo blanco/80%] La operación logística de una pyme no debería depender
                        de una sola persona ni vivir en el caos diario.
```

**Cards de problema — nuevo tratamiento visual:**

Reemplazar el grid uniforme de 6 cards por una composición de **2 filas de 3** con tratamiento visual diferenciado:

- Fondo de card: `rgba(255,255,255,0.06)` — sutil, casi invisible sobre el oscuro
- Borde: `rgba(255,255,255,0.12)`
- Sin el mismo ícono de alerta para todas. En su lugar, usar **íconos lineales distintos** de Lucide para cada dolor (ejemplos: `MessageCircle` para pedidos dispersos, `LayoutGrid` para planificación manual, `Eye` con slash para sin visibilidad, `Camera` con slash para evidencia perdida, `ClipboardX` para cierre caótico, `UserX` para dependencia total).
- El número o ícono en **teal (#2F8F83)**, no en rojo. El rojo comunica error de sistema; el teal comunica problema operativo que tiene solución. (El rojo puede reservarse para la *versión antes* en el bloque de comparación.)
- Título en blanco, cuerpo en blanco/75%.

**Variante adicional recomendada — mini bloque "antes vs después":**

Debajo del grid de problemas, agregar un bloque de comparación horizontal de dos columnas:

```
[columna izquierda — fondo rojo muy suave / borde rojo sutil]
❌ Sin LIVIO
• Pedidos por WhatsApp y llamadas
• Planificación en Excel o de memoria
• No sabes dónde está cada vehículo
• Evidencia en fotos sueltas de WhatsApp
• Al cierre del día: nadie sabe qué pasó

[columna derecha — fondo teal muy suave / borde teal]
✓ Con LIVIO
• Todos los pedidos en un solo lugar
• Asignación clara por vehículo y conductor
• Seguimiento en tiempo real
• Evidencia con foto, firma y ubicación
• Reporte completo al cerrar el día
```

Este bloque vive entre la sección de Problema y la de Cómo funciona. Es el puente narrativo.

---

## 3. Sección Cómo funciona — rediseño y anclaje visual

### Problema actual
5 cards de pasos con ícono, número, título y texto. Correcto estructuralmente, pero no hay ninguna visual del producto. El usuario no puede imaginar qué *ve* cuando usa LIVIO. Las cards están flotando sin contexto.

### Propuesta de rediseño

**Fondo:** Blanco puro. Viene después del bloque oscuro de Problema, el contraste ya está dado.

**Opción A — Layout de pasos con mockup lateral (recomendada para desktop):**

En lugar de 5 cards horizontales del mismo peso, usar un layout de **lista de pasos a la izquierda + mockup ilustrativo a la derecha**, tipo stepper vertical:

```
[izquierda — 45% del ancho]          [derecha — 55% del ancho]
01 Recibe pedidos          →          [mockup: lista de pedidos del día,
   Centraliza todos los               cards con estado: pendiente, asignado,
   pedidos en un solo lugar           en ruta — fondo claro, borde suave]

02 Planifica               →          [mockup: pantalla de asignación,
   Asigna entregas a vehículos        dropdown de conductor, vehículo,
   y conductores de forma clara       zona — limpio y ordenado]

...etc.
```

Cada paso al hacer hover o al estar activo (en versión interactiva con useState) resalta el mockup correspondiente. En versión estática, mostrar el mockup del paso central (Ejecuta o Registra evidencia) como imagen principal fija.

**Opción B — Cards con screenshot/mockup dentro (más simple para Kiro):**

Mantener el layout de 5 cards pero agregar dentro de cada card un **elemento visual pequeño en la parte superior** antes del ícono: una mini "pantalla" ilustrativa de lo que el usuario ve en ese paso. Puede ser:

- Paso 1: mini lista de pedidos (3 items con indicador de estado)
- Paso 2: mini tabla de asignación (2 filas, conductor + ruta)
- Paso 3: mini mapa con punto en movimiento
- Paso 4: mini card de evidencia con ícono de cámara + checkmark
- Paso 5: mini reporte con barras y porcentaje de completado

Estas "mini pantallas" se hacen en JSX puro con Tailwind — NO son imágenes reales del producto, son **ilustraciones de UI construidas con código**. Esto es honesto (no fake screenshots), visual (se entiende qué es) y mantenible.

**Regla para las mini UI ilustrativas:**
- Usar la paleta oficial de LIVIO
- Fondo de "pantalla": #F7F8F6 con borde #D7DEDC y border-radius medio
- Elementos dentro: divs con colores de estado (pendiente: amarillo suave, en ruta: teal suave, entregado: verde agua)
- Tipografía mínima en 10–11px para simular labels de interfaz
- No deben ser pixel-perfect; deben ser *reconocibles* como interfaz de software

---

## 4. Hero — mejoras de profundidad (sin cambiar estructura)

La estructura del Hero (dos columnas, H1, subtítulo, CTAs, mockup) es correcta. Las mejoras son de capa visual:

### 4.1 Fondo del Hero
Agregar al fondo del bloque hero uno de estos tratamientos sutiles (elegir uno):

**Opción A — Forma geométrica decorativa:**
Un rectángulo o polígono de color muy suave (#D9F0EC al 30% de opacidad) en la esquina superior derecha, detrás del mockup. Da profundidad sin distraer.

**Opción B — Grid punteado sutil:**
Background SVG con grid de puntos en #D7DEDC al 40% de opacidad. Comunica orden y sistema. Ejemplo CSS:
```css
background-image: radial-gradient(circle, #D7DEDC 1px, transparent 1px);
background-size: 24px 24px;
```

**Opción C — Gradiente lateral muy suave:**
`background: linear-gradient(135deg, #F7F8F6 0%, #EEF2F1 60%, #D9F0EC 100%)`

### 4.2 Mockup principal del Hero
El mockup del lado derecho debe tener:
- Sombra pronunciada: `box-shadow: 0 24px 64px rgba(22,53,63,0.15)`
- Border-radius generoso: `rounded-2xl` o equivalente
- Si hay múltiples "mini cards" flotando (pedido, evidencia, cierre, mapa), que estén levemente rotadas y superpuestas para dar sensación de profundidad — no todas al mismo nivel z

### 4.3 Badges del Hero
Los badges de "Implementación rápida", "Evidencia" y "Cierre diario" deben tener:
- Fondo: blanco puro con borde sutil #D7DEDC
- Ícono pequeño en teal
- Sombra sutil: `shadow-sm`
- Entrar con una animación de `fade-up` con delay escalonado (100ms, 200ms, 300ms)

---

## 5. Motion y animaciones — reglas específicas

Siguiendo el principio de "movimiento que ayuda a entender, no espectáculo":

### Permitido e implementar
- **Fade + slide-up al entrar en viewport**: Aplicar a section headers, cards y pasos. Usar `IntersectionObserver` con clase CSS o Framer Motion si ya está en el proyecto.
- **Hover en cards**: `transform: translateY(-2px)` con `transition: 150ms ease`. Sutil, confirma interactividad.
- **Hover en botón primario**: `background` transición hacia #1F4E5F (primario complementario). Sin efecto exagerado.
- **Stepper interactivo en Cómo funciona** (si se implementa Opción A): cambio de estado activo con transición de opacidad en el mockup lateral.

### No implementar
- Parallax en ninguna sección
- Scroll-triggered animations complejas con librerías pesadas
- Loaders o splash screens
- Contadores animados de métricas (no hay métricas reales)

---

## 6. Elementos gráficos de apoyo — reglas

Para no depender de fotos stock ni de screenshots reales del MVP:

### UI Ilustrativa (construida en JSX/Tailwind)
La solución más honesta y mantenible. Componentes de React que simulan interfaces:
- `<DayBoardMockup />` — tablero del día con lista de pedidos y estados
- `<DeliveryCardMockup />` — card de entrega individual con evidencia
- `<CloseSummaryMockup />` — resumen de cierre con porcentaje de completado
- `<AssignmentMockup />` — pantalla de asignación por vehículo

Estos se usan en Hero, en Cómo funciona y opcionalmente en Diferenciación.

### Íconos
Usar exclusivamente Lucide Icons. Tamaño estándar: 20px para cards, 24px para secciones, 32px para highlights grandes. Color: #2F8F83 (teal) para íconos positivos/funcionales, #5F6B70 (gris) para descriptivos.

### No usar
- Fotos de camiones, rutas o conductores
- Fotos de ejecutivos en reuniones
- Ilustraciones vectoriales estilo "startup genérica" (personas con globos, flechas enormes, etc.)
- Screenshots reales del MVP si tienen datos sensibles o UX incompleta

---

## 7. Checklist de QA visual para estas mejoras

Antes de dar por cerrada la iteración, verificar:

- [ ] ¿Hay al menos dos secciones con fondo oscuro (#16353F)?
- [ ] ¿El texto en fondos oscuros pasa contraste mínimo WCAG AA?
- [ ] ¿La sección de Problema se siente visualmente distinta del resto?
- [ ] ¿Las cards de Problema tienen íconos diferentes entre sí?
- [ ] ¿La sección Cómo funciona tiene al menos un elemento visual del producto (mockup, mini UI o ilustración de interfaz)?
- [ ] ¿El Hero tiene sombra en el mockup y fondo con algo de textura/forma?
- [ ] ¿Las animaciones de entrada son suaves y no bloquean la lectura?
- [ ] ¿El bloque de comparación antes/después está entre Problema y Cómo funciona?
- [ ] ¿Todo esto funciona correctamente en mobile (secciones oscuras, cards apiladas, mockups simplificados)?

---

## 8. Prioridad de implementación

Implementar en este orden:

1. **Sistema de fondos** — cambiar colores de fondo por sección (cambio rápido, impacto visual inmediato)
2. **Sección Problema con fondo oscuro + íconos diferenciados** — mayor impacto narrativo
3. **Bloque antes/después** entre Problema y Cómo funciona
4. **Mini UI ilustrativas en Cómo funciona** — requiere construir componentes nuevos
5. **Mejoras de Hero** (sombra en mockup, fondo con textura, animación en badges)
6. **Motion de entrada** en secciones clave

---

*Este documento complementa el paquete 01–05 y no modifica ninguna decisión estratégica, de copy ni de stack técnico. En caso de conflicto con otro documento, aplica la jerarquía definida en 00_LIVIO_Organizacion_final_paquete_documental_web.md.*