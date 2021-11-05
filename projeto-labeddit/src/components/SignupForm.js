import useForm from "../Hooks/useForm";
import { SignupPageContainer, SignupPageForm } from "./style";
import { signUp } from "../services/AppAccess/SignupLogin";
import useUnprotectedPage from "../Hooks/useUprotectedPage";
import Button from "@material-ui/core/Button";
import { TextField } from "@mui/material";

const SignupForm = () => {
  const [form, onChange, clearForm] = useForm({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmitForm = (e) => {
    e.preventDefault();
    signUp(form, clearForm);
    clearForm();
  };

  useUnprotectedPage();

  return (
    <SignupPageContainer>
      <SignupPageForm onSubmit={handleSubmitForm}>
        <TextField
          id="standard-basic"
          label="Username"
          variant="standard"
          type="text"
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
        />

        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />

        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          minLength="8"
          required
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </SignupPageForm>
    </SignupPageContainer>
  );
};

export default SignupForm;
