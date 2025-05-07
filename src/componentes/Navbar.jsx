// src/componentes/Navbar.jsx
import React, { useEffect, useState } from 'react';
import '../styles/navbar.css';
import logo from '../assets/rafaghelli-logo.png';
import { useNavigate } from "react-router-dom";

const Navbar = () => {

  const navigate = useNavigate();

  const [sesionIniciada, setSesionIniciada] = useState(false);

  useEffect(() => {
    const sesion = localStorage.getItem("sesionIniciada");
    if (sesion) {
      setSesionIniciada(true);
    }
  }, []);

  const handleCierreSesion = () => {
    localStorage.removeItem("sesionIniciada");
    setSesionIniciada(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-banner-contenido">

        <img className="navbar-logo" src={logo}/>

        <section className="navbar-banner">
          <h2>Somos Rafaghelli</h2>
          <p>Compra y venta de motos 0km y usadas</p>
        </section>

        {sesionIniciada && (
          <div className='navbar-funciones-personal'>
              <div className="dropdown-navbar">
                <button className="dropdown-navbar-title">Funciones de personal</button>
                <div className="dropdown-navbar-content">
                  <a onClickCapture={() => navigate("/agregar-vehiculo")}>Agregar vehículo</a>
                  <a onClickCapture={() => handleCierreSesion()}>Cerrar sesión</a>
                </div>
              </div>
          </div>
        )}

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
