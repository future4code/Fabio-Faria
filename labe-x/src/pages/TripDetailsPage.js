import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useGetDetails } from "../hooks/CustomHooks";
import { useState } from "react";
import tripDetailsPage from "../style/images/tripDetailsPage.svg";
import { TripDetailsContainer, TripDetailsPageContainer } from "../style/style";
import ApprovedCandidatesCard from "../components/ApprovedCandidatesCard";

const TripDetailsPage = () => {
  const [approvedCandidates, setApprovedCandidates] = useState([]);
  const [rejectedCandidates, setRejectedCandidates] = useState([]);
  const token = localStorage.getItem("token");
  const history = useHistory();
  const params = useParams();

  const goBack = () => {
    history.goBack();
  };

  const [trip, isLoading, error, tripDetails] = useGetDetails(
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trip/${params.id}`
  );

  const approveCandidate = (candidateId, tripId, candidateName) => {
    const body = {
      approve: true,
    };
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        header
      )
      .then((response) => {
        setApprovedCandidates([...approvedCandidates, candidateName]);
        tripDetails();
        console.log("Approved");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const rejectCandidate = (candidateId, tripId, candidateName) => {
    const body = {
      approve: false,
    };
    const header = {
      headers: {
        auth: token,
      },
    };
    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-fara/trips/${tripId}/candidates/${candidateId}/decide`,
        body,
        header
      )
      .then((response) => {
        setRejectedCandidates([...rejectedCandidates, candidateName]);
        tripDetails();
        console.log("Rejected");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const { candidates, approved } = trip;
  const showApprovedCandidates =
    approved &&
    approved.map((candidate) => {
      return (
        <ApprovedCandidatesCard
          key={candidate.id}
          name={candidate.name}
          age={candidate.age}
          country={candidate.country}
          applicationText={candidate.applicationText}
        />
      );
    });

  return (
    <TripDetailsPageContainer>
      {isLoading && <h1>Carregando...</h1>}
      {!isLoading && error && <h1>Erro ao carregar detalhes da viagem</h1>}
      <img src={tripDetailsPage} alt="" />
      <TripDetailsContainer>
        <h1>Trip Details Page</h1>
        <h3>Name: {trip && trip.name}</h3>
        <p>Planet: {trip && trip.planet}</p>
        <p>Trip Date: {trip && trip.date}</p>
        <p>Description: {trip && trip.description}</p>
        <p>Duration: {trip && trip.durationInDays}</p>
      </TripDetailsContainer>
      {candidates &&
        candidates.map((candidate) => {
          return (
            <div key={candidate.id}>
              <h2>Candidates:</h2>
              <p>Name: {candidate.name}</p>
              <p>Age: {candidate.age}</p>
              <p>Country: {candidate.country}</p>
              <p>Profession: {candidate.profession}</p>
              <button
                value={candidate.id}
                onClick={() =>
                  approveCandidate(candidate.id, trip.id, approved.name)
                }
              >
                Approve
              </button>
              <button
                value={candidate.id}
                onClick={() =>
                  rejectCandidate(candidate.id, trip.id, approved.name)
                }
              >
                Reject
              </button>
              <br />
            </div>
          );
        })}
      <br />
      <h2>Approved Candidates:</h2>

      {showApprovedCandidates}

      <br />

      <button onClick={goBack}>Voltar</button>
    </TripDetailsPageContainer>
  );
};

export default TripDetailsPage;
