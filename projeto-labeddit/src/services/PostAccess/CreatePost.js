import axios from "axios";
import { BASE_URL } from "../../global/constants";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};

const createPost = (body, clearForm) => {
  axios
    .post(`${BASE_URL}/posts`, body, header)
    .then((res) => {
      console.log("sucesso", res.data);
      clearForm();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default createPost;
