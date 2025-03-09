import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h2>Home Page</h2>
      <nav>
        <ul>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
