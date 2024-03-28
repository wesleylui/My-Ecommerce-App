import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

function SignupForm() {
  let navigate = useNavigate();

  const handleSwitch = () => {
    navigate("/LoginPage");
  }
  return (
    <div>
      <Header />
      <form>
        <h2>Signup</h2>
        <label>Username:</label>
        <input type="text" placeholder="Enter your username" required/>
        <br />

        <label>Password:</label>
        <input type="password" placeholder="Enter your password" required></input>
        <br />

        <label>Confirm Password:</label>
        <input type="password" placeholder="Enter your password" required></input>

        <br />
        <label>Email:</label>
        <input type="email" placeholder="Enter your email" required></input>

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
