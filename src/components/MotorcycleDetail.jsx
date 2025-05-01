// src/components/MotorcycleDetail.jsx
import React, { useState } from 'react';
import '../styles/motorcycleDetail.css';

/**
 * MotorcycleDetail Component con galería y botón de WhatsApp fijo
 * Props:
 *  - name: string (Nombre de la moto)
 *  - year: string | number (Año de fabricación)
 *  - kilometers: string | number (Kilometraje)
 *  - price: string (Precio)
 *  - description: string (Descripción breve)
 *  - gallery: string[] (URLs de las imágenes)
 */
const WHATSAPP_URL = 'https://api.whatsapp.com/send/?phone=1570741745&text&type=phone_number&app_absent=0';

const MotorcycleDetail = ({ name, year, kilometers, price, description, gallery = [] }) => {
  const [selectedImage, setSelectedImage] = useState(gallery[0] || '');

  return (
    <div className="motorcycle-detail">
      {/* Columna izquierda: galería de imágenes */}
      <div className="motorcycle-detail__left">
        <div className="motorcycle-detail__main-image">
          {selectedImage && <img src={selectedImage} alt={name} />}
        </div>
        {gallery.length > 1 && (
          <div className="motorcycle-detail__thumbnails">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                className={`motorcycle-detail__thumb ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`${name} ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Columna derecha: detalles */}
      <div className="motorcycle-detail__right">
        <h1 className="motorcycle-detail__title">{name}</h1>
        <div className="motorcycle-detail__meta">
          <span className="motorcycle-detail__year">Año: {year}</span>
          <span className="motorcycle-detail__kilometers">Kilómetros: {kilometers}</span>
          <span className="motorcycle-detail__price">Precio: {price}</span>
        </div>
        {description && (
          <p className="motorcycle-detail__description">{description}</p>
        )}
        {/* Botón de WhatsApp fijo */}
        <a
          href={WHATSAPP_URL}
          className="motorcycle-detail__btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          CONSULTAR
        </a>
      </div>
    </div>
  );
};

export default MotorcycleDetail;