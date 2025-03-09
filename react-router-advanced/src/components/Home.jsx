import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/users">View Users</Link> | <Link to="/blog/1">Read Blog 1</Link> | <Link to="/blog/2">Read Blog 2</Link>
    </div>
  );
};

export default Home;
