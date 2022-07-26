import useFeed from "./hooks/useFeed";
import Post from "./Post";
import StyledFeed, { LoadMoreButton } from "./styled/Feed.styled";

const Feed = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useFeed();
  return (
    <StyledFeed>
      <h1>Neuste Posts</h1>
      {data?.pages?.map(page => page.posts.map(post => <Post post={post} />))}
      <LoadMoreButton>
        {hasNextPage && !isFetchingNextPage && (
          <button onClick={() => fetchNextPage()}>Mehr anzeigen</button>
        )}
      </LoadMoreButton>
    </StyledFeed>
  );
};

export default Feed;