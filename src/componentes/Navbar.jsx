// src/componentes/Navbar.jsx
import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/rafaghelli-logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-banner-contenido">
        <img className="navbar-logo" src={logo}/>
        <section className="navbar-banner">
          <h2>Somos Rafaghelli</h2>
          <p>Compra y venta de motos 0km y usadas</p>
        </section>
        <ul className="navbar-links">
          <li><a onClick={() => navigate("/")}>Inicio</a></li>
          <li><a onClick={() => navigate("/acceder")}>Acceder</a></li>
          <li><a >Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
