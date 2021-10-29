import PostPageCard from "../../components/PostPageCard";
import { useParams } from "react-router";
import { BASE_URL } from "../../global/constants";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../services/PostAccess/GetPost";
import Header from "../../components/Header";
import { PostCommentsContainer, Container } from "./style";
import NewComment from "../../components/NewComment";

const PostPage = () => {
  const params = useParams();
  useProtectedPage();

  const [postComment, getPosts] = useRequestData(
    [],
    `${BASE_URL}/posts/${params.post}/comments`
  );

  const showPost =
    postComment &&
    postComment.map((post) => {
      return <PostPageCard key={post.id} post={post} />;
    });
  return (
    <Container>
      <Header />
      <PostCommentsContainer>
        <NewComment getPosts={getPosts} />
        {showPost}
      </PostCommentsContainer>
    </Container>
  );
};

export default PostPage;
