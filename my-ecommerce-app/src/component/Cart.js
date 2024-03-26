import React from "react";
import CartItem from "./CartItem";

function Cart(props) {
  return (
    <div>
      <h1>Shopping Cart</h1>

      {props.cartItems.length !== 0 && (
          <CartItem
            removeCartItem={props.removeCartItem}
            cartItems={props.cartItems}
          />
      )}
        <strong>Total (in cart): ${(props.totalPrice).toFixed(2)}</strong>
    </div>
  );
}
export default Cart;
