import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useGetTrips = (url) => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url)
      .then((res) => {
        setTrips(res.data.trips);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);
  return [trips, isLoading, error];
};

export const useGetDetails = (url, initialState) => {
  const [trip, setTrip] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const headers = {
    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlNPSzRMMTlHYXlBdU8yM1IzUGxvIiwiZW1haWwiOiJmYWJpb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzQxNTA2ODV9.V9um_9ohSaWN8CMiAMmBZRXhfxvDdZDpHA2qjsZXjcU",
  };
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(url, { headers })
      .then((res) => {
        setIsLoading(false);
        setTrip(res.data.trip);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  }, [url]);
  return [trip, isLoading, error];
};

export const useGoHome = () => {
  const history = useHistory();
  const goHome = () => {
    history.push("/");
  };
  return goHome;
};
