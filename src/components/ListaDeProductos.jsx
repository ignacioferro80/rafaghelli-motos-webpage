// src/componentes/ListaDeProductos.jsx
import React from 'react';
import '../styles/listaDeProductos.css';
import VehicleCard from './VehicleCard';
import { motos } from '../scripts/motos';


const ListaDeProductos = ({ setIdMotoSeleccionada }) => {
  return (
    <div className="lista-productos">
      {motos.map(moto => (
        <VehicleCard
          id={moto.id}
          photo={moto.gallery[0]}
          name={moto.name}
          price={moto.price}
          kilometraje={moto.kilometers}
          setIdMotoSeleccionada={setIdMotoSeleccionada}
        />
      ))}
    </div>
  );
};

export default ListaDeProductos;
