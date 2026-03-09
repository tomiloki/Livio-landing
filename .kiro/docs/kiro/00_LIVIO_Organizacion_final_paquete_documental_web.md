**LIVIO --- Organización final del paquete documental web**

*Documento guía para saber qué archivo manda, para qué sirve y en qué orden usarlo.*

| **Paquete documental para construcción web en Kiro** |
|------------------------------------------------------|

# 1. Veredicto de organización {#veredicto-de-organización}

La organización final debe ser modular. El problema actual no es falta de contenido, sino exceso de mezcla entre estrategia, estilo, wireframe y técnica dentro de un mismo documento.

- El brief rector debe mandar sobre el resto.

- La identidad verbal debe mandar sobre cualquier copy generado después.

- La dirección visual y componentes deben ir juntos, porque una sin la otra queda coja.

- El wireframe debe vivir separado, porque traduce la estrategia a layout.

- Las restricciones técnicas deben ir separadas, porque condicionan la implementación y evitan sobreingeniería.

# 2. Estructura final recomendada {#estructura-final-recomendada}

| **Código** | **Archivo**                                   | **Rol**                              | **¿Manda sobre quién?**                         |
|------------|-----------------------------------------------|--------------------------------------|-------------------------------------------------|
| 00         | Organización final del paquete documental web | Índice maestro humano                | No manda; ordena                                |
| 01         | Brief rector web                              | Verdad estratégica del sitio         | Manda sobre 02--05 si hay conflicto estratégico |
| 02         | Identidad verbal y copy base                  | Voz, mensajes, claims, CTAs          | Manda sobre copy generado                       |
| 03         | Dirección visual y sistema de componentes     | Paleta, tipografía, UI y componentes | Manda sobre diseño visual                       |
| 04         | Wireframe por sección                         | Estructura y jerarquía por página    | Manda sobre layout                              |
| 05         | Restricciones técnicas e implementación web   | Cómo debe construirse                | Manda sobre decisiones técnicas                 |

# 3. Orden de lectura para Kiro {#orden-de-lectura-para-kiro}

1.  01 --- Brief rector web

2.  02 --- Identidad verbal y copy base

3.  03 --- Dirección visual y sistema de componentes

4.  04 --- Wireframe por sección

5.  05 --- Restricciones técnicas e implementación web

# 4. Regla de conflicto {#regla-de-conflicto}

Si dos documentos parecen decir cosas distintas, Kiro debe resolverlos así:

6.  Primero manda el Brief rector.

7.  Después manda la Identidad verbal para tono y copy.

8.  Después manda Dirección visual y sistema de componentes para UI.

9.  Después Wireframe para estructura.

10. Después Restricciones técnicas para implementación.

# 5. Qué haría yo con tus archivos actuales {#qué-haría-yo-con-tus-archivos-actuales}

- 'especificacion-web' no debería seguir creciendo. Debe convertirse en el Brief rector y perder todo lo que hoy pertenece a visual, componentes y técnica.

- 'identidad-copy' está bien como documento separado.

- 'warframe-seccion' está bien como documento separado, pero hay que corregir el nombre a 'wireframe'.

- 'implementacion-web' está bien como documento separado.

- Falta un documento explícito de Dirección visual y sistema de componentes. Ese es el mayor hueco actual del paquete.

# 6. Entregables incluidos en esta actualización {#entregables-incluidos-en-esta-actualización}

- 01 --- Brief rector web (actualizado y limpiado)

- 02 --- Identidad verbal y copy base (revisado)

- 03 --- Dirección visual y sistema de componentes (nuevo)

- 04 --- Wireframe por sección (revisado)

- 05 --- Restricciones técnicas e implementación web (revisado)

# 7. Siguiente paso recomendado {#siguiente-paso-recomendado}

Una vez aprobada esta estructura, recién conviene hacer un AGENTS.md corto que no repita todo, sino que diga a Kiro qué leer primero, qué no puede inventar y qué decisiones ya están cerradas.
