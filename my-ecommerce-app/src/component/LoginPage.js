import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import LoginForm from "./LoginForm.js";
import SignupPage from "./SignupPage.js";

function LoginPage() {
  return (
    <div>
      <Header />
      <LoginForm />
      <SignupPage />
      <Footer />      
    </div>
  );
}

export default LoginPage;

