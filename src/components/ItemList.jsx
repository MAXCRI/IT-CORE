import Item from "./Item";
import { Container } from "@chakra-ui/react";
const ItemList = ({ prods }) => {
  return (
    <>
      <Container maxW="container.sm" className="main-catalogue">
        {prods?.map((prop) => (
          <Item
            key={prop.id}
            id={prop.id}
            nombre={prop.nombre}
            description={prop.descripcion}
            precio={prop.precio}
            stock={prop.stock}
            category={prop.category}
          />
        ))}
      </Container>
    </>
  );
};

export default ItemList;
