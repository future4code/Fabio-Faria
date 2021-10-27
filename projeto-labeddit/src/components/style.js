import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100vw;
  height: 10vh;
  align-items: center;
  background-color: #2d080a;
  color: white;
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  buttons {
    margin: 14px;
  }
`;

export const LoginFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 10%;
  label {
    margin: 4px;
  }
  button {
    margin: 8px;
  }
`;

export const LoginPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffcdbc;
`;

export const SignupPageForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
  height: 40%;
  label {
    margin: 4px;
  }
  button {
    margin: 8px;
  }
`;

export const SignupPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #ffcdbc;
`;

export const PostCardStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 10px;
  padding: 52px;
  background-color: #2d080a;
  color: white;
  box-sizing: border-box;
`;

export const PostButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 4px;
  margin-top: 4px;
`;

export const PostComments = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 4px;
`;

export const NewPostContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 30%;
  justify-content: space-evenly;
  align-items: center;
`;
