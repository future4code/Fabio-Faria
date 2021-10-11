import axios from "axios";
import { useState, useEffect } from "react";

export const useGetTrips = (url) => {
  const [trips, setTrips] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    axios
      .get(url)
      .then((res) => {
        setLoading(false);
        setTrips(res.data);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [url]);
  return [trips, loading, error];
};
