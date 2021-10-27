import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToLogin } from "../routes/coordinates";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      goToLogin(history);
      alert("You need to login first");
    }
  }, [history]);
};

export default useProtectedPage;
