
'use client'

import { FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaUser, FaCommentDots } from 'react-icons/fa'
import Image from 'next/image'

export default function ContactoPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-10 space-y-10">
      <h1 className="text-3xl font-bold text-center mb-6">Contáctame</h1>

      <div className="space-y-4 text-lg">
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-600" />
          <span>
            Dirección:{' '}
            <a
              href="https://www.google.com/maps?q=Av+la+Cultura+1320B,+Cusco,+Peru"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Av la Cultura 1320B – Of 405 (4to piso) - Edificio Regional
            </a>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaWhatsapp className="text-green-500" />
          <a
            href="https://wa.me/51988115128"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            988115128
          </a>
        </div>
      </div>

      {/* Formulario animado */}
      <form
        action="https://formspree.io/f/meokbvnv"
        method="POST"
        className="bg-white p-6 rounded-lg shadow-xl space-y-4 animate-fade-in"
      >
        <div className="flex items-center gap-2">
          <FaUser className="text-gray-500" />
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex items-center gap-2">
          <FaEnvelope className="text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="Tu correo"
            required
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div className="flex items-start gap-2">
          <FaCommentDots className="text-gray-500 mt-2" />
          <textarea
            name="mensaje"
            placeholder="Tu mensaje"
            rows={4}
            required
            className="w-full p-2 border rounded-md"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition duration-300"
        >
          Enviar
        </button>
      </form>
    </main>
  )
}
