import { CommentPost, ButtonContainerPost } from "./style";
const PostPageCard = ({ post }) => {
  return (
    <CommentPost>
      <h3>User: {post.username}</h3>
      <p>Comentario: {post.body}</p>
      <ButtonContainerPost>
        <button>Like</button>
        <button>Dislike</button>
      </ButtonContainerPost>
    </CommentPost>
  );
};

export default PostPageCard;
