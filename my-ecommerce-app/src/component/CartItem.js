import React from "react";

function CartItem(props) {
  return props.cartItems.map(function (product) {
    return (
      <div className="product-item-cart" id={product.id}>
        <img style={{ height: "300px" }} src={product.image} alt={product.name}/>
        <br/>
        {product.name}
        <br/>
        Price: ${product.price}
        <br/>
        Quantity: {product.quantity}
        <br/>
        Total: ${product.total.toFixed(2)}
        <button 
          type="button"
          onClick={() => {
            props.removeCartItem(product);
          }}
        >
          Remove
        </button>
      </div>
    );
  });
}

export default CartItem;
