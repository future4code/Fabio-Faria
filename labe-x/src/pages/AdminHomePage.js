import { useGetTrips, useGoHome, useProtectPage } from "../hooks/CustomHooks";
import { useHistory } from "react-router-dom";

const AdminHomePage = () => {
  const [trips, isLoading, error] = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria-maryam/trips"
  );

  const history = useHistory();

  const showTripDetails = (id) => {
    history.push(`/Details/${id}`);
  };

  const createTrip = () => {
    history.push("/CreateTrip");
  };

  const goBack = () => {
    history.goBack();
  };

  const goHome = useGoHome();

  useProtectPage();

  const showTrips =
    trips &&
    trips.map((trip) => {
      return (
        <div key={trip.id}>
          <li>{trip.name}</li>
          <li>{trip.planet}</li>

          <button>X</button>
          <button onClick={() => showTripDetails(trip.id)}>Details</button>
          <br />
        </div>
      );
    });
  return (
    <div>
      <h1>Admin Home Page</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Erro</p>}
      {!isLoading && !error && showTrips}
      <button onClick={createTrip}>Create a Trip</button>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>Previous Page</button>
    </div>
  );
};

export default AdminHomePage;
