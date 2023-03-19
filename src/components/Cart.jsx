import {FormControl,FormLabel,Input,FormHelperText,Button,Container,Box,Textarea,Center,Heading,Card,CardHeader,CardBody,CardFooter,Text} from "@chakra-ui/react";
import { useState, useContext } from "react";
import { CartContext } from "../contexts/ShoppingCartContext";
import SendOrder from "./SendOrder";

const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
     
  const handleSubmit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(userName);
    console.log(userEmail);
    alert("Formulario enviado");
  };

  const deleteId = cart.map((item) => {
    return item.id;
  });

  return (
    <>
      <Center bg="#00C9A7" h="100px" color="black">
        <Heading className="subtitulo" as="h1" size="40px" color="blackAlpha.700" >
          Carro de compras
        </Heading>
      </Center>
      {cart.map((item) => {
        return (
          <Container
            key={item.id}
            maxW="container.sm2"
            className="main-catalogue2"
          >
            <Card maxW="sm" m="3rem">
              <CardHeader>
                <Heading size="md">{item.name}</Heading>
              </CardHeader>
              <CardBody>
                <Text as="b">Cantidad: {item.quantity}</Text>
                <Text>Precio: $ {item.price*item.quantity}</Text>
              </CardBody>
              <CardFooter>
                <Button
                  colorScheme="red"
                  onClick={() => console.log("borrado")}
                >
                  Eliminar
                </Button>
              </CardFooter>
            </Card>
          </Container>
        );
      })}
    <SendOrder/>      
    </>
  );
};

export default Cart;
