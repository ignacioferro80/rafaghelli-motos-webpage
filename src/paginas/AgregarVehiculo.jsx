// src/paginas/AgregarVehiculo.jsx
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motos } from '../scripts/motos'     // <— importás el array
import "../styles/agregarVehiculo.css";

const AgregarVehiculo = () => {
  const [datos, setDatos] = useState({
    nombre: '',
    anio: '',
    precio: '',
    kilometros: '',
    descripcion: '',
    galeria: [''],
  })
  const navigate = useNavigate()

  const manejarCambio = e => {
    const { name, value } = e.target
    setDatos(d => ({ ...d, [name]: value }))
  }

  const manejarCambioGaleria = (indice, e) => {
    const nuevaGaleria = [...datos.galeria]
    nuevaGaleria[indice] = e.target.value
    setDatos(d => ({ ...d, galeria: nuevaGaleria }))
  }

  const agregarCampoGaleria = () => {
    setDatos(d => ({ ...d, galeria: [...d.galeria, ''] }))
  }

  const removerCampoGaleria = indice => {
    setDatos(d => ({
      ...d,
      galeria: d.galeria.filter((_, i) => i !== indice),
    }))
  }

  const manejarEnvio = e => {
    e.preventDefault()
    // 1) asigno un id automático
    const nuevoId = motos.length + 1
    // 2) hago push al array original
    motos.push({ id: nuevoId, ...datos })
    // 3) redirijo a Home para que recargue la lista
    navigate('/')
  }

  return (
    <form className="contenedor-formulario" onSubmit={manejarEnvio}>
      {/* Nombre */}
      <div className="grupo-formulario">
        <label htmlFor="nombre">Nombre</label>
        <input
          id="nombre"
          name="nombre"
          value={datos.nombre}
          onChange={manejarCambio}
        />
      </div>

      {/* Año, Precio y Kilómetros en fila */}
      <div className="fila-formulario">
        <div className="grupo-formulario">
          <label htmlFor="anio">Año</label>
          <input
            id="anio"
            name="anio"
            type="number"
            value={datos.anio}
            onChange={manejarCambio}
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="precio">Precio</label>
          <input
            id="precio"
            name="precio"
            type="number"
            value={datos.precio}
            onChange={manejarCambio}
          />
        </div>
        <div className="grupo-formulario">
          <label htmlFor="kilometros">Kilómetros</label>
          <input
            id="kilometros"
            name="kilometros"
            type="number"
            value={datos.kilometros}
            onChange={manejarCambio}
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="grupo-formulario">
        <label htmlFor="descripcion">Descripción</label>
        <textarea
          id="descripcion"
          name="descripcion"
          rows="4"
          value={datos.descripcion}
          onChange={manejarCambio}
        />
      </div>

      {/* Galería dinámica */}
      <div className="grupo-formulario">
        <label>Galería (URLs)</label>
        {datos.galeria.map((url, idx) => (
          <div className="campo-galeria" key={idx}>
            <input
              placeholder={`Imagen #${idx + 1}`}
              value={url}
              onChange={e => manejarCambioGaleria(idx, e)}
            />
            <button
              type="button"
              className="btn-remover"
              onClick={() => removerCampoGaleria(idx)}
            >
              &minus;
            </button>
          </div>
        ))}
        <button
          type="button"
          className="btn-agregar"
          onClick={agregarCampoGaleria}
        >
          + Agregar imagen
        </button>
      </div>

      {/* Botón enviar */}
      <button type="submit" className="btn-enviar">
        Agregar vehículo
      </button>
    </form>
  )
}

export default AgregarVehiculo
