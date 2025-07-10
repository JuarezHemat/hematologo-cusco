import './globals.css'
import { ReactNode } from 'react'
import Link from 'next/link'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="relative">
        {/* NAVBAR */}
        <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md py-4 px-6 flex justify-between items-center">
          <div className="text-xl font-bold text-red-700">Dr. Alex Juárez</div>
          <nav className="space-x-4 text-sm sm:text-base font-medium text-gray-700">
            <Link href="/"><span className="hover:text-red-600 cursor-pointer">Inicio</span></Link>
            <Link href="/sobre-mi"><span className="hover:text-red-600 cursor-pointer">Sobre mí</span></Link>
            <Link href="/servicios"><span className="hover:text-red-600 cursor-pointer">Servicios</span></Link>
            <Link href="/testimonios"><span className="hover:text-red-600 cursor-pointer">Testimonios</span></Link>
            <Link href="/blog"><span className="hover:text-red-600 cursor-pointer">Blog</span></Link>
            <Link href="/contacto"><span className="hover:text-red-600 cursor-pointer">Contacto</span></Link>
          </nav>
        </header>

        {/* CONTENIDO PRINCIPAL */}
        <div className="pt-24">{children}</div>

        {/* BOTÓN FLOTANTE DE WHATSAPP */}
        <a
          href="https://wa.me/51988115128?text=Hola%20Dr.%20Ju%C3%A1rez%2C%20deseo%20agendar%20una%20cita.%20%C2%BFPodr%C3%ADa%20ayudarme%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.04 2.004a9.985 9.985 0 0 0-8.383 15.435l-1.35 4.956 5.077-1.33a9.987 9.987 0 0 0 4.656 1.16c5.514 0 10-4.486 10-10s-4.486-10-10-10h0Z" />
          </svg>
        </a>
      </body>
    </html>
  )
}