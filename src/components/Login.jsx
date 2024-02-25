// Login.js
import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      localStorage.setItem('isLoggedIn', true);
      window.location.reload();
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input type="text" className="form-control" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button className="btn btn-primary" onClick={handleLogin}>Login</button>
      {error && <div className="alert alert-danger mt-3">{error}</div>}
    </div>
  );
}

export default Login;
