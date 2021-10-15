import { useHistory } from "react-router-dom";
import { AppContainer, AppContainerInner } from "../style/style";
import homePage from "../style/images/homePage.svg";

const HomePage = () => {
  const history = useHistory();

  const goToTrips = () => {
    history.push("/ListTripsPage");
  };

  const goToAdmin = () => {
    history.push("/AdminHomePage");
  };

  return (
    <AppContainer>
      <AppContainerInner>
        <img src={homePage} alt="homePage" />
        <button onClick={goToTrips}>Trips</button>
        <button onClick={goToAdmin}>Admin</button>
      </AppContainerInner>
    </AppContainer>
  );
};

export default HomePage;
