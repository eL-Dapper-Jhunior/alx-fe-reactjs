import { Navigate, Outlet } from "react-router-dom";

const isAuthenticated = false; // Change to true to allow access

const ProtectedRoute = () => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
