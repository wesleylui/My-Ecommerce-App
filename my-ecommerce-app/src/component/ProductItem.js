<<<<<<< HEAD
=======
import React from "react";
>>>>>>> 9302e4fe242ca75f4b87dee3f4f996fd2cdfb0e8
import { useState } from "react";
import './styles.css';

function ProductItem(props) {
  const [showDetails, setShowDetails] = useState(false);
  const [productHoverID, setProductHover] = useState(0);

  return props.products.map(function (product) {
    return (
      <div className="product-item" id={product.id}>
        <div className="product-image">
          <img
            style={{ height: "300px" }}
            src={product.image}
            alt={product.name}
          />
        </div>
        <div
          className="product-name"
          onMouseEnter={function() {
            setShowDetails(!showDetails);
            setProductHover(product.id);
          }}
            onMouseLeave={() => setShowDetails(!showDetails)}
        >
          <p>
            {product.name}<br></br>
            Price: ${product.price}
          </p>
        </div>
        <button type="button" onClick={() => props.handleCartAdd(product)}>
          Add to Cart
        </button>
        {showDetails && productHoverID === product.id && (
          <div>{product.description}</div>
        )}
      </div>
    );
  });
}
export default ProductItem;
