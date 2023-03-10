import React from 'react'
import { Link } from 'react-router-dom'



const Item = ({id,nombre,precio}) => {
    return (
      <div className=' item2'>
      <div className='card item'  key={id}>
      <h2>Equipo: {nombre}</h2>
      <p>Precio: {precio}</p>
      <button className='btn btn-secondary'><Link className='link' to={`/item/${id}`}>Detalle</Link></button>
      </div>
      </div>
    )
  }
  

export default Item