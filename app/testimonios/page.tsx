
export default function Testimonios() {
  return (
    <section>
      <h2>Testimonios</h2>
      <div>
        <blockquote>"Gracias al Dr. Juárez recuperé mi salud, su atención fue impecable y humana."</blockquote>
        <blockquote>"Un gran profesional, explicó todo el tratamiento paso a paso. Muy recomendable."</blockquote>
      </div>
      <p>Video testimonial:</p>
      <iframe
        src="https://www.facebook.com/plugins/video.php?href=https://www.facebook.com/share/v/16qSeiZGkf/"
        width="500" height="280" style={{ border: 'none', overflow: 'hidden' }}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen={true}>
      </iframe>
    </section>
  )
}
