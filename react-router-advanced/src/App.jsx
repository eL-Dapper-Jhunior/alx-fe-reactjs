import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";
import BlogPost from "./components/BlogPost"; // Import BlogPost component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:userId" element={<UserProfile />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add BlogPost Route */}
      </Routes>
    </Router>
  );
}

export default App;
