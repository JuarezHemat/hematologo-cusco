'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4 md:px-10 py-12 space-y-24 bg-white text-center text-gray-800">

      {/* CONTACTO */}
      <section id="contacto" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 mb-2">
          📍 <a href="https://maps.app.goo.gl/e1t9tDjfksNQgdKj6" target="_blank" className="text-blue-600 underline">
            Av la Cultura 1320B - Of 405 (4to piso) - Edificio regional
          </a>
        </p>
        <p className="text-gray-700">
          📱 <a href="https://wa.me/51988115128" className="text-green-600 underline">+51 988 115 128 (WhatsApp)</a>
        </p>
        <p className="text-gray-700">
          📱 <a href="https://wa.me/51930914415" className="text-green-600 underline">+51 930 914 415 (WhatsApp)</a>
        </p>
      </section>
    </main>
  )
}
