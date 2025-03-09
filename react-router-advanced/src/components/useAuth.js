const useAuth = () => {
    // Simulate authentication check
    const user = localStorage.getItem("user"); // Check if a user is stored in localStorage
    return user ? true : false; // Return true if authenticated, false otherwise
  };
  
  export default useAuth;
  