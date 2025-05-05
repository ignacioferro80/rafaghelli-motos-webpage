// src/componentes/Filtros.jsx
import React, { useState } from 'react';
import '../styles/filtros.css';

const Filtros = ({ setEstado, setMarca }) => {

  const marcas = ["Honda", "Harley", "Ducati", "Yamaha", "Kawasaki", "Suzuki", "BMW", "Triumph", "KTM", "Aprilia"];
  const [estadoBoton, setEstadoBoton] = useState("Estado");
  const [marcaBoton, setMarcaBoton] = useState("Marcas");

  return (
    <div className="filtros">
      <button onClick={() => { setEstado("Todos"); setMarca("Todos"); setEstadoBoton("Estado"); setMarcaBoton("Marca")}} className="filtro">Todos</button>

      <div className="dropdown">
        <button className="filtro">{estadoBoton}</button>
        <div className="dropdown-content">
          <a onClick={() => { setEstado('Nuevas'); setEstadoBoton("Nuevas");}}>Nuevas</a>
          <a onClick={() => { setEstado('Usadas'); setEstadoBoton("Usadas");}}>Usadas</a>
        </div>
      </div>

      <div className="dropdown">
        <button className="filtro">{marcaBoton}</button>
        <div className="dropdown-content">
          {marcas.sort().map((marca) => (
            <a key={marca} onClick={() => { setMarca(marca); setMarcaBoton(marca); }}>{marca}</a>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Filtros;
