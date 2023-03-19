import React from "react";
import gamerNotebook from "../img/gamerNotebook.jpeg";
import {Center,Card,CardBody,Image,Heading,Text,Divider,Stack,CardFooter,Button,} from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Item = ({ id, nombre, stock, category }) => {
  return (
    <div>
      <div key={id}>
        <Center p="1rem">
          <Card className="card-main">
            <CardBody>
              <Image borderRadius="lg" src={gamerNotebook} />
              <Stack mt="6" spacing="3">
                <Heading size="md">{nombre}</Heading>
                <Text color="blue.800" fontSize="l">
                  Category: {category}
                </Text>
                <Text color="red.600" fontSize="xl">
                  Stock: {stock}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter className="card-footer">
              <Center className="btn-center">
                <Button variant="solid" colorScheme="green">
                  <Link to={`/item/${id}`}>Detalle</Link>
                </Button>
              </Center>
            </CardFooter>
          </Card>
        </Center>
      </div>
    </div>
  );
};

export default Item;
