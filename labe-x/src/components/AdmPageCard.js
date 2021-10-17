import { AdmPageCardContainer } from "../style/style";

const AdmPageCard = (props) => {
  return (
    <AdmPageCardContainer>
      <div key={props.id}>
        <li>{props.name}</li>
        <li>{props.planet}</li>

        <button onClick={() => props.deleteTrip(props.id)}>X</button>
        <button onClick={() => props.showTripDetails(props.id)}>Details</button>
        <br />
      </div>
    </AdmPageCardContainer>
  );
};

export default AdmPageCard;
