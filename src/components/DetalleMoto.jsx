// src/components/DetalleMoto.jsx
import React, { useState } from 'react';
import '../styles/detalleMoto.css';

/**
 * DetalleMoto Component con galería y botón de WhatsApp fijo
 * Props:
 *  - nombre: string (Nombre de la moto)
 *  - anio: string | number (Año de fabricación)
 *  - kilometros: string | number (Kilometraje)
 *  - precio: string (Precio)
 *  - descripcion: string (Descripción breve)
 *  - galeria: string[] (URLs de las imágenes)
 */
const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=1570741745&text&type=phone_number&app_absent=0';

const DetalleMoto = ({ nombre, anio, kilometros, precio, descripcion, galeria = [] }) => {
  const [imagenSeleccionada, setImagenSeleccionada] = useState(galeria[0] || '');

  return (
    <div className="detalle-moto">
      {/* Columna izquierda: galería de imágenes */}
      <div className="detalle-moto__izq">
        <div className="detalle-moto__imagen-principal">
          {imagenSeleccionada && <img src={imagenSeleccionada} alt={nombre} />}
        </div>
        {galeria.length > 1 && (
          <div className="detalle-moto__thumbnails">
            {galeria.map((img, idx) => (
              <div
                key={idx}
                className={`detalle-moto__thumb ${imagenSeleccionada === img ? 'active' : ''}`}
                onClick={() => setImagenSeleccionada(img)}
              >
                <img src={img} alt={`${nombre} ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Columna derecha: detalles */}
      <div className="detalle-moto__der">
        <h1 className="detalle-moto__titulo">{nombre}</h1>
        <div className="detalle-moto__meta">
          <span className="detalle-moto__anio">Año: {anio}</span>
          <span className="detalle-moto__kilometros">Kilómetros: {kilometros}</span>
          <span className="detalle-moto__precio">Precio: {precio}</span>
        </div>
        {descripcion && (
          <p className="detalle-moto__descripcion">{descripcion}</p>
        )}
        {/* Botón de WhatsApp fijo */}
        <a
          href={WHATSAPP_URL}
          className="detalle-moto__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONSULTAR
        </a>
      </div>
    </div>
  );
};

export default DetalleMoto;