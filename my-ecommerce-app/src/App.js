import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/Homepage.js";
import ProductPage from "./component/Productpage.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* TODO: add the paths for products and login */}
        <Route path="/" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

