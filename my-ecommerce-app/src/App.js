import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/Homepage.js";
import ProductPage from "./component/Productpage.js";
import LoginPage from "./component/LoginPage.js";
import SignupForm from "./component/SignupForm.js";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ProductPage" element={<ProductPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/SignupForm" element={<SignupForm />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
