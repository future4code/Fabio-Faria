import { useGoHome, useGetTrips } from "../hooks/CustomHooks";
import { useState } from "react";

const ApplicationForm = () => {
  const [applicationName, setApplicationName] = useState("");
  const [applicationAge, setApplicationAge] = useState(0);
  const [applicationReason, setApplicationReason] = useState("");
  const [applicationProfession, setApplicationProfession] = useState("");
  const [applicationTrip, setApplicationTrip] = useState("");
  const [applicationCountry, setApplicationCountry] = useState("");

  const handleNameChange = (e) => {
    setApplicationName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setApplicationAge(e.target.value);
  };

  const handleReasonChange = (e) => {
    setApplicationReason(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setApplicationProfession(e.target.value);
  };

  const handleTripIdChange = (e) => {
    setApplicationTrip(e.target.value);
  };

  const handleCountryChange = (e) => {
    setApplicationCountry(e.target.value);
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const application = {
      name: applicationName,
      age: applicationAge,
      reason: applicationReason,
      profession: applicationProfession,
      tripId: applicationTrip,
      country: applicationCountry,
    };

    console.log(application);
  };
  const goHome = useGoHome();

  const [trips] = useGetTrips();

  return (
    <div>
      <h1>Application Form</h1>
      <form onSubmit={handleSubmitForm}>
        <label htmlFor="name">Name: </label>
        <input
          value={applicationName}
          onChange={handleNameChange}
          type="text"
          placeholder="Name"
        />
        <label htmlFor="age">Age: </label>
        <input
          value={applicationAge}
          onChange={handleAgeChange}
          type="number"
          placeholder="Age"
          min="18"
        />
        <label htmlFor="reason">Why you wan't to go: </label>
        <input
          value={applicationReason}
          onChange={handleReasonChange}
          type="text"
          placeholder="Reason"
        />
        <label htmlFor="profession">Profession:</label>
        <input
          value={applicationProfession}
          onChange={handleProfessionChange}
          type="text"
          placeholder="Profession"
        />
        <select name="countries">
          <option value={applicationCountry}>Select a country</option>
          {trips &&
            trips.map((trip) => (
              <option onChange={handleCountryChange} value={trip.id}>
                {trip.country}
              </option>
            ))}
        </select>
        <select name="trips">
          <option value={applicationTrip}>Select a trip</option>
          {trips &&
            trips.map((trip) => {
              return (
                <select>
                  <li>{trip.id}</li>
                </select>
              );
            })}
        </select>
        <button type="submit">Submit Application</button>
      </form>
      <button onClick={goHome}>Home</button>
    </div>
  );
};

export default ApplicationForm;
