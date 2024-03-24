import React from "react";
import Header from "./header.js";
import HomeMainSection from "./homeMainSection.js";
import Footer from "./footer.js";
// import reviews from "../data/reviews";

function Homepage() {
  return (
    <div>
      <h1>From Homepage.js (Child)</h1>
      <a href="/"> Home </a>
      {/* <HomeMainSection /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default Homepage;

