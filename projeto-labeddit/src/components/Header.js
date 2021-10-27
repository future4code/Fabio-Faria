import { HeaderButtons, HeaderContainer } from "./style";
import { useHistory } from "react-router";
import { goToFeed, goToLogin, goToSignup } from "../routes/coordinates";
const Header = () => {
  const history = useHistory();

  return (
    <HeaderContainer>
      <h1>Header</h1>
      <HeaderButtons>
        <button onClick={() => goToSignup(history)}>Signup</button>
        <button onClick={() => goToLogin(history)}>Login</button>
        <button>Logout</button>
        <button onClick={() => goToFeed(history)}>Home</button>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
