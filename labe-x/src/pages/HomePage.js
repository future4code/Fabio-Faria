import { useGetTrips } from "../hooks/CustomHooks";

const HomePage = (props) => {
  const { trips, loading, error } = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria-maryam/trips"
  );

  const renderTrips =
    trips &&
    trips.map((trip) => {
      return (
        <div key={trip.id}>
          <li>{trip.name}</li>
        </div>
      );
    });

  return (
    <div>
      <h1>Home Page</h1>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error</h1>}
      {renderTrips}
      <button onClick={() => props.changePage("apply")}>
        Apply for a Trip
      </button>
    </div>
  );
};

export default HomePage;
