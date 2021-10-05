import styled from "styled-components";

import UserMatch from "./components/UserMatch";

const GlobalStyle = styled.div`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #450920;
    color: white;
  }
`;

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  background-color: #450920;
  padding: 24px;
`;

function App() {
  return (
    <GlobalStyle>
      <AppContainer>
        <UserMatch />
      </AppContainer>
    </GlobalStyle>
  );
}

export default App;
