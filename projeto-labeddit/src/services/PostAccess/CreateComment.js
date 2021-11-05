import axios from "axios";

const header = {
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.getItem("token"),
  },
};
const createComment = (url, body, clearForm) => {
  axios
    .post(url, body, header)
    .then((res) => {
      console.log("sucesso", res.data);
      clearForm();
    })
    .catch((err) => {
      console.log(err);
    });
};

export default createComment;
