import React, {useEffect, useState} from "react";
import "../styles/home.css";
import Navbar from "../componentes/Navbar";
import Filtros from '../componentes/Filtros';
import ListaDeProductos from '../componentes/ListaDeProductos';
import DetalleMoto from '../componentes/DetalleMoto';
import { getMotoById } from '../scripts/getMotoById';
import flechaBlanca from '../assets/flechaBlanca.png';

const Home = () => {

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

    return(
        <div>
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
    )
}

export default Home;