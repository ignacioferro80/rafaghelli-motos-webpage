// src/componentes/ListaDeProductos.jsx
import React from 'react';
import '../styles/listaDeProductos.css';
import VehicleCard from './VehicleCard';
import { motos } from '../assets/motos';


const ListaDeProductos = () => {
  return (
    <div className="lista-productos">
      {motos.map(moto => (
        <VehicleCard
          key={moto.id}
          photo={moto.gallery[0]}
          name={moto.name}
          price={moto.price}
        />
      ))}
    </div>
  );
};

export default ListaDeProductos;
