import React from "react";
import ProductItem from "./ProductItem";
import products from "../data/products";

function ProductList(props) {
  return (
      <ProductItem productItems={products} addCartItem={props.addCartItem} />
  );
}
export default ProductList;
