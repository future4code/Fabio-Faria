import { useGoHome, useGetTrips } from "../hooks/CustomHooks";
import { useState } from "react";
import { countries } from "../countries";

import axios from "axios";

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

    const body = {
      name: applicationName,
      age: applicationAge,
      applicationText: applicationReason,
      profession: applicationProfession,
      country: applicationCountry,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips/${applicationTrip}/apply`,
        body,
        headers
      )
      .then(() => {
        alert("Sucesso!");
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log(body);
  };
  const goHome = useGoHome();

  const [trips] = useGetTrips(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/trips"
  );

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
        <select
          onChange={handleCountryChange}
          value={applicationCountry}
          name="countries"
        >
          <option value="">Select a country</option>
          {countries.map((country) => {
            return (
              <option value={country.name} key={country.name}>
                {country.name}
              </option>
            );
          })}
        </select>
        <select
          onChange={handleTripIdChange}
          value={applicationTrip}
          name="trips"
        >
          <option value="">Select a trip</option>
          {trips &&
            trips.map((trip) => {
              return (
                <option value={trip.id} key={trip.id}>
                  {trip.name}
                </option>
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
