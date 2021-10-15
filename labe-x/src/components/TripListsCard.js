const TripsListsCard = (props) => {
  return (
    <div>
      <div key={props.key}>
        <p>{props.name}</p>
        <p>{props.planet}</p>

        <button onClick={() => props.deleteTrip(props.tripId)}>X</button>
        <button onClick={() => props.showDetails(props.tripId)}>Details</button>
      </div>
    </div>
  );
};

export default TripsListsCard;
