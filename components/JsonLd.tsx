export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "LIVIO",
        "url": "https://livio.cl",
        "description": "Software de gestión logística para pymes chilenas con flota propia de 1 a 15 vehículos. Centraliza pedidos desde cualquier canal, organiza las rutas, guía a los choferes y cierra el día automáticamente con evidencia digital.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web, iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "CLP",
          "description": "Piloto con implementación gratuita y 50% de descuento durante 12 meses"
        },
        "featureList": [
          "Centralización de pedidos multicanal",
          "Asignación de entregas por vehículo y conductor",
          "Seguimiento en tiempo real",
          "Evidencia digital de entrega (foto, firma, GPS)",
          "Cierre diario con reporte automático",
          "Acceso web y móvil"
        ]
      },
      {
        "@type": "Organization",
        "name": "LIVIO",
        "url": "https://livio.cl",
        "email": "contacto@livio.cl",
        "description": "Empresa de software logístico para pymes de distribución en Chile.",
        "foundingDate": "2026",
        "founders": [
          { "@type": "Person", "name": "Tomás Fuentealba" },
          { "@type": "Person", "name": "Tomás Escalante" }
        ],
        "areaServed": {
          "@type": "Country",
          "name": "Chile"
        },
        "sameAs": []
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "¿Para qué tipo de empresa es LIVIO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "LIVIO está diseñado para pymes chilenas con flota propia de 1 a 15 vehículos que hacen despacho recurrente y hoy coordinan su operación con WhatsApp, Excel y llamadas. Rubros típicos: distribuidoras de agua, gas, mayoristas con reparto y empresas de última milla."
            }
          },
          {
            "@type": "Question",
            "name": "¿Qué incluye el piloto de LIVIO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las empresas del piloto reciben implementación gratuita, 50% de descuento durante 12 meses, onboarding acompañado por el equipo y acceso directo para dar feedback y moldear el producto."
            }
          },
          {
            "@type": "Question",
            "name": "¿LIVIO es un optimizador de rutas?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. LIVIO no es un ruteador. Es el sistema que ordena la operación completa: desde que llega el primer pedido hasta que se cierra el día con evidencia — incluyendo pedidos, asignación, seguimiento, evidencia de entrega y cierre diario."
            }
          },
          {
            "@type": "Question",
            "name": "¿Cuánto cuesta LIVIO?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Las empresas que entran al piloto tienen implementación gratuita y 50% de descuento durante 12 meses. Los cupos son limitados."
            }
          },
          {
            "@type": "Question",
            "name": "¿En qué se diferencia LIVIO de SimpliRoute u Optiroute?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SimpliRoute y Optiroute están enfocados en optimización de rutas. LIVIO cubre el flujo operativo completo: centralización de pedidos, asignación, ejecución con app para choferes, evidencia digital y cierre diario. Es una alternativa más simple y accesible para pymes que no tienen dispatcher ni equipo logístico dedicado."
            }
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
