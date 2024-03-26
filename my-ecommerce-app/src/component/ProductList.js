import React from "react";
import ProductItem from "./ProductItem";
import products from "../data/products";

function ProductList(props) {
  return (
    <div className="product-list">
      <ProductItem productItems={products} addCartItem={props.addCartItem} />
    </div>
  );
}
export default ProductList;
