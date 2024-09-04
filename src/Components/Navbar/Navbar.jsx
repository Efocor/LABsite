import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="" />
      <ul>
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Proyectos</li>
        <li>Noticias</li>
        <li>Tools</li>
        <li>Contacto</li>
        <li>Placeholder para buscador</li>
      </ul>
    </nav>
  )
}

export default Navbar
