// app/privacidad/page.jsx  (o pages/privacidad.jsx si usas Pages Router)

export const metadata = {
  title: 'Política de Privacidad — Livio',
  description: 'Cómo Livio recopila, usa y protege tu información personal.',
};

export default function Privacidad() {
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
            Política de Privacidad
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
            En Livio nos tomamos en serio la privacidad de quienes visitan nuestro sitio web y nos contactan. Esta política explica qué información recopilamos, cómo la usamos y cuáles son tus derechos.
          </p>
        </div>

        {/* Secciones */}
        <Section title="1. ¿Quiénes somos?">
          <p>Livio es una empresa de software logístico para pymes chilenas, actualmente en fase de lanzamiento. Puedes contactarnos en <a href="mailto:contacto@livio.cl" style={linkStyle}>contacto@livio.cl</a>.</p>
        </Section>

        <Section title="2. ¿Qué información recopilamos?">
          <p>Recopilamos únicamente la información que tú nos proporcionas voluntariamente a través del formulario de contacto en nuestro sitio web:</p>
          <ul style={listStyle}>
            <li>Nombre</li>
            <li>Nombre de la empresa</li>
            <li>Correo electrónico</li>
            <li>Teléfono o WhatsApp (opcional)</li>
            <li>Tamaño de flota (selección de rango)</li>
            <li>Descripción de cómo coordinan su operación hoy (campo libre, opcional)</li>
          </ul>
          <p>No recopilamos información de forma automática mediante cookies de seguimiento ni herramientas de analítica de terceros en este momento.</p>
        </Section>

        <Section title="3. ¿Para qué usamos tu información?">
          <p>La información que nos proporcionas se usa exclusivamente para:</p>
          <ul style={listStyle}>
            <li>Contactarte para coordinar una conversación sobre el programa piloto de Livio.</li>
            <li>Evaluar si tu operación es compatible con la solución que ofrecemos.</li>
            <li>Enviarte información relacionada con Livio si nos lo solicitas.</li>
          </ul>
          <p>No usamos tu información para publicidad, ni la vendemos ni la compartimos con terceros bajo ninguna circunstancia.</p>
        </Section>

        <Section title="4. ¿Cuánto tiempo guardamos tu información?">
          <p>Guardamos tu información mientras estemos en contacto activo contigo o mientras sea necesario para los fines descritos en esta política. Si en algún momento deseas que eliminemos tus datos, escríbenos a <a href="mailto:contacto@livio.cl" style={linkStyle}>contacto@livio.cl</a> y lo haremos en un plazo máximo de 7 días hábiles.</p>
        </Section>

        <Section title="5. ¿Compartimos tu información con terceros?">
          <p>No. La información que nos proporcionas no se vende, arrienda ni comparte con terceros. El acceso a tus datos está limitado únicamente al equipo de Livio directamente involucrado en el proceso comercial.</p>
        </Section>

        <Section title="6. ¿Usamos cookies?">
          <p>Actualmente no utilizamos cookies de seguimiento ni herramientas de analítica que recopilen datos de navegación. Si esto cambia en el futuro, actualizaremos esta política y te lo informaremos de manera visible en el sitio.</p>
        </Section>

        <Section title="7. Tus derechos">
          <p>Tienes derecho a:</p>
          <ul style={listStyle}>
            <li>Saber qué información tenemos sobre ti.</li>
            <li>Solicitar la corrección de datos incorrectos.</li>
            <li>Solicitar la eliminación de tus datos en cualquier momento.</li>
            <li>Revocar tu consentimiento para ser contactado.</li>
          </ul>
          <p>Para ejercer cualquiera de estos derechos, escríbenos a <a href="mailto:contacto@livio.cl" style={linkStyle}>contacto@livio.cl</a>. Respondemos en un plazo máximo de 7 días hábiles.</p>
        </Section>

        <Section title="8. Seguridad">
          <p>Tomamos medidas razonables para proteger la información que nos proporcionas. Sin embargo, ninguna transmisión de datos por internet es 100% segura. Si tienes alguna preocupación sobre la seguridad de tus datos, contáctanos directamente.</p>
        </Section>

        <Section title="9. Cambios a esta política">
          <p>Podemos actualizar esta política en cualquier momento. Cuando lo hagamos, actualizaremos la fecha de &ldquo;última actualización&rdquo; en la parte superior de esta página. Te recomendamos revisarla periódicamente.</p>
        </Section>

        <Section title="10. Contacto" last>
          <p>Si tienes preguntas sobre esta política de privacidad, escríbenos a <a href="mailto:contacto@livio.cl" style={linkStyle}>contacto@livio.cl</a>.</p>
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
