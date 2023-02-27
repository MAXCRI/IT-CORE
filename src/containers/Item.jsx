import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({id,nombre,precio}) => {
    return (
      <div key={id}>
      <h2>Equipo: {nombre}</h2>
      <p>Precio: {precio}</p>
      <li><Link to={`/item/${id}`}>Detalle</Link></li>
      </div>
    )
  }
  

export default Item