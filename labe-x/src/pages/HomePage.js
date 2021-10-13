import { useHistory } from "react-router-dom";

const HomePage = () => {
  const history = useHistory();

  const goToTrips = () => {
    history.push("/ListTripsPage");
  };

  const goToAdmin = () => {
    history.push("/AdminHomePage");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={goToTrips}>Trips</button>
      <button onClick={goToAdmin}>Admin</button>
    </div>
  );
};

export default HomePage;
