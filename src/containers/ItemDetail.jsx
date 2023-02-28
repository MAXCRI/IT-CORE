import React from 'react'
import { useParams } from 'react-router-dom';
import itemCount from './ItemCount'


const ItemDetail = ({datos}) => {
  const {id} = useParams();
   
  const itemFilter = datos.filter((prod) => prod.id == id);
  
  return(
    <>
    {itemFilter.map((prod) => (
      <div key={prod.id}><br />
        <h2>Nombre:{prod.nombre}</h2>
        <h2>Descripcion:{prod.descripcion}</h2>
        <h2>Cetegory:{prod.category}</h2>
        <h2>Stock:{prod.stock}</h2>
        <h2>Precio:{prod.precio}</h2>
        <div><itemCount/></div>
      </div>
      
      
    ))}
    </>
    
  )

};

export default ItemDetail


