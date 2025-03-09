import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPosts = async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
  return response.data;
};

const PostsComponent = () => {
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    cacheTime: 5 * 60 * 1000, // Cache data for 5 minutes
    staleTime: 1 * 60 * 1000, // Data is considered fresh for 1 minute
    refetchOnWindowFocus: true, // Refetch data when the window is focused
    keepPreviousData: true, // Keep previous data while fetching new data
  });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {posts?.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;