import { CommentPost, ButtonContainerPost } from "./style";
import axios from "axios";
import { BASE_URL } from "../global/constants";
import { Fab } from "@material-ui/core";

const header = {
  headers: {
    Authorization: localStorage.getItem("token"),
    "Content-Type": "application/json",
  },
};

const PostPageCard = ({ post }) => {
  const handleLike = (id) => {
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/comments/${id}/votes`, body, header)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleChangeLike = (id) => {
    const body = {
      direction: -1,
    };

    axios
      .put(`${BASE_URL}/comments/${id}/votes`, body, header)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <CommentPost>
      <h3>User: {post.username}</h3>
      <p>Comentario: {post.body}</p>
      <ButtonContainerPost>
        <Fab disabled aria-label="like" onClick={() => handleLike(post.id)}>
          Like
        </Fab>
        <button onClick={() => handleChangeLike(post.id)}>Dislike</button>
      </ButtonContainerPost>
    </CommentPost>
  );
};

export default PostPageCard;
