// src/App.jsx
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Filtros from './components/Filtros';
import ListaDeProductos from './components/ListaDeProductos';
import './App.css';
import DetalleMoto from './components/DetalleMoto';
import { getMotoById } from './scripts/getMotoById';
import flechaBlanca from './assets/flechaBlanca.png';

function App() {

  // Moto seleccionada
  const [idMotoSeleccionada, setIdMotoSeleccionada] = useState(null);
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  // Filtros seleccionados
  const [estado, setEstado] = useState("Todos");
  const [marca, setMarca] = useState("Todos");

  useEffect(() => {
    if (idMotoSeleccionada) {
      const moto = getMotoById(idMotoSeleccionada);
      setMotoSeleccionada(moto);
    } else {
      setMotoSeleccionada(null);
    }
  }, [idMotoSeleccionada]);

  return (
    <div className="app">

      {motoSeleccionada ? (

        <div>
          <Navbar />
          <button  onClick={() => setIdMotoSeleccionada(null)} className='boton-volver'>
            <img src={flechaBlanca} className='boton-imagen'/>
          </button>

          <DetalleMoto 
            nombre={motoSeleccionada.nombre} 
            anio = {motoSeleccionada.anio} 
            kilometros = {motoSeleccionada.kilometros}
            precio = {motoSeleccionada.precio}
            descripcion = {motoSeleccionada.descripcion}
            galeria = {motoSeleccionada.galeria}
          />
        </div>

      ) : (

        <div>
          <Navbar />
          <Filtros setEstado={setEstado} setMarca={setMarca} />
          <ListaDeProductos setIdMotoSeleccionada={setIdMotoSeleccionada} estado={estado} marca={marca}/>
        </div>
      )}
    </div>
  );
}

export default App;
