import React, { useEffect, useState } from "react";
import reviews from "../data/reviews.js";

function HomeMainSection() {
  const [selectedReviews, setSelectedReviews] = useState([]);

  useEffect(() => {
    const randomReviews = [];
    for (let i = 0; i < 2; i++) {
      const randomIndex = Math.floor(Math.random() * reviews.length); // Generate a random index
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
          BBBaaaaaa. Whats that? Oh its the goat, King James. LeShop is your
          goto place for anything Lebron James related.
        </p>
      </section>

      {/*<!-- Shop Now Button -->*/}
      <section class="shop-now">
        <button>
          <a href="products.html">Shop Now</a>
        </button>
      </section>

      {/*<!-- Render the selected reviews -->*/}
      <div>
        {selectedReviews.map((review, index) => (
          <div key={index} class="review">
            <h2>{review.customerName}</h2>
            <p>{review.reviewContent}</p>
            <p>Rating: {'⭐'.repeat(review.stars)}</p> {/* Display as many star emojis as number from review.stars */}
          </div>
        ))}
      </div>
    </main>
  );
}

export default HomeMainSection;
