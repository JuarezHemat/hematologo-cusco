'use client'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="px-4 md:px-10 py-12 space-y-24 bg-white text-center text-gray-800">

      {/* INICIO */}
      <section className="flex flex-col items-center justify-center">
        <Image
          src="/images/logo.png"
          alt="Logo Dr. Alex Juárez"
          width={100}
          height={100}
          className="mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Bienvenido al consultorio del Dr. Alex Juárez
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mb-6">
          Médico especialista en Hematología. Diagnóstico, tratamiento y seguimiento
          de enfermedades de la sangre con enfoque humano, ético y profesional.
        </p>
        <p className="text-base md:text-lg text-gray-600 max-w-xl">
          Nos enfocamos en tu bienestar con atención cálida y trato profesional. Si tienes dudas,
          síntomas o necesitas un diagnóstico certero y confiable, estás en el lugar indicado.
        </p>
        <Image
          src="/images/dr-juarez.png"
          alt="Foto del Dr. Alex Juárez"
          width={250}
          height={250}
          className="rounded-full shadow-lg mt-10"
        />
        <p className="mt-4 font-medium text-gray-800">Dr. Alex Juárez</p>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
        <p className="text-gray-700 leading-relaxed">
          Soy el Dr. Alex Juárez, médico cirujano egresado de la Universidad Nacional de San Agustín de Arequipa,
          con especialidad en Hematología en el Hospital Nacional Dos de Mayo – Lima. Cuento con amplia experiencia en el diagnóstico y tratamiento
          de enfermedades hematológicas como anemias, leucemias, linfomas, y trastornos de coagulación. Mi compromiso es brindar atención médica personalizada,
          empática y basada en la mejor evidencia científica.
        </p>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Servicios</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-700">
          <li>✔️ Diagnóstico y tratamiento de anemias</li>
          <li>✔️ Evaluación de leucocitosis o trombocitosis</li>
          <li>✔️ Estudio de sangrados o problemas de coagulación</li>
          <li>✔️ Monitoreo de leucemias y linfomas</li>
          <li>✔️ Segunda opinión en casos complejos hematológicos</li>
          <li>✔️ Interpretación de hemogramas y estudios especiales</li>
        </ul>
      </section>

      {/* TESTIMONIOS (VIDEO) */}
      <section id="testimonios" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Testimonios</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/16qSeiZGkf/"
            width="100%"
            height="315"
            style={{ border: 'none', overflow: 'hidden' }}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Blog / Noticias</h2>
        <p className="text-gray-600">Muy pronto estaré compartiendo artículos, noticias y consejos sobre salud hematológica.</p>
      </section>

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
