import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='container'>
      <img src={logo} alt="" className='logo' />
      <ul>
        <li>Inicio</li>
        <li>Sobre nosotros</li>
        <li>Proyectos</li>
        <li>Noticias</li>
        <li>Tools</li>
        <li><button className='btn'>Contacto</button></li>
        <li>Placeholder para buscador</li>
      </ul>
    </nav>
  )
}

export default Navbar
