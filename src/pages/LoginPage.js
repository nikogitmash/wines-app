// pages/LoginPage.js
import React, { useState } from 'react';

const LoginPage = () => {
  // State to manage user input
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate the loginData (e.g., check for empty fields)
    if (!loginData.email || !loginData.password) {
      alert('Please enter both email and password.');
      return;
    }

    // Assuming a simple console log for demo purposes
    console.log('Logging in with:', loginData);
    // Add authentication logic here (e.g., make API call to backend)
  };

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
