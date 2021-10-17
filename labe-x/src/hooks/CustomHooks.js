import axios from "axios";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useGetTrips = (url) => {
  const [trips, setTrips] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const getTrips = () => {
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
  };
  useEffect(() => {
    getTrips();
  }, [url]);
  return [trips, isLoading, error, getTrips];
};

export const useGetDetails = (url) => {
  const [trip, setTrip] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const token = window.localStorage.getItem("token");
  const headers = {
    auth: token,
  };
  const tripDetails = () => {
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
  };
  useEffect(() => {
    tripDetails();
  }, []);

  return [trip, isLoading, error, tripDetails];
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

export const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const cleanInputs = () => {
    setForm(initialState);
  };
  return [form, onChange, cleanInputs];
};
