import React from "react";
import { useState } from "react";
import './styles.css';

function ProductItem(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [selectID, setSelectID] = useState(0);

  return props.productItems.map(function (productItem) {
    return (
      <div className="product-item" id={productItem.id}>
          <img
            style={{ height: "150px" }}
            src={productItem.image}
            alt={productItem.name}
          />
        <div
          onMouseEnter={function() {
            setShowDetails(!showDetails);
            setSelectID(productItem.id);
          }}
            onMouseLeave={() => setShowDetails(!showDetails)}
        >
          <p>
            <strong>{productItem.name}</strong>
          </p>
        </div>
        <p>
        <strong>Price: ${productItem.price}</strong>
        </p>
        <button onClick={() => props.addCartItem(productItem)}>
          Add to Cart
        </button>
        {showDetails && selectID === productItem.id && (
          <div>{productItem.description}</div>
        )}
      </div>
    );
  });
}
export default ProductItem;
