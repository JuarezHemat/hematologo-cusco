'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 text-center">
      
      {/* LOGO DEL CONSULTORIO */}
      <div className="mb-4">
        <Image
          src="/images/logo.png"
          alt="Logo Dr. Alex Juárez"
          width={120}
          height={120}
        />
      </div>

      {/* TEXTO DE BIENVENIDA */}
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        Bienvenido al consultorio del Dr. Alex Juárez
      </h1>

      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
        Médico especialista en Hematología. Diagnóstico, tratamiento y seguimiento
        de enfermedades de la sangre con enfoque humano, ético y profesional.
      </p>

      <p className="text-base md:text-lg text-gray-600 max-w-xl mb-6">
        Estoy encantado de darte la bienvenida a este espacio donde tu salud es nuestra prioridad.
        Si presentas síntomas, dudas o necesitas un diagnóstico certero, estás en el lugar indicado.
        Brindamos atención cálida, con compromiso y excelencia.
      </p>

      {/* FOTO DEL DOCTOR */}
      <div className="mt-6">
        <Image
          src="/images/dr-juarez.png"
          alt="Foto del Dr. Alex Juárez"
          width={250}
          height={250}
          className="rounded-full shadow-lg"
        />
        <p className="mt-2 font-medium">Dr. Alex Juárez</p>
      </div>
    </main>
  )
}