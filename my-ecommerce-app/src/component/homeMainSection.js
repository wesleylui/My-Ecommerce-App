import React from "react";

function homeMainSection() {
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

      {/*<!-- Customer Reviews Section -->*/}
      {/*<!-- TODO: these customer reviews should come from reviews.js -->*/}
      <section class="customer-reviews">
        <h2>Customer Reviews</h2>

        {/*<!-- Review 1 -->*/}
        <div class="review">
          <p>
            <span class="customer-name">Aiden Lambert:</span>
            "I love Lebron! He is my glorious king! I will buy all his merch."
            <p class="rating">⭐⭐⭐⭐⭐</p>
          </p>
        </div>

        {/*<!-- Review 2 -->*/}
        <div class="review">
          <p>
            <span class="customer-name">Omar Ahmed:</span>
            "Amazing shop. User-friendly. Handsome development team."
            <p class="rating">⭐⭐⭐⭐⭐</p>
          </p>
        </div>
      </section>
    </main>
  );
}

export default homeMainSection;
