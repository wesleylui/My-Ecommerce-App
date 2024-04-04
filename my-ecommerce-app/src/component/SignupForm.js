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
  }

  // const handleSignUp = 
  return (
    <div>
      <Header />
      <form>
        <h2>Signup</h2>
        <label>Username:</label>
        <input type="text" 
        placeholder="Enter your username" 
        value = {username}
        onChange = {(e) => setUsername(e.target.value)}
        required/>
        <br />

        <label>Password:</label>
        <input type="password"
        placeholder="Enter your password"
        value = {password}
        onChange = {(e) => setPassword(e.target.value)}
        required></input>
        <br />

        <label>Confirm Password:</label>
        <input type="password"
        placeholder="Enter your password"
        value = {password2}
        onChange = {(e) => setPassword2(e.target.value)}
        required></input>

        <br />
        <label>Email:</label>
        <input type="email"
        placeholder="Enter your email"
        value = {email}
        onChange = {(e) => setEmail(e.target.value)}
        required></input>

        <br />
        <button type="button">Signup</button>
        <br />
        <button type="button" onClick={handleSwitch}>Switch to Login</button>
      </form>
      <Footer />
    </div>
  );
}

export default SignupForm;
