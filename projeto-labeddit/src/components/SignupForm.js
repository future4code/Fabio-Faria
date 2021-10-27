import useForm from "../Hooks/useForm";
import { SignupPageContainer, SignupPageForm } from "./style";
import { signUp } from "../services/AppAccess/SignupLogin";
import useUnprotectedPage from "../Hooks/useUprotectedPage";

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
        <label>Username:</label>
        <input
          type="text"
          name={"username"}
          value={form.username}
          onChange={onChange}
          required
        />
        <label>Email:</label>
        <input
          type="email"
          name={"email"}
          value={form.email}
          onChange={onChange}
          required
        />
        <label>Password:</label>
        <input
          type="password"
          name={"password"}
          value={form.password}
          onChange={onChange}
          minLength="8"
          required
        />
        <button type="submit">Submit</button>
      </SignupPageForm>
    </SignupPageContainer>
  );
};

export default SignupForm;
