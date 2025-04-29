// src/componentes/Navbar.jsx
import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/rafaghelli-logo.jpg'; // Importa la imagen del logo


const Navbar = () => {
  return (
    <nav className="navbar">
      <img className="navbar-logo" src={logo}/>
      <ul className="navbar-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acceder</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
