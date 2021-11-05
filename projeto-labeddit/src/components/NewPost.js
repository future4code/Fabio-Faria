import { NewPostContainer } from "./style";
import useForm from "../Hooks/useForm";
import createPost from "../services/PostAccess/CreatePost";
import useProtectedPage from "../Hooks/useProtectedPage";

const NewPost = ({ getPost }) => {
  const [form, onChange, clearForm] = useForm({ title: "", body: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    createPost(form, clearForm);
    getPost();
    clearForm();
  };

  useProtectedPage();
  return (
    <NewPostContainer onSubmit={handleSubmit}>
      <h3>New Post</h3>
      <label>Title:</label>
      <input
        type="text"
        name={"title"}
        value={form.title}
        onChange={onChange}
      />
      <label>Post:</label>
      <textarea
        id=""
        cols="30"
        rows="10"
        name={"body"}
        title={form.body}
        onChange={onChange}
      />
      <button type="submit">Submit</button>
    </NewPostContainer>
  );
};

export default NewPost;
