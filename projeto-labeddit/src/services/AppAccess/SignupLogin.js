import axios from "axios";
import { BASE_URL } from "../../global/constants";
import { goToFeed } from "../../routes/coordinates";

const header = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signUp = (body, clearForm) => {
  axios
    .post(`${BASE_URL}/users/signup`, body, header)
    .then((res) => {
      clearForm();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};

export const login = (body, clearForm, history) => {
  axios
    .post(`${BASE_URL}/users/login`, body, header)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      alert("Login Successful");
      goToFeed(history);
      clearForm();
    })
    .catch((err) => {
      alert(err.response.data.message);
    });
};
