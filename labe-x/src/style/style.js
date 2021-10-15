import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  background-color: hsla(77, 70%, 4%, 0.9);
`;

export const AppContainerInner = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  button {
    margin: 10px;
    padding: 4px;
    background-color: #bbc5aa;
  }
  img {
    width: 100%;
    height: 50%;
  }
`;

export const TripCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 20%;
  margin: 10px;
  background-color: #741a06;
`;

export const TripCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: hsla(77, 70%, 4%, 0.9);
  color: white;
  box-sizing: border-box;
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
  img {
    width: 20%;
    height: 40%;
    margin-top: 2%;
  }
`;

export const TripFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  background-color: hsla(77, 70%, 4%, 0.9);
  color: white;
  img {
    width: 20%;
    height: 20%;
  }
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;

export const TripForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  label {
    margin: 4px;
  }
  select {
    margin: 4px;
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: hsla(77, 70%, 4%, 0.9);
  height: 100vh;
  color: white;
  label {
    margin-left: 5px;
  }

  button {
    margin-left: 5px;
  }

  img {
    width: 40%;
    height: 40%;
    margin-top: 5%;
  }
`;
