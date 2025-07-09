
'use client';
import Image from 'next/image';
import fotoMedico from '../public/foto-medico.jpg';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center py-10 px-4">
      <motion.h1 
        className="text-4xl font-bold text-center text-gray-900 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        ¡Hola y bienvenido al consultorio del Dr. Alex Juárez!
      </motion.h1>
      
      <motion.p 
        className="text-lg text-center text-gray-700 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        Es un honor tenerte aquí. Soy especialista en Hematología, comprometido con brindar un diagnóstico preciso, tratamientos actualizados y un seguimiento personalizado para cada paciente. Mi enfoque combina la ciencia médica con una atención cálida y humana, porque sé que cada persona merece ser escuchada, comprendida y atendida con respeto.
      </motion.p>
      
      <motion.p 
        className="text-lg text-center text-gray-700 max-w-2xl mx-auto mt-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        Gracias por confiar en mí. Estoy aquí para acompañarte en cada paso de tu salud.
      </motion.p>

      <motion.div
        className="mt-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >
        <Image
          src={fotoMedico}
          alt="Dr. Alex Juárez en su consultorio"
          width={400}
          height={400}
          className="rounded-xl shadow-lg"
        />
      </motion.div>
    </main>
  );
}
