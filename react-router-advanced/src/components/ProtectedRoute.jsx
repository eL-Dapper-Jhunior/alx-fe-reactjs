import { Navigate } from "react-router-dom";

// Simulated authentication function
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true"; // Change to "false" to test redirection
};

const ProtectedRoute = ({ children }) => {
  return isAuthenticated() ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
