export default function SobreMi() {
  return (
    <section className="p-6 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>
      <p className="mb-4">
        Soy médico hematólogo con más de 5 años de experiencia en el diagnóstico y tratamiento de enfermedades de la sangre como leucemia, linfomas y anemias.
      </p>
      <h3 className="text-xl font-semibold mb-2">Estudios</h3>
      <ul className="list-disc ml-5 space-y-2 mb-6">
        <li>Especialidad en Hematología realizada en la Universidad Mayor de San Marcos.</li>
        <li>Maestría en Salud Ocupacional en la Universidad San Martín de Porres.</li>
        <li>Subespecialidad en Trasplante de Progenitores Hematopoyéticos en el Hospital Clínico de Barcelona - España.</li>
        <li>Diploma de Especialización en Citometría de Flujo para el Diagnóstico y Monitorización de Hemopatías Malignas e Inmunodeficiencias Primarias en la Universidad de Salamanca – España.</li>
      </ul>

      <div className="flex justify-center items-center gap-4 flex-wrap">
        <img src="/logos/sanmarcos.png" alt="UNMSM" className="w-16 h-auto" />
        <img src="/logos/usmp.png" alt="USMP" className="w-16 h-auto" />
        <img src="/logos/clinic-barcelona.png" alt="Hospital Clínic de Barcelona" className="w-16 h-auto" />
        <img src="/logos/salamanca.png" alt="Universidad de Salamanca" className="w-16 h-auto" />
      </div>
    </section>
  );
}