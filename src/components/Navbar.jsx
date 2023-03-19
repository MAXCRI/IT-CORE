import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import {Flex,Box,Spacer,Heading,Container,Menu,MenuButton,MenuItem,Button,} from "@chakra-ui/react";


const NavBar = () => {
  return (
    <>
      <Container maxW="150rem" bg="red.100" color="#262626">
        <Flex alignItems="center" gap="1">
          <Box p="3" w="250px" h="120">
            <Heading alignItems="center" size="lg">
            <Menu>
              <Link to={"/catalogue"}>
                <MenuItem
                  as={Button}
                >
                  Productos
                </MenuItem>
              </Link>
                <Link to={`/category/${"Notebooks"}`}>
                  <MenuItem as={Button}>Notebooks</MenuItem>
                </Link>
                <Link to={`/category/${"PC Gamer"}`}>
                  <MenuItem as={Button}>PC Gamer</MenuItem>
                </Link>
            </Menu>
            </Heading>
          </Box>
          <Spacer />
          <Box>
          <Link className="titulo" to={"/"}>IT-CORE</Link>
          </Box>
          <Spacer />
          <Box p="10" w="200px" h="100">
            <Link to={"/cart"}>
              <CartWidget />
            </Link>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default NavBar;
