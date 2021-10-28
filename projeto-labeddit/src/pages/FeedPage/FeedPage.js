import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import { FeedPageContainer } from "./style";
import useRequestData from "../../services/PostAccess/GetPost";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../global/constants";
import NewPost from "../../components/NewPost";
import { Container } from "@material-ui/core";

const FeedPage = () => {
  const feed = useRequestData([], `${BASE_URL}/posts`);

  const showFeed =
    feed &&
    feed.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });

  useProtectedPage();
  return (
    <>
      <Container maxWidth="sm">
        <Header />
        <NewPost />

        {showFeed}
      </Container>
    </>
  );
};

export default FeedPage;
