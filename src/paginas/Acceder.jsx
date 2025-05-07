import React, { useState } from "react";
import "../styles/acceder.css";
import logo from '../assets/rafaghelli-logo.png';
import flechaBlanca from '../assets/flechaBlanca.png';
import { useNavigate } from "react-router-dom";


const Acceder = () => {
    
    const navigate = useNavigate();

    const usuario = {
        usuario: "rafaghellimotos",
        contrasenia: "123"
    }

    const [formData, setFormData] = useState({
        usuario: '',
        contrasenia: ''
      });
    
    const handleChange = (e) => {
      setFormData(prev => ({
        ...prev,
        [e.target.name]: e.target.value
      }));
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento por defecto del formulario (recargar la página)

        if (formData.usuario === usuario.usuario && formData.contrasenia === usuario.contrasenia) {
            localStorage.setItem("sesionIniciada", "true");
            navigate("/");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    }

    return (
        <div className="acceso-container">
        <div className="acceso-background"></div> {/* Fondo con opacidad */}
        <button  onClick={() => navigate("/")} className='boton-volver-form'>
            <img src={flechaBlanca} className='boton-imagen'/>
        </button>
            <form className="acceso-form" onSubmit={handleSubmit}>
                <img className="acceso-logo" src={logo}/>
                <span className="acceso-titulo">Acceder</span>
                <input 
                    type="text" 
                    name="usuario"
                    placeholder="Usuario" 
                    className="acceso-input"
                    value={formData.usuario}
                    onChange={handleChange}
                    required 
                />
                <input  
                    type="password" 
                    name="contrasenia"
                    placeholder="Contraseña" 
                    className="acceso-input" 
                    value={formData.contrasenia}
                    onChange={handleChange}
                    required
                />
                <button type="submit" className="acceso-button">Iniciar Sesión</button>
            </form>
        </div>
      );
}

export default Acceder;