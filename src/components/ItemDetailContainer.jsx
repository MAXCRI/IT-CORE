import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemDetailContainer = () => {
  const [data, setData] = useState([]);


  useEffect(() => {
    const db = getFirestore();
    const prodsCollection = collection(db, "PRODUCTOS");
    getDocs(prodsCollection).then((querySnapshot) => {
      const prods = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setData(prods);
    });
  }, []);

  
  return <ItemDetail prods={data} />;
};

export default ItemDetailContainer;
