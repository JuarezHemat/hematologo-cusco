
export default function ServiciosPage() {
  return (
    <main className="p-8 space-y-6">
      <h1 className="text-3xl font-bold text-red-800">Servicios Médicos Especializados</h1>

      <section>
        <h2 className="text-xl font-semibold">🔬 Diagnóstico y tratamiento de enfermedades hematológicas</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Leucemias agudas y crónicas</li>
          <li>Linfomas (Hodgkin y no Hodgkin)</li>
          <li>Mieloma múltiple</li>
          <li>Anemias ferropénicas, megaloblásticas y hemolíticas</li>
          <li>Trombocitopenias y púrpura trombocitopénica idiopática (PTI)</li>
          <li>Hemofilia y trastornos de la coagulación</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🧪 Citometría de flujo</h2>
        <p>Diagnóstico especializado de enfermedades oncohematológicas, inmunodeficiencias y enfermedades linfoproliferativas, mediante análisis de células en tiempo real.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🌱 Trasplante de progenitores hematopoyéticos</h2>
        <p>Asesoramiento y manejo pre y post trasplante, para pacientes candidatos a terapias celulares avanzadas.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">👨‍⚕️ Segunda opinión médica</h2>
        <p>Evaluación profesional y confiable sobre diagnósticos o tratamientos propuestos, ideal para pacientes que buscan mayor claridad o tranquilidad antes de tomar decisiones médicas importantes.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">🧭 Medicina ocupacional y evaluación de riesgo hematológico</h2>
        <p>Evaluación de trabajadores con exposición a agentes de riesgo hematológico, elaboración de informes y control médico en el ámbito ocupacional.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">📊 Interpretación de exámenes hematológicos</h2>
        <p>Lectura experta y explicación de hemogramas, mielogramas, biopsias de médula ósea, pruebas de coagulación y otros estudios especializados.</p>
      </section>
    </main>
  );
}
