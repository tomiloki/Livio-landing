Revisa el componente o página que estoy referenciando y corrige todos los problemas de diseño responsive.

Proceso:
1. Revisa el código y simula mentalmente cómo se ve en 3 breakpoints: móvil (375px), tablet (768px) y desktop (1280px).
2. Lista cada problema que encuentres con el breakpoint afectado.
3. Corrige todos los problemas de una vez.

Problemas comunes a buscar:
- Texto que se desborda o queda demasiado grande/pequeño en móvil
- Grids o flex layouts que no colapsan correctamente
- Padding/margin excesivo o insuficiente en móvil
- Imágenes que no escalan o que pierden proporción
- Botones o CTAs demasiado pequeños para touch (mínimo 44px)
- Elementos que quedan ocultos o cortados
- Tablas o mockups de UI que no se adaptan

Reglas:
- Usa clases responsive de Tailwind (sm:, md:, lg:) — no media queries custom.
- Mobile-first: el estilo base es para móvil, las clases con prefijo son para pantallas más grandes.
- No cambies el diseño desktop si funciona bien — solo corrige lo que está roto.
