import {Center,Card,CardBody,Image,Stack,Heading,Text,Button,CardFooter,Divider,Alert,} from "@chakra-ui/react";
import gamer from "../img/gamer.jpg";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";
import { useEffect, useState } from "react";
import {doc, getDoc, getFirestore} from "firebase/firestore";

const ItemDetail = ({ prods }) => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    const prodRef = doc(db, "PRODUCTOS", `${id}`);

    getDoc(prodRef).then((snapshot) => {
      if (snapshot.exists()) {
        setProducto(snapshot.data());
      } else {
        console.log("No such document!");
      }
    });
  }, []);

  const datoFilter = prods.filter((prop) => prop.id == id);

  return (
    <>
      {datoFilter.map((prop) => (
        <div key={prop.id}>
          <Center p="1rem">
            <Card className="card-main">
              <CardBody>
                <Image borderRadius="lg" src={gamer} />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{prop.nombre}</Heading>
                  <Text color="blue.800" fontSize="l">
                    Descripcion: {prop.descripcion}
                  </Text>
                  <Text color="blue.800" fontSize="l">
                    Categoria: {prop.category}
                  </Text>
                  <Text color="black" fontSize="xl">
                    Stock: {prop.stock}
                  </Text>
                  <Text color="green" fontSize="xl">
                    Precio: $ {prop.precio}
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter className="card-footer">
                <ItemCount
                  stock={prop.stock}
                  id={prop.id}
                  price={prop.precio}
                  name={prop.nombre}
                />
              </CardFooter>
            </Card>
          </Center>
        </div>
      ))}
    </>
  );
};

export default ItemDetail;
