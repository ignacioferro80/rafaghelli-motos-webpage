// src/App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './paginas/Home';
import Acceder from './paginas/Acceder';
import AgregarVehiculo from './paginas/AgregarVehiculo';
import './App.css';

function App() {

    const [sesionIniciada, setSesionIniciada] = useState(false);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>

          <Route path="/acceder" element={<Acceder />}/>

          <Route path="/agregar-vehiculo" element={<AgregarVehiculo />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
