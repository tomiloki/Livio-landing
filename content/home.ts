export const homeContent = {
  hero: {
    eyebrow: "Software operativo para pymes",
    title: "La operación logística de tu pyme, en orden.",
    subtitle: "Deja de depender de que una persona esté en todo para que la operación no se caiga. LIVIO centraliza tus pedidos, guía a tus choferes y cierra el día con evidencia — desde el primer día.",
    cta: {
      primary: { label: "Quiero ser empresa piloto", href: "/#contacto" },
      secondary: { label: "Ver cómo funciona", href: "/#como-funciona" },
    },
    badges: [
      "🟢 Lanzamiento en abril — últimos cupos disponibles",
      "Piloto gratuito — 2 meses sin costo",
    ],
  },

  problem: {
    title: "Si hoy operas con WhatsApp, Excel y memoria, no tienes sistema: tienes dependencia.",
    body: "Una persona que sabe todo. Pedidos que llegan por todos lados. Un cierre del día que nadie puede hacer si esa persona no está. No es mala suerte. Es falta de método. Y tiene solución.",
    cta: "Ver cómo lo resolvemos",
  },

  howItWorks: {
    title: "Un flujo simple que ordena tu operación de principio a fin.",
    subtitle: "Cinco pasos que convierten el caos de cada día en una rutina clara, visible y cerrable.",
    steps: [
      {
        number: "01",
        label: "Recibe pedidos",
        title: "Todos los pedidos en un solo lugar",
        description: "Sin importar de dónde vienen — WhatsApp, llamada, formulario — todos los pedidos del día quedan centralizados desde el primer momento. Nada se pierde. Nada queda en la memoria de nadie.",
        bullets: [
          "Pedidos ingresados desde cualquier canal",
          "Estado visible desde el primer momento",
          "Sin duplicados ni pedidos perdidos",
          "Historial completo desde el ingreso",
        ],
      },
      {
        number: "02",
        label: "Planifica",
        title: "Asigna con claridad, no con llamadas",
        description: "Ves todo lo que hay que entregar en el día y lo asignas a cada chofer en segundos. Sin Excel, sin coordinación por teléfono, sin confusiones de último minuto.",
        bullets: [
          "Sugerencia de ruta por vehículo y zona",
          "Ruta ajustable al criterio del operador",
          "Capacidad de carga visible por vehículo",
          "Cambios de último minuto sin desorden",
        ],
      },
      {
        number: "03",
        label: "Ejecuta",
        title: "El chofer sabe exactamente qué hacer",
        description: "La app guía al chofer paso a paso: qué entregar, en qué orden, cómo registrarlo. No depende de instrucciones por WhatsApp ni de memoria.",
        bullets: [
          "Seguimiento de vehículos en tiempo real",
          "Estado de cada entrega visible al instante",
          "Conductores con ruta clara en la app móvil",
          "Alertas de retraso o incidencia",
        ],
      },
      {
        number: "04",
        label: "Registra evidencia",
        title: "Cada entrega queda documentada",
        description: "Foto, firma y estado registrado desde la app. Si algo falla, también queda registrado. Trazabilidad real, no suposiciones.",
        bullets: [
          "Foto de entrega desde la app del conductor",
          "Firma digital del receptor",
          "Coordenadas GPS registradas automáticamente",
          "Registro de método de pago contra entrega",
          "Todo vinculado al pedido y al conductor",
        ],
      },
      {
        number: "05",
        label: "Cierra el día",
        title: "Cierre del día en minutos, no en horas",
        description: "Al terminar, tienes el resumen completo: qué se entregó, qué no, qué se cobró y qué quedó pendiente. El día cierra con datos, no con llamadas.",
        bullets: [
          "Resumen automático de entregas del día",
          "Pendientes con detalle de cada caso",
          "Exportable para administración o cliente",
          "Historial acumulado de cada conductor",
        ],
      },
    ],
  },

  beforeAfter: {
    without: [
      "Pedidos por WhatsApp, llamadas y Excel",
      "Asignación de palabra o de memoria",
      "No sabes dónde está cada vehículo",
      "Evidencia en fotos sueltas de WhatsApp",
      "Al cierre del día: nadie sabe qué pasó exactamente",
      "Si falta una persona, la operación se para o se desordena",
    ],
    with: [
      "Pedidos automáticos por WhatsApp",
      "Asignación clara por vehículo y conductor",
      "Seguimiento en tiempo real",
      "Evidencia con foto, firma y ubicación",
      "El día cierra aunque no estés en todo",
    ],
  },

  scope: {
    title: "Lo esencial para ordenar la operación. Sin humo.",
    subtitle: "Esto es lo que está disponible hoy. Funciona desde el primer día. Las empresas del piloto tienen acceso directo al equipo y participan en definir qué sigue.",
    included: [
      "Pedidos por WhatsApp con IA",
      "Asignación de entregas",
      "Seguimiento en tiempo real",
      "Evidencia digital",
      "Cierre diario",
      "Acceso web y móvil",
    ],
    footer: "Estamos en fase piloto. Las primeras empresas entran con 2 meses de piloto gratuito, precio especial de lanzamiento y acceso directo al equipo. Los cupos son limitados.",
  },

  video: {
    title: "Mira cómo funciona en 2 minutos.",
    subtitle: "Desde el primer pedido del día hasta el cierre con evidencia. Todo el flujo, en menos de dos minutos.",
    cta: "Ver demo",
    videoUrl: "#",
  },

  differentiation: {
    title: "No vendemos rutas. Ordenamos tu operación completa.",
    body: "LIVIO no es un optimizador de rutas. Es el sistema que conecta todo lo que hoy está disperso: los pedidos que llegan por WhatsApp, los choferes que operan con llamadas, la evidencia que queda en teléfonos y el cierre de caja que se hace de memoria.\n\nDesde que llega el primer pedido hasta que cierras el día con evidencia. Eso es lo que resuelve LIVIO.",
  },

  about: {
    title: "Construimos LIVIO porque vimos el problema de cerca.",
    subtitle: "Un equipo pequeño con foco en un problema real: la operación logística diaria de pymes que merecen mejores herramientas.",
    team: [
      {
        name: "Tomás Fuentealba",
        role: "Co-Founder & CEO",
        bio: "Vio el problema desde adentro. Trabajó en terreno en distribución de agua y paquetería, coordinó con proveedores y conversó con choferes de decenas de negocios. Sabe exactamente dónde se rompe una operación logística — y construyó Livio para arreglarlo.",
        initials: "TF",
        isFounder: true,
        badge: "Co-Founder & CEO",
        photo: "/images/FuentealbaIA.jpeg",
      },
      {
        name: "Tomás Escalante",
        role: "Co-Founder & CTO",
        bio: "Estuvo en terreno desde el primer día entendiendo el problema con los clientes. Lidera la visión técnica del producto y las decisiones de desarrollo de Livio — para construir algo que funciona en la realidad, no solo en un demo.",
        initials: "TE",
        isFounder: true,
        badge: "Co-Founder & CTO",
        photo: "/images/EscalanteIA.png",
      },
      {
        name: "Esteban Cortés",
        role: "Software Architect — Founder Team",
        bio: "Diseñó y construyó la arquitectura completa de Livio. Su trabajo técnico es la base sobre la que opera el sistema — robusto, trazable y escalable desde el día uno.",
        initials: "EC",
        isFounder: true,
        badge: "Founder Team",
        photo: "/images/estebanIA.png",
      },
      {
        name: "Ignacio Saavedra",
        role: "Head of Operations — Founder Team",
        bio: "Conoce el rubro logístico desde adentro. Acompaña la implementación con cada cliente para que el producto encaje con la realidad operativa del negocio.",
        initials: "IS",
        isFounder: true,
        badge: "Founder Team",
        photo: "/images/ignacioIA.jpeg",
      },
    ],
  },

  finalCTA: {
    title: "El piloto arranca en abril. Reserva tu cupo ahora.",
    subtitle: "Estamos cerrando los últimos cupos antes del lanzamiento. Si tienes entre 1 y 15 vehículos y hoy operas con WhatsApp y Excel, este es el momento.",
    benefits: [
      "2 meses de piloto completamente gratuitos",
      "Precio especial de lanzamiento a partir del mes 3",
      "Onboarding incluido desde el día uno",
      "Acceso directo al equipo para dar feedback y moldear el producto",
    ],
    cta: {
      primary: { label: "Quiero ser empresa piloto", href: "/#contacto" },
      secondary: { label: "Escribir por WhatsApp", href: "https://wa.me/56900000000" },
    },
    formNote: "Respondemos en menos de 24 horas. Tu información no se comparte con terceros.",
  },
};
