import { ApprovedCandidatesCardStyle } from "../style/style";

const ApprovedCandidatesCard = (props) => {
  return (
    <ApprovedCandidatesCardStyle>
      <div key={props.id}>
        <p>Name: {props.name}</p>
        <p>Age: {props.age}</p>
        <p>Country: {props.country}</p>
        <p>Reason: {props.applicationText}</p>
      </div>
    </ApprovedCandidatesCardStyle>
  );
};

export default ApprovedCandidatesCard;
