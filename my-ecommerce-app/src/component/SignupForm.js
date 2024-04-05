import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function SignupForm() {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSwitch = () => {
    navigate("/LoginPage");
  };

  const handleSignUp = async (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:5000/SignupForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        password2: password2,
        email: email,
      }),
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
        if (data.message === "Signup successful!") {
          setMessage("Signup successful!");
        }
        else if (data.message == "Fields cannot be empty") {
          setMessage("Fields cannot be empty");
        }
        else if (data.message == "Username already exists") {
          setMessage("Username already exists");
        }
        else if (data.message == "Password fields do not match") {
          setMessage("Password fields do not match");
        }
        else {
          setMessage("Unexpected error");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        setMessage("CATCH ERROR");
      });
  };
  return (
    <div>
      <Header />
      <form>
        <h2>Signup</h2>
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
        ></input>
        <br />

        <label>Confirm Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
          required
        ></input>

        <br />
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>

        <br />
        <button type="button" onClick={handleSignUp}>
          Signup
        </button>
        <br />
        <button type="button" onClick={handleSwitch}>
          Switch to Login
        </button>
        <br />
        {message && <p>{message}</p>}
      </form>
      <Footer />
    </div>
  );
}

export default SignupForm;
