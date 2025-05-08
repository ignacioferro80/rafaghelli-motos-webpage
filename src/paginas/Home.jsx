import React, { useEffect, useState } from "react";
import "../styles/home.css";
import Navbar from "../componentes/Navbar";
import Filtros from "../componentes/Filtros";
import ListaDeProductos from "../componentes/ListaDeProductos";
import { useNavigate } from "react-router-dom";
import { getMotoById } from "../scripts/getMotoById";

const Home = () => {

  const navigate = useNavigate();

  // Moto seleccionada
  const [idMotoSeleccionada, setIdMotoSeleccionada] = useState(null);

  // Filtros seleccionados
  const [estado, setEstado] = useState("Todos");
  const [marca, setMarca] = useState("Todos");

  useEffect(() => {
    if (idMotoSeleccionada) {
      navigate(`/detalle-moto/${idMotoSeleccionada}`);
    }
  }, [idMotoSeleccionada]);

  return (
    <div>
      <div>
        <Navbar />
        <Filtros setEstado={setEstado} setMarca={setMarca} />
        <ListaDeProductos
          setIdMotoSeleccionada={setIdMotoSeleccionada}
          estado={estado}
          marca={marca}
        />
      </div>
    </div>
  );
};

export default Home;
