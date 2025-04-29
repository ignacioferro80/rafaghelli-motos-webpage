// src/componentes/Filtros.jsx
import React from 'react';
import '../styles/filtros.css';

const Filtros = () => {
  return (
    <div className="filtros">
      <button className="filtro">Todos</button>
      <button className="filtro">0km</button>
      <button className="filtro">Usadas</button>
      <button className="filtro">Nuevos ingresos</button>
    </div>
  );
};

export default Filtros;
