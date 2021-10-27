import Header from "../../components/Header";
import PostCard from "../../components/PostCard";
import { FeedPageContainer } from "./style";
import useRequestData from "../../services/PostAccess/GetPost";
import useProtectedPage from "../../Hooks/useProtectedPage";
import { BASE_URL } from "../../global/constants";

const FeedPage = () => {
  const feed = useRequestData([], `${BASE_URL}/posts`);
  console.log(feed);
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
        {showFeed}
      </FeedPageContainer>
    </>
  );
};

export default FeedPage;
