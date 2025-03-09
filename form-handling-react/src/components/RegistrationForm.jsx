import React, { useState } from 'react';

const RegistrationForm = () => {
 
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  
  
  const [status, setStatus] = useState({
    submitting: false,
    error: null,
    success: false
  });
  
 
  const [errors, setErrors] = useState({});
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
   
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };
  
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password.trim()) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    
  
    if (!validateForm()) {
      return;
    }
    
    setStatus({ submitting: true, error: null, success: false });
    
    try {
     
      const response = await new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            ok: true,
            json: () => Promise.resolve({ message: 'Registration successful!' })
          });
        }, 1000);
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ submitting: false, error: null, success: true });
  n
        setFormData({ username: '', email: '', password: '' });
        console.log('Registration successful:', data);
      } else {
        throw new Error(data.message || 'Registration failed');
      }
    } catch (error) {
      setStatus({ submitting: false, error: error.message, success: false });
      console.error('Registration error:', error);
    }
  };
  
  return (
    <div className="form-container">
      <h2>User Registration</h2>
      
      {status.success && (
        <div className="success-message">
          Registration successful! You can now log in.
        </div>
      )}
      
      {status.error && (
        <div className="error-message">
          {status.error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={handleChange}
            className={errors.username ? 'error' : ''}
          />
          {errors.username && <div className="error-text">{errors.username}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <div className="error-text">{errors.email}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            className={errors.password ? 'error' : ''}
          />
          {errors.password && <div className="error-text">{errors.password}</div>}
        </div>
        
        <button 
          type="submit" 
          disabled={status.submitting}
        >
          {status.submitting ? 'Registering...' : 'Register'}
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;