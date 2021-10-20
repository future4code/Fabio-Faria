import { useGetTrips, useGoHome } from "../hooks/CustomHooks";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import TripsCard from "../components/TripsCard";
import { TripCardContainer } from "../style/style";
import tripsPage from "../style/images/tripsPage.svg";

const ListTripsPage = () => {
  const [trips, isLoading, error, getTrips] = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips"
  );
  useEffect(() => {
    getTrips();
  }, []);
  const history = useHistory();

  const goToApplicationForm = () => {
    history.push("/applicationForm");
  };

  const goHome = useGoHome();
  const showTrips =
    trips &&
    trips.map((trip) => {
      return <TripsCard name={trip.name} planet={trip.planet} />;
    });
  return (
    <TripCardContainer>
      <img src={tripsPage} alt="trips" />
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Erro</p>}
      {!isLoading && !error && showTrips}
      <button onClick={goToApplicationForm}>Apply for a Trip</button>
      <button onClick={goHome}>Home</button>
    </TripCardContainer>
  );
};

export default ListTripsPage;
