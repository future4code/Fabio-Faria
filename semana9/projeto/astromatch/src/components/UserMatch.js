import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { Container, Flex } from "@chakra-ui/react";

const UserMatch = (props) => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfileToChoose();
  }, []);

  const getProfileToChoose = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-faria-maryam/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const postPerson = (userChoice) => {
    const body = {
      id: profile.id,
      choice: userChoice,
    };
    const header = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    axios
      .post(
        `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/fabio-faria-maryam/choose-person`,
        body,
        header
      )
      .then(() => {
        getProfileToChoose();
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  const handleLike = () => {
    postPerson(true);
  };

  const handleDislike = () => {
    postPerson(false);
  };

  return (
    <Flex minH="100%">
      <Container
        w={["100%", "100%"]}
        h={["100%", "90%"]}
        bg="#fff"
        maxW="container.sm"
        centerContent
        p={4}
      >
        <Header changePage={props.changePage} />
        <ProfileCard
          getLike={handleLike}
          getDislike={handleDislike}
          name={profile.name}
          photo={profile.photo}
          bio={profile.bio}
          age={profile.age}
        />
      </Container>
    </Flex>
  );
};

export default UserMatch;
