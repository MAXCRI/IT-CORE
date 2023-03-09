import React, {useEffect} from 'react'
import ItemDetail from './ItemDetail';
import Base from '../Base.json'
import {useParams} from 'react-router-dom';


const ItemDetailContainer = () => {
    const {id} = useParams();
    

    const getBase = () =>{
        return new Promise((resolve, reject) => {
            if(Base.length === 0) {
                reject(new Error("No hay Stock de Productos"));
            }
            setTimeout(()=> {
                const itemFilter = Base.filter((prod) => prod.id === id);
                resolve(itemFilter);
            },2000);
        });
        
    };
      useEffect(()=>{
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
  


  return  <ItemDetail datos={Base}/> ;
    
    

    
  };

  
export default ItemDetailContainer;

