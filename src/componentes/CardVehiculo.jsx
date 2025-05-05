// src/components/CardVehiculo.jsx
import React from 'react';
import '../styles/cardVehiculo.css';

/**
 * CardVehiculo Component mejorado
 * Props:
 *  - foto: string (URL de la imagen del vehículo)
 *  - nombre: string (Nombre del vehículo)
 *  - precio: string (Precio del vehículo)
 *  - kilometros: string (kilometros en km)
 */
const CardVehiculo = ({ id, foto, nombre, precio, kilometros, setIdMotoSeleccionada }) => (
  <div className="card-vehiculo" onClick={() => [setIdMotoSeleccionada(id)]}>
    <div className="card-vehiculo__imagen-container">
      <img src={foto} alt={nombre} className="card-vehiculo__imagen" />
    </div>
    <div className="card-vehiculo__info">
      <h3 className="card-vehiculo__nombre">{nombre}</h3>
      {kilometros && (
        <p className="card-vehiculo__meta">{kilometros} km</p>
      )}
      <span className="card-vehiculo__precio">{precio}</span>
    </div>
  </div>
);

export default CardVehiculo;
