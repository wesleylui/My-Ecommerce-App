import React from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import ProductList from "./ProductList.js";
import Cart from "./Cart.js";

function Productpage() {
  return (
    <div className="product-page">
      <Header />
      <table>
        <tr>
          <td>
            <ProductList />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Cart />
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
