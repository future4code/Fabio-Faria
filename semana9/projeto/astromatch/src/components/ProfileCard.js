import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  padding: 10px;
  margin: 4px;
  img {
    width: 90%;
    height: 50%;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50%;
  margin-top: 5%;
`;

const ProfileCard = (props) => {
  return (
    <CardContainer>
      <img src={props.photo} alt="" />
      <p>{props.name}</p>
      <p>{props.age}</p>
      <p>{props.bio}</p>
      <ButtonContainer>
        <button>X</button>
        <button>Curtir</button>
      </ButtonContainer>
    </CardContainer>
  );
};

export default ProfileCard;
