import { Navigate } from "react-router-dom";
import useAuth from "./useAuth"; // Import the useAuth hook

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Use the useAuth hook

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;