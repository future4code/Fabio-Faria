import useForm from "../Hooks/useForm";
import createComment from "../services/PostAccess/CreateComment";
import { useParams } from "react-router";
import { BASE_URL } from "../global/constants";
import { NewCommentContainer, NewCommentForm } from "./style";

const NewComment = ({ getPosts }) => {
  const [form, onChange, clearForm] = useForm({ body: "" });
  const params = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    createComment(`${BASE_URL}/posts/${params.post}/comments`, form, clearForm);
    getPosts();
    clearForm();
    console.log(form);
  };

  return (
    <NewCommentContainer>
      <NewCommentForm onSubmit={handleSubmit}>
        <textarea
          name="body"
          value={form.body}
          onChange={onChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </NewCommentForm>
    </NewCommentContainer>
  );
};

export default NewComment;
