import useForm from "../Hooks/useForm";
import { LoginFormContainer, LoginPageContainer } from "./style";
import { login } from "../services/AppAccess/SignupLogin";
import { useHistory } from "react-router";
import useUnprotectedPage from "../Hooks/useUprotectedPage";

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
        <label>Email:</label>
        <input
          type="email"
          placeholder="Email"
          required
          name={"email"}
          value={form.email}
          onChange={onChange}
        />
        <label>Password:</label>
        <input
          type="password"
          placeholder="Password"
          required
          name={"password"}
          value={form.password}
          onChange={onChange}
        />
        <button type="submit">Login</button>
      </LoginFormContainer>
    </LoginPageContainer>
  );
};

export default LoginForm;
