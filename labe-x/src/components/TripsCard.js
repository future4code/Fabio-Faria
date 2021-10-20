import { TripCard } from "../style/style";

const TripsCard = (props) => {
  return (
    <TripCard>
      <h4>{props.name}</h4>
      <h4>{props.planet}</h4>
    </TripCard>
  );
};

export default TripsCard;
