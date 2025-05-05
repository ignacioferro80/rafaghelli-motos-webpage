// src/componentes/ListaDeProductos.jsx
import React, { useState, useEffect } from 'react';
import '../styles/listaDeProductos.css';
import CardVehiculo from './CardVehiculo';
import { motos } from '../scripts/motos';


const ListaDeProductos = ({ setIdMotoSeleccionada, estado, marca }) => {

  const [motosEstadoActual, setMotosEstadoActual] = useState(motos);

  useEffect(() => {
    if (estado === "Nuevas") {
      setMotosEstadoActual(motos.filter(moto => moto.kilometros === "0"));
    }
    else if (estado === "Usadas") {
      setMotosEstadoActual(motos.filter(moto => moto.kilometros !== "0"));
    } else {
      setMotosEstadoActual(motos);
    }
  }, [estado]);

  return (
    <div className="lista-productos">
      {motosEstadoActual.map(moto => (
        (marca === "Todos" || moto.nombre === marca) &&
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
