// src/componentes/ListaDeProductos.jsx
import React from 'react';
import '../styles/listaDeProductos.css';
import CardVehiculo from './CardVehiculo';
import { motos } from '../scripts/motos';


const ListaDeProductos = ({ setIdMotoSeleccionada }) => {
  return (
    <div className="lista-productos">
      {motos.map(moto => (
        <CardVehiculo
          id={moto.id}
          foto={moto.galeria[0]}
          nombre={moto.nombre}
          precio={moto.precio}
          kilometros={moto.kilometros}
          setIdMotoSeleccionada={setIdMotoSeleccionada}
        />
      ))}
    </div>
  );
};

export default ListaDeProductos;
