'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4 md:px-10 py-12 space-y-24 bg-white text-center text-gray-800">

      {/* CONTACTO */}
      <section id="contacto" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 mb-2">
          📍 <a href="https://maps.google.com/?q=Av. de la Cultura 1234, Cusco, Perú" target="_blank" className="text-blue-600 underline">Av. de la Cultura 1234, Cusco, Perú</a>
        </p>
        <p className="text-gray-700">
          📱 <a href="https://wa.me/51988115128" className="text-green-600 underline">+51 988 115 128 (WhatsApp)</a>
        </p>
      </section>
    </main>
  )
}
