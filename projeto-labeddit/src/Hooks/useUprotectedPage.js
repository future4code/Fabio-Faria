import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeed } from "../routes/coordinates";

const useUnprotectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToFeed(history);
    }
  }, [history]);
};

export default useUnprotectedPage;
