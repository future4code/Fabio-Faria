import { HeaderButtons, HeaderContainer } from "./style";
import { useHistory } from "react-router";
import { goToFeed, goToLogin, goToSignup } from "../routes/coordinates";
import Button from "@material-ui/core/Button";

const Header = () => {
  const history = useHistory();

  const handleLogoutButton = () => {
    localStorage.removeItem("token");
    goToLogin(history);
  };

  return (
    <HeaderContainer>
      <h1>Labeditt</h1>
      <HeaderButtons>
        <Button variant="contained" onClick={() => goToSignup(history)}>
          Signup
        </Button>
        <Button variant="contained" onClick={() => goToLogin(history)}>
          Login
        </Button>
        <Button variant="contained" onClick={handleLogoutButton}>
          Logout
        </Button>
        <Button variant="contained" onClick={() => goToFeed(history)}>
          Home
        </Button>
      </HeaderButtons>
    </HeaderContainer>
  );
};

export default Header;
