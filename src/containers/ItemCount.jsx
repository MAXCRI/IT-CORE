import { useState,useContext } from 'react';
import { CartContex } from '../contexts/ShoppingCartContex';
import { Link } from 'react-router-dom';


const ItemCount = ({stock,id, precio,nombre}) => {
  const [cart, setCart] = useContext(CartContex);
  const [count, seTCount ] = useState(1);

  const sumar =() => {
    seTCount(count + 1);
  }
  const restar =() => {
    seTCount(count - 1)
  };

  const addTocart = ()=>{

    setCart ((CurrItems)=>{
      const isItemFound = CurrItems.map((item) => item.id === id);
      if(isItemFound){
        return CurrItems.map((item)=> {
          if(item.id===id){
            return{...item,quantity: item.quantity + count}
          }else{
            return item;
          }
        });
      }else{
        return [...CurrItems,{id, quantity: count, precio, nombre}];
      }

    })
  }
return(

    <div>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button className='btn btn-secondary' onClick={()=> addTocart}>comprar</button>

    </div>
);

};

export default ItemCount;