export default function Blog() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Blog y Entrevistas</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎥 Leucemia Infantil</h2>
        <p className="mb-2">Entrevista realizada por BHTv donde se explica qué es la leucemia infantil y cómo se diagnostica.</p>
        <a href="https://youtu.be/UBKl3SpXVsU?si=ISQZM0ImZ0PgMXVV" target="_blank" className="text-blue-600 underline">
          Ver entrevista en YouTube
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎥 ¿Qué son los eosinófilos?</h2>
        <p className="mb-2">Entrevista con el Dr. Elmer Huertas sobre la función y el significado clínico de los eosinófilos.</p>
        <a href="https://youtu.be/mZUdpCmiiFw?si=1rAMwSVCH96nIZMm" target="_blank" className="text-blue-600 underline">
          Ver entrevista en YouTube
        </a>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">🎥 ¿Qué es la hemofilia?</h2>
        <p className="mb-2">Participación en el programa Entrevista Exitosa explicando qué es la hemofilia, sus síntomas y tratamiento.</p>
        <a href="https://youtu.be/aOwhzNlkhrU?si=f168Q1oEXsM5MtQu" target="_blank" className="text-blue-600 underline">
          Ver entrevista en YouTube
        </a>
      </section>
    </main>
  );
}
