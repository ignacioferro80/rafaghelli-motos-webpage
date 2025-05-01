// src/componentes/Navbar.jsx
import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/rafaghelli-logo.png';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-banner-contenido">
        <img className="navbar-logo" src={logo}/>
        <section className="navbar-banner">
          <h2>Somos Rafaghelli</h2>
          <p>Compra y venta de motos 0km y usadas</p>
        </section>
        <ul className="navbar-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acceder</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
