
import Image from 'next/image'

export default function Contacto() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Contáctame</h2>
        <p>Dirección: <a href="https://goo.gl/maps/ypSPEN4gvepNmfPi8?g_st=aw" target="_blank">
          Av la Cultura 1320B – Of 405 (4to piso)- Edificio Regional</a></p>
        <p>
          <Image src="/whatsapp.png" alt="WhatsApp" width={18} height={18} style={{ verticalAlign: 'middle' }} />
          <a href="https://wa.me/51988115128" target="_blank" style={{ marginLeft: '0.5rem' }}>988115128</a>
        </p>
      </div>
    </div>
  )
}
