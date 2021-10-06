import axios from "axios";
import { useState, useEffect } from "react";
import { Image, HStack, Box, Button, Container, Text } from "@chakra-ui/react";

const Curtidas = (props) => {
  const [curtidas, setCurtidas] = useState([]);

  useEffect(() => {
    getMatches();
  }, []);

  const getMatches = async () => {
    try {
      const res = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-faria-maryam/matches"
      );
      setCurtidas(res.data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  const clearMatches = async () => {
    try {
      await axios.put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-faria-maryam/clear"
      );
      getMatches();
    } catch (error) {
      console.log(error);
    }
  };

  const listaCurtidas = curtidas.map((curtida) => {
    return (
      <HStack
        boxShadow="base"
        p="6"
        rounded="md"
        m={2}
        bg="#825199"
        color="black"
        boxSize="100%"
      >
        <Image
          p={4}
          objectFit="cover"
          borderRadius="full"
          boxSize="130px"
          src={curtida.photo}
          alt=""
        />
        <Box>
          <Text fontSize="xl">
            {curtida.name} - {curtida.age}{" "}
          </Text>
        </Box>
      </HStack>
    );
  });
  return (
    <Container>
      {listaCurtidas}
      <HStack justifyContent="space-around" p={5}>
        <Button onClick={clearMatches}>Limpar Matches</Button>
        <Button onClick={() => props.changePage("home")}>Voltar</Button>
      </HStack>
    </Container>
  );
};

export default Curtidas;
