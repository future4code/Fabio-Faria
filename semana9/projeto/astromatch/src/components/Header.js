import styled from "styled-components";

const HeaderContainer = styled.div`
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 10%;
  background-color: hsl(338, 49%, 34%);
`;
const Header = (props) => {
  return (
    <HeaderContainer>
      <img src="./images/astromatch.jpg" alt="Astro" />
      <button>Curtidas</button>
    </HeaderContainer>
  );
};

export default Header;
