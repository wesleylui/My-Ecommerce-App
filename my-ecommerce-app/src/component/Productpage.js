import React, { createContext, useState, useEffect } from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import ProductList from "./ProductList";
import Cart from "./Cart";

export const CartItemsContext = createContext(null);

function Productpage() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setItemsInCart(cartItemsFromLocalStorage);

    let calculatedTotalPrice = 0;
    for (let i = 0; i < cartItemsFromLocalStorage.length; i++) {
      calculatedTotalPrice += cartItemsFromLocalStorage[i].total;
    }
    setTotalPrice(calculatedTotalPrice);
  }, []);

  const handleCartAdd = (itemData) => {
    let inCart = false;
    for (let i = 0; i < itemsInCart.length; i++) {
      if (itemData.id === itemsInCart[i].id) {
        itemsInCart[i].quantity += 1;
        itemsInCart[i].total += itemData.price;
        setTotalPrice(totalPrice + itemData.price);
        inCart = true;
      }
    }
    if (itemsInCart.length === 0 || inCart === false) {
      itemData.quantity = 1;
      itemData.total = itemData.price;
      itemsInCart.push(itemData);
      setTotalPrice(totalPrice + itemData.price);
    }
    setItemsInCart(itemsInCart);
    const string = JSON.stringify(itemsInCart);
    localStorage.setItem("cartItems", string);
    localStorage.setItem("totalPrice", totalPrice);
  };

  const handleCartRemove = (itemData) => {
    for (let i = 0; i < itemsInCart.length; i++) {
      if (itemData.id === itemsInCart[i].id) {
        itemsInCart[i].quantity -= 1;
        itemsInCart[i].total -= itemsInCart[i].price;
        setTotalPrice(totalPrice - itemsInCart[i].price);
        if (itemsInCart[i].quantity === 0) {
          itemsInCart.splice(i, 1);
        }
        break;
      }
    }
    setItemsInCart(itemsInCart);
    localStorage.setItem("cartItems", JSON.stringify(itemsInCart));
  };

  return (
    <div className="product-page">
      <Header />
      <table style={{ width: "100%" }}>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            <ProductList handleCartAdd={handleCartAdd} />
          </td>
          <td style={{ verticalAlign: "top" }}>
            <Cart
              handleCartRemove={handleCartRemove}
              totalPrice={totalPrice}
              cartItems={itemsInCart}
            />
          </td>
        </tr>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
