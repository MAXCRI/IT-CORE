import React, { useEffect, useParams } from 'react'
import ItemDetail from './ItemDetail';
import Base from '../Base.json'



const ItemDetailContainer = () => {
    const {id} = useParams();
   
    
    const getBase = () =>{
        return new Promise((resolve, reject) => {
            if(Base.length === 0) {
                reject(new Error("No hay Stock de Productos"));
            }
            setTimeout(()=> {
                const CatFilter = Base.filter((prod) => prod.id === id);
                resolve(CatFilter);
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


  return(
    <div>
    
    <ItemDetail datos={Base}/>
    </div>

  ) 
    
  };

  
export default ItemDetailContainer;