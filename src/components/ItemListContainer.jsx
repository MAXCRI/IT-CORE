import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import {collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const prodsCollection = collection(db, "PRODUCTOS");
    getDocs(prodsCollection).then((querySnapshot) => {
      const prods = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setProds(prods);
    });
  }, []);

  const catFilter = prods.filter((prop) => prop.category === category);

  return (
    <div>
      <Center bg="#00C9A7" h="100px" color="blackAlpha.700">
        <Heading as="h2" size="40px">
          Todos los productos de tecnología que necesitas, a tu medida
        </Heading>
      </Center>
      {category ? <ItemList prods={catFilter} /> : <ItemList prods={prods} />}
    </div>
  );
};

export default ItemListContainer;
