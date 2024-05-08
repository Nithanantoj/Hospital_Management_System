import React from 'react';
import './Loginpage.css';

function LoginPage() {
  return (
    <div>
    <section>
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form">
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
    </section>
    </div>
  );
}

export default LoginPage;
