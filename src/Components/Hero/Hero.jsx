import React from 'react'
import './Hero.css'
import flecha from '../../assets/flecha.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Ponte en contacto</h1>
        <p>Las oportunidades para conectarse con  este laboratorio son abundantes.  Desde simplemente pasar por aquí para charlar hasta unirse al grupo a tiempo completo, existe un nivel de participación que se adaptará a sus necesidades.</p>
        <button className='btn'>Cargar más <img src={flecha} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero
