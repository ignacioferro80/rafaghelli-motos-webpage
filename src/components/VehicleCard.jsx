// src/components/VehicleCard.jsx
import React from 'react';
import '../styles/vehicleCard.css';

/**
 * VehicleCard Component mejorado
 * Props:
 *  - photo: string (URL de la imagen del vehículo)
 *  - name: string (Nombre del vehículo)
 *  - price: string (Precio del vehículo)
 *  - kilometraje: string (Kilometraje en km)
 */
const VehicleCard = ({ id, photo, name, price, kilometraje, setIdMotoSeleccionada }) => (
  <div className="vehicle-card" onClick={() => [setIdMotoSeleccionada(id), console.log(name)]}>
    <div className="vehicle-card__image-container">
      <img src={photo} alt={name} className="vehicle-card__image" />
    </div>
    <div className="vehicle-card__info">
      <h3 className="vehicle-card__name">{name}</h3>
      {kilometraje && (
        <p className="vehicle-card__meta">{kilometraje} km</p>
      )}
      <span className="vehicle-card__price">{price}</span>
    </div>
  </div>
);

export default VehicleCard;
