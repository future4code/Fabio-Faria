import { useGoHome } from "../hooks/CustomHooks";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const CreateTripPage = () => {
  const [applicationName, setApplicationName] = useState("");
  const [applicationDescription, setApplicationDescription] = useState("");
  const [applicationPlanet, setApplicationPlanet] = useState("");
  const [applicationDate, setApplicationDate] = useState("");
  const [applicationTime, setApplicationTime] = useState(0);

  const handleApplicationName = (event) => {
    setApplicationName(event.target.value);
  };

  const handleApplicationDescription = (event) => {
    setApplicationDescription(event.target.value);
  };

  const handleApplicationPlanet = (event) => {
    setApplicationPlanet(event.target.value);
  };

  const handleApplicationDate = (event) => {
    setApplicationDate(event.target.value);
  };

  const handleApplicationTime = (event) => {
    setApplicationTime(event.target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    const tripCreator = {
      name: applicationName,
      planet: applicationPlanet,
      date: applicationDate,
      description: applicationDescription,
      time: applicationTime,
    };
    console.log(tripCreator);
  };

  const history = useHistory();
  const goHome = useGoHome();
  const goBack = () => {
    history.goBack();
  };

  return (
    <div>
      <h1>Create Trip</h1>
      <form onSubmit={handleSubmitForm} action="create trip">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleApplicationName}
          type="text"
          name="name"
          id="name"
          placeholder="Trip name"
        />
        <label htmlFor="planet">Planet</label>
        <input
          onChange={handleApplicationPlanet}
          type="text"
          name="planet"
          id="planet"
          placeholder="Planet"
        />
        <label htmlFor="date">Date</label>
        <input
          onChange={handleApplicationDate}
          type="date"
          name="date"
          id="date"
          placeholder="Date"
        />
        <label htmlFor="description">Description</label>
        <textarea
          onChange={handleApplicationDescription}
          name="description"
          id="description"
          cols="30"
          rows="10"
          placeholder="Description"
        ></textarea>
        <label htmlFor="Duration">Duration in Days</label>
        <input
          onChange={handleApplicationTime}
          type="number"
          name="duration"
          id="duration"
          placeholder="Duration"
        />
        <button type="submit">Submit</button>
      </form>
      <button onClick={goHome}>Home</button>
      <button onClick={goBack}>Previous Page</button>
    </div>
  );
};

export default CreateTripPage;
