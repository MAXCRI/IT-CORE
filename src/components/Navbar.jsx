import React from 'react'
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const Navbar = () => {
  return (
    <nav>
        <div>
            <ul>
            <div class="float-left"><CartWidget/></div>
              <li><Link to={"/"} href="#">Home</Link></li>
              <li><Link to={"/Productos"} href="#">Productos</Link></li>
              <li><Link to={`category/${"Notebooks"}`}href="#">Notebooks</Link></li>
              <li><Link to={`category/${"PC Gamer"}`}href="#">PC Gamer</Link></li>  
            </ul>
        </div>
        <h1>IT - CORE</h1>
        <h3>Lo queres Lo tenes, productos de it a tu medida</h3>
        
    </nav>
  );
}

export default Navbar;