import React from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();

  const handleSwitch = () => {
    navigate("/SignupForm");
  }

  return (
    <form>
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" placeholder="Enter your username" required/>
      <br />

      <label>Password:</label>
      <input type="password" placeholder="Enter your password" required></input>
      <br />

      <button type="button">Login</button>
      <br />
      <button type="button" onClick={handleSwitch}>Switch to Signup</button>
    </form>
  );
}

export default LoginForm;
