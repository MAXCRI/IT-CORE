import { useState } from 'react';

const ItemCount = () => {
  const [couter, seTCouter ] = useState(0);
  
  const sumar =() => {
    seTCouter(couter + 1);
  };
  const restar =() => {
    seTCouter(couter - 1);
  };
return(

    <div>
        <p>{couter}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>

    </div>
);

};

export default ItemCount;