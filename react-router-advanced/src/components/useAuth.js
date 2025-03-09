// src/components/useAuth.js
import { useState, useEffect } from "react";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication status (e.g., from localStorage or an API)
    const authStatus = localStorage.getItem("auth") === "true";
    setIsAuthenticated(authStatus);
  }, []);

  return { isAuthenticated };
};

export default useAuth;