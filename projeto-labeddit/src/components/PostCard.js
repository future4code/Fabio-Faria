import { PostButtons, PostCardStyle, PostComments } from "./style";
import { useHistory } from "react-router";
import { goToPost } from "../routes/coordinates";
import axios from "axios";
import { BASE_URL } from "../global/constants";

const PostCard = ({ post }) => {
  const history = useHistory();
  const header = {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };

  const handleLike = (id) => {
    const body = {
      direction: 1,
    };
    axios
      .post(`${BASE_URL}/posts/${id}/votes`, body, header)
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
      .put(`${BASE_URL}/posts/${id}/votes`, body, header)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <PostCardStyle>
        <h3>{post.username}</h3>
        <p>{post.body}</p>
        <PostButtons>
          <button onClick={() => handleLike(post.id)}>Like</button>
          <button onClick={() => handleChangeLike(post.id)}>Dislike</button>
        </PostButtons>
        <PostComments>
          <p>{post.commentCount}</p>
          <button onClick={() => goToPost(history, post.id)}>Comments</button>
        </PostComments>
      </PostCardStyle>
    </div>
  );
};

export default PostCard;
