import {Center, Box, Image } from "@chakra-ui/react";

const Home = () => {
  return (
    <div className="home-container">
      <Center>
        <Box boxSize="xxl">
          <Image
            src="/src/img/tienda.jpeg"/>
        </Box>
      </Center>
    </div>
  );
};

export default Home;
