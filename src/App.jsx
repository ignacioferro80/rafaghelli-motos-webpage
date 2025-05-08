// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import Acceder from "./paginas/Acceder";
import AgregarVehiculo from "./paginas/AgregarVehiculo";
import "./App.css";
import DetalleMoto from "./paginas/DetalleMoto";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acceder" element={<Acceder />} />
          <Route path="/agregar-vehiculo" element={<AgregarVehiculo />} />
          <Route path="/detalle-moto/:id" element={<DetalleMoto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
