import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams(); // Get the blog post ID from the URL

  return (
    <div>
      <h2>Blog Post</h2>
      <p>You're viewing blog post ID: {id}</p>
    </div>
  );
};

export default BlogPost;
