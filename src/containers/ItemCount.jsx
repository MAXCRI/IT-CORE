import { useState } from 'react';

const ItemCount = () => {
  const [couter, seTCouter ] = useState(1);
  
  const sumar =() => {
    seTCouter(couter + 1);
    if(couter == 5){alert("Supero estok");
    };
  };
  
  const restar =() => {
    seTCouter(couter - 1);
    if(couter == 0){alert("Se agoto el estok");
        };
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