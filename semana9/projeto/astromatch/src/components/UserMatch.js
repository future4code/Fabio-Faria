import styled from "styled-components";
import axios from "axios";
import Header from "./Header";
import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const MatchContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  margin-bottom: 10px;
  background-color: #a53860;
  box-shadow: 1px 1px 5px 3px #da627d;
`;

const UserMatch = () => {
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
        console.log(profile);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <MatchContainer>
      <Header />
      <ProfileCard
        name={profile.name}
        photo={profile.photo}
        bio={profile.bio}
        age={profile.age}
      />
    </MatchContainer>
  );
};

export default UserMatch;
