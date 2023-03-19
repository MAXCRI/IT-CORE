import {Container,Heading,Stack,Input,Button,Text,Center,FormControl,FormLabel,} from "@chakra-ui/react";
  import { collection, getFirestore, addDoc } from "firebase/firestore";
  import { useState } from "react";
  
  const SendOrder = () => {
    const [orderId, setOrderId] = useState(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (name === "" || email === "") {
        alert("campo vacio");
      } else {
        addDoc(ordersCollection, order).then(({ id }) => setOrderId(id));
      }
      setEmail(" ");
    };
  
    const db = getFirestore();
    const ordersCollection = collection(db, "orden");
  
    const order = {
      name,
      email,
    };
  
    return (
      <div>
        <Center>
          <Heading as="h1" size="40px" color="blackAlpha.700">Enviar Orden</Heading>
        </Center>
  
        <Container>
          <FormControl>
            <form onSubmit={handleSubmit}>
              <FormLabel>Nombre</FormLabel>
              <Input size="lg" onChange={(e) => setName(e.target.value)} />
              <FormLabel>Correo</FormLabel>
              <Input size="lg" onChange={(e) => setEmail(e.target.value)} />
              
              <Button colorScheme="green" type="submit" m={5}>
                Enviar
              </Button>
            </form>
          </FormControl>
        </Container>
        <Center>
          <Text as="b" m={3} fontSize="xl">
            Numero de Orden :{" "}
          </Text>
          <Text as="mark" fontSize="2xl">
            {orderId}
          </Text>
        </Center>
      </div>
    );
  };
  
  export default SendOrder;
  