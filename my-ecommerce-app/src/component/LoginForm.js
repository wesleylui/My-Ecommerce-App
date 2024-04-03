import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSwitch = () => {
    navigate("/SignupForm");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username, password);
    fetch("http://localhost:3000/LoginPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((response) => {
        console.log(response);
        if (response.message === "Logged in successfully") {
          setMessage("Authentication successful");
          navigate("/ProductPage");
        } else {
          setMessage("Authentication failed");
        }
      })
      .catch((error) => {
        setMessage("Authentication Failed: Incorrect username or password");
      });
  };

  return (
    <form>
      <h2>Login</h2>
      <label>Username:</label>
      <input type="text" placeholder="Enter your username" required />
      <br />

      <label>Password:</label>
      <input type="password" placeholder="Enter your password" required></input>
      <br />

      <button type="button" onClick={handleLogin}>
        Login
      </button>
      <br />
      <button type="button" onClick={handleSwitch}>
        Switch to Signup
      </button>
      <br />
      {message && <p>{message}</p>}
    </form>
  );
}

export default LoginForm;
