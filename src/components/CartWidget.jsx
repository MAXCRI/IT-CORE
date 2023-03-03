import React from 'react'
import { Link } from 'react-router-dom';
import carrito from '../img/shopping-cart.gif'


const CartWidget = () => {
  return (
    <div>
    <span className='carrito'><Link to={`cart/`}href="#"><img src={carrito} /></Link></span>
    <span className='carrito'>10</span>
    </div>
  );
};

export default CartWidget;