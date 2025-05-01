// src/App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Filtros from './components/Filtros';
import ListaDeProductos from './components/ListaDeProductos';
import './App.css';
import MotorcycleDetail from './components/MotorcycleDetail';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Banner />
      <Filtros />
      <ListaDeProductos /> 
    </div>
  );
}

export default App;
