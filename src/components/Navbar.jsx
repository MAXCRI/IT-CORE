import React from 'react'
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
        <div>
            <ul>
                <li><a href="#">Quienes somos</a></li>
                <li><a href="#">Servicios</a></li>
                <li><a href="#">Productos</a></li>
            </ul>
        </div>
        <h1>IT - CORE</h1>
        <h3>Lo queres Lo tenes, productos de it a tu medida</h3>
        <CartWidget/>
    </nav>
  );
}

export default Navbar;