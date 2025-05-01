// src/App.jsx
import React, {useEffect, useState} from 'react';
import Navbar from './components/Navbar';
import Filtros from './components/Filtros';
import ListaDeProductos from './components/ListaDeProductos';
import './App.css';
import MotorcycleDetail from './components/MotorcycleDetail';
import { getMotoById } from './scripts/getMotoById';
import flechaBlanca from './assets/flechaBlanca.png';

function App() {

  const [idMotoSeleccionada, setIdMotoSeleccionada] = useState(null);
  const [motoSeleccionada, setMotoSeleccionada] = useState(null);

  useEffect(() => {
    if (idMotoSeleccionada) {
      const moto = getMotoById(idMotoSeleccionada);
      setMotoSeleccionada(moto);
    } else {
      setMotoSeleccionada(null);
    }
  }, [idMotoSeleccionada]);

  console.log('Moto seleccionada:', motoSeleccionada);

  return (
    <div className="app">

      {motoSeleccionada ? (

        <div>
          <Navbar />
          <button  onClick={() => setIdMotoSeleccionada(null)} className='boton-volver'>
            <img src={flechaBlanca} className='boton-imagen'/>
          </button>

          <MotorcycleDetail 
            name={motoSeleccionada.name} 
            year = {motoSeleccionada.year} 
            kilometers = {motoSeleccionada.kilometers}
            price = {motoSeleccionada.price}
            description = {motoSeleccionada.description}
            gallery = {motoSeleccionada.gallery}
          />
        </div>

      ) : (

        <div>
          <Navbar />
          <Filtros />
          <ListaDeProductos setIdMotoSeleccionada={setIdMotoSeleccionada} />
        </div>
      )}
    </div>
  );
}

export default App;
