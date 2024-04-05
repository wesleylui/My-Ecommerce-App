import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

function ProductList(props) {
  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/ProductPage")
    .then((response) => response.json())
    .then((data) => {
      setProductItems(data);
    })
  }, []);
  return (
      <ProductItem productItems={productItems} addCartItem={props.addCartItem} />
  );
}
export default ProductList;
