import React from 'react'
import { useParams } from 'react-router-dom';

const ItemDetail = ({datos}) => {
  const {id} = useParams();
   
  const itemFilter = datos.filter((prod) => prod.id === id);
  
  return(
    <>
    {itemFilter.map((prod)=>(
      <div key={id}>
        <h2>Nombre:{prod.nombre}</h2>
        <h2>Descripcion:{prod.descripcion}</h2>
        <h2>Cetegory:{prod.category}</h2>
        <h2>Stock:{prod.stock}</h2>
        <h2>Precio:{prod.procio}</h2>
      </div>
      
    ))}
    </>
    
  )


};

export default ItemDetail


