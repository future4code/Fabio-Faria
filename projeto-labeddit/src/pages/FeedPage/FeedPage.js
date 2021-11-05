import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import useRequestData from "../../services/PostAccess/GetPost";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../global/constants";
import NewPost from "../../components/NewPost";
import { FeedPageContainer } from "./style";

const FeedPage = () => {
  const [feed, getPost] = useRequestData([], `${BASE_URL}/posts`);

  const showFeed =
    feed &&
    feed.map((post) => {
      return <PostCard key={post.id} post={post} />;
    });

  useProtectedPage();
  return (
    <>
      <FeedPageContainer>
        <Header />
        <NewPost getPost={getPost} />
        {showFeed}
      </FeedPageContainer>
    </>
  );
};

export default FeedPage;
