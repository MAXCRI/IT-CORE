import React from 'react'
import { Link } from 'react-router-dom';
import carrito from '../img/shopping-cart.gif'
import { useContext } from 'react';
import { CartContex } from '../contexts/ShoppingCartContex';

const CartWidget = () => {

  const [cart, setCart] = useContext(CartContex);
  const quantity = cart.reduce((acc, curr) => {
    return acc = acc.quantity
  },0);

  return (
    <div>
    <span className='carrito'><Link to={`cart/`}href="#"><img src={carrito} /></Link></span>
    <span className='carrito'>{quantity}</span>
    </div>
  );
};

export default CartWidget;