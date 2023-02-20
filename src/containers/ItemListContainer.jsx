import React from 'react';
import ItemCount from './ItemCount';
const itemListContainer = ({greeting}) => {

  return (
    <section>
      <p className='saludo'>{greeting}</p>
      <ItemCount/>
    </section>
    
  );
};

export default itemListContainer;