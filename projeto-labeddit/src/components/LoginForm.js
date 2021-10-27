import useForm from "../Hooks/useForm";
import { LoginFormContainer, LoginPageContainer } from "./style";
import { login } from "../services/AppAccess/SignupLogin";
import { useHistory } from "react-router";
import useUnprotectedPage from "../Hooks/useUprotectedPage";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const LoginForm = () => {
  const [form, onChange, clearForm] = useForm({ email: "", password: "" });
  const history = useHistory();
  useUnprotectedPage();

  const onSubmitForm = (e) => {
    e.preventDefault();
    login(form, clearForm, history);
    clearForm();
  };

  return (
    <LoginPageContainer>
      <LoginFormContainer onSubmit={onSubmitForm}>
        <TextField
          id="outlined-basic"
          label="Email:"
          variant="outlined"
          type="email"
          placeholder="Email"
          required
          name={"email"}
          value={form.email}
          onChange={onChange}
        />

        <TextField
          id="outlined-basic"
          label="Password:"
          variant="outlined"
          type="password"
          placeholder="Password"
          required
          name={"password"}
          value={form.password}
          onChange={onChange}
        />
        <Button variant="contained" color="success" type="submit">
          Login
        </Button>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginForm;
