import './globals.css'
import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Botón flotante de WhatsApp */}
        <a
          href="https://wa.me/51988115128?text=Hola%20Dr.%20Ju%C3%A1rez%2C%20deseo%20agendar%20una%20cita.%20%C2%BFPodr%C3%ADa%20ayudarme%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition duration-300"
          aria-label="Contactar por WhatsApp"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2.004a9.985 9.985 0 0 0-8.383 15.435l-1.35 4.956 5.077-1.33a9.987 9.987 0 0 0 4.656 1.16c5.514 0 10-4.486 10-10s-4.486-10-10-10h0Zm-.04 18a7.962 7.962 0 0 1-4.058-1.1l-.29-.17-3.008.79.798-2.933-.188-.3a7.961 7.961 0 1 1 14.7-4.64 7.963 7.963 0 0 1-7.954 8.353Zm4.255-5.393c-.233-.117-1.379-.682-1.593-.76-.214-.077-.37-.116-.527.118s-.604.76-.74.917c-.137.156-.273.176-.507.06-.233-.118-.983-.363-1.872-1.156-.692-.615-1.16-1.376-1.296-1.61-.136-.234-.015-.36.103-.476.106-.106.234-.274.35-.41.117-.137.156-.234.233-.39.078-.156.039-.292-.02-.41-.058-.117-.527-1.275-.723-1.745-.19-.456-.384-.396-.527-.403l-.447-.008a.858.858 0 0 0-.624.292c-.215.234-.818.8-.818 1.954s.837 2.263.952 2.422c.117.156 1.645 2.513 3.99 3.523.558.24.993.383 1.332.49.56.178 1.07.153 1.474.093.45-.067 1.379-.562 1.573-1.104.195-.542.195-1.007.137-1.104-.058-.097-.214-.156-.447-.273Z" />
          </svg>
        </a>
      </body>
    </html>
  )
}
