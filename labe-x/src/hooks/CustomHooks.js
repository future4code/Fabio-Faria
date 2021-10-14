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
    auth: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlpPbFh5akVMYlA2R1J0cXFhejd4IiwiZW1haWwiOiJmYWJpb2RldkBnbWFpbC5jb20uYnIiLCJpYXQiOjE2MzQyMjU0MTh9.5OluR28aYyZyslC3SubSiI6fqJqz8EcFld4wUsMTsGk",
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

export const useProtectPage = () => {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must log in first!");
      history.push("/LoginPage");
    }
  }, []);
};
