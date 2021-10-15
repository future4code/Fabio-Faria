import axios from "axios";
import { useState } from "react";
import { useHistory } from "react-router";
import loginPageImage from "../style/images/loginPageImage.svg";
import { LoginPageContainer } from "../style/style";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const goHome = () => {
    history.push("/");
  };

  const handleUserNameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const user = {
      email: username,
      password: password,
    };
    const body = {
      email: user.email,
      password: user.password,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/fabio-faria/login",
        body
      )
      .then((response) => {
        window.localStorage.setItem("token", response.data.token);
        history.push("/AdminHomePage");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  return (
    <LoginPageContainer>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email: </label>
        <input onChange={handleUserNameChange} type="email" required />
        <label>Password: </label>
        <input onChange={handlePasswordChange} type="password" required />
        <button type="submit">Submit</button>
      </form>
      <button onClick={goHome}>Home</button>
      <img src={loginPageImage} alt="LoginPage" />
    </LoginPageContainer>
  );
};

export default LoginPage;
