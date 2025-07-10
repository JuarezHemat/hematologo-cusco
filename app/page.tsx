import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-6 bg-white text-center">
      <Image
        src="/images/logo.png"
        alt="Logo del Dr. Juárez"
        width={180}
        height={180}
        className="mb-6"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bienvenido al consultorio del Dr. Alex Juárez
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Especialista en Hematología. Diagnóstico, tratamiento y seguimiento de enfermedades de la sangre con enfoque humano y profesional.
      </p>
      <div className="w-full max-w-md">
        <Image
          src="/images/dr-juarez.png"
          alt="Dr. Alex Juárez en su consultorio"
          width={600}
          height={400}
          className="rounded-lg shadow-lg mx-auto"
        />
      </div>
    </main>
  );
}