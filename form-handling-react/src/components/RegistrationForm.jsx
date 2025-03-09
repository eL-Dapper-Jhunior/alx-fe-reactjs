import React, { useState } from "react";
const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    // Clear error when user types
    if (errors.username) {
      setErrors({
        ...errors,
        username: null
      });
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    // Clear error when user types
    if (errors.email) {
      setErrors({
        ...errors,
        email: null
      });
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    // Clear error when user types
    if (errors.password) {
      setErrors({
        ...errors,
        password: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!username) {
      newErrors.username = "Username is required";
    }
    
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Email is invalid";
    }
    
    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    // Simulate API call
    console.log("Form Data Submitted:", { username, email, password });
    
    // Reset form
    setUsername("");
    setEmail("");
    setPassword("");
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={handleUsernameChange}
          className={errors.username ? "error" : ""}
        />
        {errors.username && <div className="error-text">{errors.username}</div>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
          className={errors.email ? "error" : ""}
        />
        {errors.email && <div className="error-text">{errors.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
          className={errors.password ? "error" : ""}
        />
        {errors.password && <div className="error-text">{errors.password}</div>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm;