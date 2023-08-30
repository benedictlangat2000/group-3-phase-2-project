import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const toggleSignup = () => {
    setShowSignup(!showSignup);
    setShowLogin(false); // Close login form when opening signup form
  };

  const toggleLogin = () => {
    setShowLogin(!showLogin);
    setShowSignup(false); // Close signup form when opening login form
  };

  const [signupFormData, setSignupFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });

  const [loginFormData, setLoginFormData] = useState({
    username: '',
    password: '',
    scope: '',
    client_id: '',
    client_secret: ''
  });

  const handleSignup = async () => {
    try {
      const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupFormData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Signup successful:', data);
      } else {
        console.log('Signup failed');
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://ecommerce.muersolutions.com/api/v1/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginFormData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Login successful:', data);
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  useEffect(() => {
    console.log('Component mounted');
  }, []);

  return (
    <div className="App">
      <h1>User Authentication</h1>

      <div className="auth-container">
        <button onClick={toggleSignup}>Sign Up</button>
        <button onClick={toggleLogin}>Login</button>
      </div>

      {showSignup && (
        <div className="form">
          <h2>Sign Up</h2>
          <input
            type="text"
            placeholder="First Name"
            value={signupFormData.first_name}
            onChange={(e) => setSignupFormData({ ...signupFormData, first_name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={signupFormData.last_name}
            onChange={(e) => setSignupFormData({ ...signupFormData, last_name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={signupFormData.email}
            onChange={(e) => setSignupFormData({ ...signupFormData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={signupFormData.password}
            onChange={(e) => setSignupFormData({ ...signupFormData, password: e.target.value })}
          />
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}

      {showLogin && (
        <div className="form">
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={loginFormData.username}
            onChange={(e) => setLoginFormData({ ...loginFormData, username: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={loginFormData.password}
            onChange={(e) => setLoginFormData({ ...loginFormData, password: e.target.value })}
          />
          <input
            type="text"
            placeholder="Scope"
            value={loginFormData.scope}
            onChange={(e) => setLoginFormData({ ...loginFormData, scope: e.target.value })}
          />
          <input
            type="text"
            placeholder="Client ID"
            value={loginFormData.client_id}
            onChange={(e) => setLoginFormData({ ...loginFormData, client_id: e.target.value })}
          />
          <input
            type="text"
            placeholder="Client Secret"
            value={loginFormData.client_secret}
            onChange={(e) => setLoginFormData({ ...loginFormData, client_secret: e.target.value })}
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default App;
