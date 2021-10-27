import { PostButtons, PostCardStyle, PostComments } from "./style";
import { useHistory } from "react-router";
import { goToPost } from "../routes/coordinates";

const PostCard = ({ post }) => {
  const history = useHistory();

  return (
    <div>
      <PostCardStyle>
        <h3>{post.username}</h3>
        <p>{post.body}</p>
        <PostButtons>
          <button>Like</button>
          <button>Dislike</button>
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
