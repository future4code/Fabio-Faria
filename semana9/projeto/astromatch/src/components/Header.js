import { Button, HStack, Image } from "@chakra-ui/react";
import astromatch from "./images/astromatch.jpg";

const Header = (props) => {
  return (
    <HStack
      display="flex"
      boxShadow="base"
      rounded="md"
      justifyContent="space-around"
      alignItems="center"
      w="100%"
      h="100px"
      p={6}
      color="white"
      bg="#fff"
    >
      <Image boxSize="150px" objectFit="contain" src={astromatch} alt="Astro" />
      <Button
        colorScheme="teal"
        size="sm"
        onClick={() => props.changePage("curtidas")}
      >
        Curtidas
      </Button>
    </HStack>
  );
};

export default Header;
