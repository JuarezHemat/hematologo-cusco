'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-4 py-12 bg-white text-center">

      {/* Logo del consultorio */}
      <div className="mb-6">
        <Image
          src="/images/logo.png"
          alt="Logo Dr. Alex Juárez"
          width={100}
          height={100}
        />
      </div>

      {/* Bienvenida */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
        Bienvenido al consultorio del Dr. Alex Juárez
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        Médico especialista en Hematología. Diagnóstico, tratamiento y seguimiento
        de enfermedades de la sangre con enfoque humano, ético y profesional.
      </p>

      <p className="text-base md:text-lg text-gray-600 max-w-xl mb-8">
        Nos enfocamos en tu bienestar con atención cálida y trato profesional. Si tienes dudas,
        síntomas o necesitas un diagnóstico certero y confiable, estás en el lugar indicado.
      </p>

      {/* Foto del doctor */}
      <div className="mt-10">
        <Image
          src="/images/dr-juarez.png"
          alt="Foto del Dr. Alex Juárez"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
        <p className="mt-4 font-medium text-gray-800">Dr. Alex Juárez</p>
      </div>
    </main>
  )
}
