'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-4 py-12 text-center">
      <Image
        src="/logo-dr-juarez.png"
        alt="Logo Dr. Alex Juárez"
        width={160}
        height={160}
        className="mb-6"
      />
      
      <motion.h1
        className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Bienvenido al consultorio del Dr. Alex Juárez
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-700 max-w-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Especialista en Hematología. Diagnóstico, tratamiento y seguimiento de enfermedades de la sangre con enfoque humano y profesional.
        <br /><br />
        Estoy encantado de darte la bienvenida a este espacio donde priorizamos tu salud con calidez y excelencia. Si tienes dudas, síntomas o necesitas un diagnóstico certero y acompañamiento confiable, estás en el lugar indicado.
      </motion.p>

      <motion.div
        className="mt-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Image
          src="/foto-medico.jpg"
          alt="Dr. Alex Juárez"
          width={380}
          height={380}
          className="rounded-xl shadow-md"
        />
      </motion.div>
    </main>
  );
}