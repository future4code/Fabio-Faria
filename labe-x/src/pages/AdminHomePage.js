import { useGetTrips, useGoHome, useProtectPage } from "../hooks/CustomHooks";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";

import admPage from "../style/images/admPage.svg";
import { AdmPageButonsCard, AdmPageContainer } from "../style/style";
import AdmPageCard from "../components/AdmPageCard";

const AdminHomePage = () => {
  const [trips, isLoading, error, getTrips] = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips"
  );
  const token = window.localStorage.getItem("token");
  useEffect(() => {
    getTrips();
  }, []);

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

  const clearLocalStorage = () => {
    localStorage.clear();
    alert("You must log in again to return to this page.");
    history.push("/");
  };

  const deleteTrip = (tripId) => {
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips/${tripId}`,
        header
      )
      .then(() => {
        getTrips();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const showTrips =
    trips &&
    trips.map((trip) => {
      return (
        <AdmPageCard
          key={trip.id}
          id={trip.id}
          name={trip.name}
          planet={trip.planet}
          showTripDetails={showTripDetails}
          deleteTrip={deleteTrip}
        />
      );
    });
  return (
    <AdmPageContainer>
      <img src={admPage} alt="Adm Page" />
      <h1>Admin Home Page</h1>
      {isLoading && <p>Loading...</p>}
      {!isLoading && error && <p>Erro</p>}
      {!isLoading && !error && showTrips}
      <AdmPageButonsCard>
        <button onClick={createTrip}>Create a Trip</button>
        <button onClick={clearLocalStorage}>Logout</button>
        <button onClick={goHome}>Home</button>
        <button onClick={goBack}>Previous Page</button>
      </AdmPageButonsCard>
    </AdmPageContainer>
  );
};

export default AdminHomePage;
