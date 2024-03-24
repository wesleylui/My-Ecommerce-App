import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./component/Homepage.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* TODO: add the paths for products and login */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;

