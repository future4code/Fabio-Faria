import { useGetTrips, useGoHome } from "../hooks/CustomHooks";
import { useHistory } from "react-router-dom";

const ListTripsPage = () => {
  const [trips, isLoading, error] = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria-maryam/trips"
  );

  const history = useHistory();

  const goToApplicationForm = () => {
    history.push("/applicationForm");
  };

  const goHome = useGoHome();

  const showTrips =
    trips &&
    trips.map((trip) => {
      return (
        <div key={trip.id}>
          <li>{trip.name}</li>
          <li>{trip.planet}</li>

          <br />
        </div>
      );
    });

  return (
    <div>
      <h1>Trips</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Erro</p>}
      {!isLoading && !error && showTrips}
      <button onClick={goToApplicationForm}>Apply for a Trip</button>
      <button onClick={goHome}>Home</button>
    </div>
  );
};

export default ListTripsPage;
