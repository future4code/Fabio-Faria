import axios from "axios";
import { useParams, useHistory } from "react-router-dom";
import { useGetDetails } from "../hooks/CustomHooks";
import { useState } from "react";

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
    `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trip/${params.id}`,
    {}
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
        <div key={candidate.id}>
          <p>Name: {candidate.name}</p>
          <p>Age: {candidate.age}</p>
          <br />
        </div>
      );
    });

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
      <br />
      {candidates &&
        candidates.map((candidate) => {
          return (
            <div key={candidate.id}>
              <h2>Candidates:</h2>
              <p>Name: {candidate.name}</p>
              <p>Age: {candidate.age}</p>
              <p>Country: {candidate.country}</p>
              <p>Reason: {candidate.applicationText}</p>
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

      {approved || showApprovedCandidates}
      {!approved && showApprovedCandidates}

      <br />

      <button onClick={goBack}>Voltar</button>
    </div>
  );
};

export default TripDetailsPage;
