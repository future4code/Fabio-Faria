import { IconButton, Image, HStack, Text, Container } from "@chakra-ui/react";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const ProfileCard = (props) => {
  return (
    <Container>
      <Image
        boxShadow="base"
        p="6"
        m="4"
        rounded="md"
        borderRadius="full"
        boxSize={["80%", "100%"]}
        objectFit="contain"
        src={props.photo}
        alt=""
      />
      <Text rounded="md" p="4" bg="#825199" fontSize="xl">
        <p>{props.name}</p>
        <p>{props.age}</p>
        <p>{props.bio}</p>
      </Text>

      <HStack justifyContent="space-around" m="4">
        <IconButton
          boxSize="50px"
          as={FaHeartBroken}
          colorScheme="red"
          onClick={props.getDislike}
        />

        <IconButton
          boxSize="50px"
          as={FaHeart}
          colorScheme="blue"
          onClick={props.getLike}
        />
      </HStack>
    </Container>
  );
};

export default ProfileCard;
