// app/terminos/page.jsx  (o pages/terminos.jsx si usas Pages Router)

export const metadata = {
  title: 'Términos y Condiciones — Livio',
  description: 'Términos y condiciones de uso del sitio web de Livio.',
};

export default function Terminos() {
  return (
    <div style={{ fontFamily: "'Inter', sans-serif", backgroundColor: '#F7F8F6', minHeight: '100vh' }}>

      {/* Contenido */}
      <main style={{ maxWidth: '720px', margin: '0 auto', padding: '4rem 2rem 6rem' }}>

        {/* Header del documento */}
        <div style={{ marginBottom: '3rem' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', color: '#2F8F83', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
            Documento legal
          </p>
          <h1 style={{ fontSize: '2rem', fontWeight: 700, color: '#162126', letterSpacing: '-0.03em', marginBottom: '0.5rem', lineHeight: 1.2 }}>
            Términos y Condiciones de Uso
          </h1>
          <p style={{ fontSize: '0.9rem', color: '#5F6B70' }}>
            Última actualización: Marzo 2026
          </p>
        </div>

        {/* Intro */}
        <div style={{
          backgroundColor: '#D9F0EC',
          borderRadius: '8px',
          padding: '1.25rem 1.5rem',
          marginBottom: '2.5rem',
          borderLeft: '3px solid #2F8F83',
        }}>
          <p style={{ fontSize: '0.95rem', color: '#16353F', margin: 0, lineHeight: 1.6 }}>
            Al acceder y usar el sitio web de Livio, aceptas los presentes Términos y Condiciones. Si no estás de acuerdo con alguno de estos términos, te pedimos que no utilices el sitio.
          </p>
        </div>

        {/* Secciones */}
        <Section title="1. Sobre el sitio">
          <p>Este sitio web es de carácter informativo. Su propósito es presentar el producto Livio, describir su funcionamiento y recibir solicitudes de contacto de empresas interesadas en participar en el programa piloto.</p>
          <p>El sitio no constituye una oferta comercial vinculante. El acceso al programa piloto está sujeto a evaluación y disponibilidad de cupos.</p>
        </Section>

        <Section title="2. Uso del sitio">
          <p>Al usar este sitio, te comprometes a:</p>
          <ul style={listStyle}>
            <li>Proporcionar información veraz y actualizada en el formulario de contacto.</li>
            <li>No usar el sitio para fines ilícitos o contrarios a estos términos.</li>
            <li>No intentar acceder a sistemas o datos que no te correspondan.</li>
            <li>No reproducir, copiar ni distribuir el contenido del sitio sin autorización expresa de Livio.</li>
          </ul>
        </Section>

        <Section title="3. Programa piloto">
          <p>La solicitud de cupo en el programa piloto a través del formulario del sitio no garantiza la aceptación. Livio se reserva el derecho de seleccionar a las empresas participantes según criterios operacionales y de compatibilidad con el producto.</p>
          <p>Las condiciones específicas del piloto —incluyendo precio, duración y alcance— se establecen en un acuerdo separado firmado entre Livio y la empresa participante.</p>
        </Section>

        <Section title="4. Propiedad intelectual">
          <p>Todo el contenido de este sitio —textos, imágenes, diseño, nombre comercial y marca Livio— es propiedad de Livio y está protegido por las leyes de propiedad intelectual aplicables en Chile. Queda prohibida su reproducción total o parcial sin autorización escrita.</p>
        </Section>

        <Section title="5. Limitación de responsabilidad">
          <p>Livio no garantiza que el sitio esté disponible de forma ininterrumpida ni libre de errores. El sitio se ofrece &ldquo;tal como está&rdquo;, sin garantías de ningún tipo.</p>
          <p>Livio no será responsable por daños directos o indirectos derivados del uso o la imposibilidad de uso del sitio, incluyendo pérdida de datos o interrupciones del servicio.</p>
        </Section>

        <Section title="6. Enlaces externos">
          <p>El sitio puede contener enlaces a sitios de terceros. Livio no tiene control sobre el contenido de esos sitios y no asume responsabilidad por su contenido, privacidad o prácticas.</p>
        </Section>

        <Section title="7. Modificaciones">
          <p>Livio se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entran en vigencia desde el momento en que se publican en el sitio. El uso continuado del sitio después de cualquier modificación implica la aceptación de los nuevos términos.</p>
        </Section>

        <Section title="8. Ley aplicable">
          <p>Estos términos se rigen por las leyes de la República de Chile. Cualquier disputa derivada del uso de este sitio será sometida a la jurisdicción de los tribunales ordinarios de justicia de Santiago de Chile.</p>
        </Section>

        <Section title="9. Contacto" last>
          <p>Si tienes preguntas sobre estos términos, escríbenos a <a href="mailto:contacto@livio.cl" style={linkStyle}>contacto@livio.cl</a>.</p>
        </Section>

      </main>

    </div>
  );
}

// Componente interno reutilizable para cada sección
function Section({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div style={{
      marginBottom: last ? 0 : '2rem',
      paddingBottom: last ? 0 : '2rem',
      borderBottom: last ? 'none' : '1px solid #EEF2F1',
    }}>
      <h2 style={{
        fontSize: '1rem',
        fontWeight: 700,
        color: '#16353F',
        marginBottom: '0.75rem',
        letterSpacing: '-0.01em',
      }}>
        {title}
      </h2>
      <div style={{ fontSize: '0.95rem', color: '#3a4a50', lineHeight: 1.7 }}>
        {children}
      </div>
    </div>
  );
}

const linkStyle = {
  color: '#2F8F83',
  textDecoration: 'none',
  fontWeight: 500,
};

const listStyle = {
  paddingLeft: '1.25rem',
  margin: '0.5rem 0',
  lineHeight: 1.8,
  color: '#3a4a50',
};
