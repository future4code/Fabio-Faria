import { useParams, useHistory } from "react-router-dom";
import { useGetDetails } from "../hooks/CustomHooks";

const TripDetailsPage = () => {
  const history = useHistory();
  const params = useParams();

  const goBack = () => {
    history.goBack();
  };
  const [trip, isLoading, error] = useGetDetails(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria-maryam/trip/${params.id}`,
    {}
  );

  return (
    <div>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Erro ao carregar detalhes da viagem</h1>}
      <h1>Trip Details Page</h1>
      <h3>Name: {trip.name}</h3>
      <p>Planet: {trip.planet}</p>
      <p>Trip Date: {trip.date}</p>
      <p>Description: {trip.description}</p>
      <p>Duration: {trip.durationInDays}</p>

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
