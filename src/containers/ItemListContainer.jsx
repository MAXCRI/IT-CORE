import React from 'react';
import { useEffect } from 'react';
import ItemList from './ItemList';
import Base from '../base.json'
import { useParams } from 'react-router-dom';



  const ItemListContainer = () => {
    const {category}= useParams();

    
    const getBase = () =>{
        return new Promise((resolve, reject) => {
            if(Base.length === 0) {
                reject(new Error("No hay Stock de Productos"));
            }
            setTimeout(()=> {
                resolve(Base);
            },2000);
        });
        
    };
      useEffect(()=> {
        async function fetchingBase(){
          try{
              const baseFetched = await getBase();
              console.log(baseFetched);
          } catch (err){ 
              console.log(err)
          }
      }
      fetchingBase();
      },[]);

    
    
    const catFilter = Base.filter((prod) => prod.category === category);
  return (
    <div>

      <h1>Productos</h1>

      {category? <ItemList datos={catFilter}/> : <ItemList datos={Base}/>}
      
    
    </div>
      
  );
};

export default ItemListContainer;