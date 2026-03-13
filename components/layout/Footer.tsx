import Link from "next/link";
import { navigation } from "@/content/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div>
        <div className="max-w-content mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-accent-light bg-clip-text text-transparent">
                LIVIO
              </h3>
              <p className="text-white/80 text-sm leading-relaxed">
                La operación logística de tu pyme, en orden.
              </p>
              <div className="mt-6" aria-hidden="true" />
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Navegación</h4>
              <ul className="space-y-3">
                {navigation.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                    >
                      <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Contacto</h4>
              <ul className="space-y-4 text-sm text-white/80">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a
                    href="mailto:contacto@livio.cl"
                    className="text-white/80 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    contacto@livio.cl
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-6 text-lg">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/privacidad"
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                    Privacidad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terminos"
                    className="text-white/80 hover:text-white transition-colors text-sm flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
                  >
                    <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-300" />
                    Términos
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              &copy; {new Date().getFullYear()} LIVIO. Todos los derechos reservados.
            </p>
            <p className="text-sm text-white/60">
              Hecho para operaciones logísticas
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
