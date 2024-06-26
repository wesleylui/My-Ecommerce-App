import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticateContext } from "./AuthenticateContext";

function LoginForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const {setIsLogged} = useContext(AuthenticateContext);

  const handleSwitch = () => {
    navigate("/SignupForm");
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username, password);
    fetch("http://127.0.0.1:5000/LoginPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    })
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.message === "Logged in successfully") {
          setIsLogged(true);
          setMessage("Logged in successfully");
          navigate("/ProductPage");
        } else {
          setIsLogged(false);
          setMessage("Invalid username or password");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("Authentication Failed: Incorrect username or password");
      });
  };

  return (
    <AuthenticateContext.Provider value={{setIsLogged}}>
    <form>
      <h2>Login</h2>
      <label>Username:</label>
      <input
        type="text"
        placeholder="Enter your username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <br />

      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
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
    </AuthenticateContext.Provider>
  );
}

export default LoginForm;
