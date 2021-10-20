import styled from "styled-components";

export const AppContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  display: flex;
  width: 100vw;
  height: 100vh;
  border: 1px solid black;
  background-color: #0d1821;
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
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 40%;
  height: 20%;
  margin: 10px;
  background-color: #344966;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 80%;
    height: 100%;
    align-items: center;
    padding: 10px;
  }
`;

export const TripCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #0d1821;
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
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100%;
    align-items: center;
    padding: 10px;
  }
`;

export const TripFormContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100vh;
  align-items: center;
  background-color: #0d1821;
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
  @media (max-width: 768px) {
    img {
      width: 100%;
    }
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
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #0d1821;
  height: 100vh;
  color: white;
  label {
    margin-left: 5px;
  }

  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }

  img {
    width: 40%;
    height: 40%;
    margin-top: 5%;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100vh;
    img {
      width: 100%;
    }
    form {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }
  }
`;

export const AdmPageContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  background-color: #0d1821;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  color: white;
  img {
    width: 80%;
    height: 80%;
    margin-top: 5%;
  }
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;

export const AdmPageCardContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  height: 100%;
  margin: 5px;
  background-color: #344966;
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;

export const AdmPageButonsCard = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const TripDetailsPageContainer = styled.div`
  font-family: "Roboto Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #0d1821;
  box-sizing: border-box;
  color: white;
  img {
    width: 20%;
    height: 20%;
    margin: 5%;
  }
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;

export const TripDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #344966;
  width: 100vw;
  height: 100%;
  color: white;
`;

export const ApprovedCandidatesCardStyle = styled.div`
  font-family: "Roboto Mono", monospace;
  background-color: #b4cded;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 12px;
  width: 80%;
  color: black;
  margin: 5px;
`;

export const CreateTripCardStyle = styled.div`
  font-family: "Roboto Mono", monospace;
  background-color: #0d1821;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  color: white;
  img {
    width: 100%;
    height: 100%;
  }
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;

export const CreateTripFormStyle = styled.form`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  label {
    margin: 4px;
  }
  button {
    margin: 10px;
    background-color: #bbc5aa;
    padding: 4px;
  }
`;
