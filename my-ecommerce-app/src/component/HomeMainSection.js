import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import reviews from "../data/reviews.js";

function HomeMainSection() {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const randomReviews = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * reviews.length); // Generate a random index\
      if (randomReviews.includes(reviews[randomIndex])) {
        i--; //if randomReviews already includes the index, decrement i so we change one less review
        //the two reviews will never be the same review bc cant be same index
        continue;
      }
      randomReviews.push(reviews[randomIndex]); //add the review at the random index to the selectedReviews array
    }
    setSelectedReviews(randomReviews); // Set the selectedReviews state to the randomReviews array
  }, []);

  return (
    <main>
      {/*<!-- About Us Section -->*/}
      <section class="about-us">
        <h2>About Us</h2>
        <p>
          Welcome to our online store! We are passionate about providing
          high-quality products and exceptional customer servie. Learn more
          about our story and commitment to your satisfaction.
        </p>
      </section>

      {/*<!-- Shop Now Button -->*/}
      <section class="shop-now">
        <button>
          <Link to="./ProductPage" class="nav-link">
            Shop Now
          </Link>
        </button>
      </section>

      {/*<!-- Render the selected reviews -->*/}
      <section class="customer-reviews">
        {selectedReviews.map((review, index) => (
          <div key={index} class="review">
            <h2>{review.customerName}</h2>
            <p>{review.reviewContent}</p>
            <p>Rating: {"⭐".repeat(review.stars)}</p>{" "}
            {/* Display as many star emojis as number from review.stars */}
          </div>
        ))}
      </section>
    </main>
  );
}

export default HomeMainSection;
