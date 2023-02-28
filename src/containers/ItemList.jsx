import React from 'react'
import Item from './Item'

const ItemList = ({datos}) => {
  return (
    <>
    <div>
    {datos?.map((prod) => (
        <Item
        key={prod.id}
        id={prod.id}
        nombre={prod.nombre}
        precio={prod.precio}
        stock={prod.stock}
        category={prod.category}
        />
        
    ))}
    
    </div>
    </>
  )
}

export default ItemList