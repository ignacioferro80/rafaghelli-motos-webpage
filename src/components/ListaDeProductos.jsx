// src/componentes/ListaDeProductos.jsx
import React from 'react';
import '../styles/listaDeProductos.css';
import { Card } from './Card';

const productos = [
  { id: 1, nombre: "Honda", precio: "$1200" , kilometraje: "10000"},
  { id: 2, nombre: "Harley", precio: "$3500", kilometraje: "5000" },
  { id: 3, nombre: "Ducati", precio: "$2200", kilometraje: "8000" },
  { id: 4, nombre: "Yamaha", precio: "$1500", kilometraje: "12000" },
  { id: 5, nombre: "Kawasaki", precio: "$1800", kilometraje: "7000" },
  { id: 6, nombre: "Suzuki", precio: "$1600", kilometraje: "9000" },
  { id: 7, nombre: "BMW", precio: "$3000", kilometraje: "4000" },
  { id: 8, nombre: "Triumph", precio: "$2500", kilometraje: "6000" },
  { id: 9, nombre: "KTM", precio: "$2000", kilometraje: "11000" },
  { id: 10, nombre: "Aprilia", precio: "$2800", kilometraje: "3000" },
];

const ListaDeProductos = () => {
  return (
    <div className="lista-productos">
      {productos.map((producto) => (
        <div key={producto.id} className="producto">
          <h3>{producto.nombre}</h3>
          <p>{producto.precio}</p>
        </div>
      ))}
    </div>
  );
};

export default ListaDeProductos;
