import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth"; // Import useAuth hook

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useAuth(); // Check if user is authenticated

  return isAuthenticated ? children : <Navigate to="/login" />; // Redirect if not authenticated
};

export default ProtectedRoute;
