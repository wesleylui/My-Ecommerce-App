import React, { createContext, useState, useEffect, useContext } from "react";
import Header from "./header.js";
import Footer from "./footer.js";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { useNavigate } from "react-router-dom";
import { AuthenticateContext } from "./AuthenticateContext";

export const CartItemsContext = createContext(null);

function Productpage() {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  let navigate = useNavigate();
  const { isLogged } = useContext(AuthenticateContext);

  useEffect(() => {

    if (isLogged == false) {
      navigate("/LoginPage");
      return;
    }

    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(cartItemsFromLocalStorage);

    let calculatedTotalPrice = 0;
    for (let i = 0; i < cartItemsFromLocalStorage.length; i++) {
      calculatedTotalPrice += cartItemsFromLocalStorage[i].total;
    }
    setTotalPrice(calculatedTotalPrice);
  }, []);

  const updateCartItemsAndLocalStorage = (updatedCartItems) => {
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    localStorage.setItem("totalPrice", totalPrice);
  };

  const addCartItem = (itemData) => {
    let updatedCartItems = [...cartItems];
    let inCart = 0;

    updatedCartItems.forEach((cartItem) => {
      if (itemData.id === cartItem.id) {
        cartItem.quantity += 1;
        cartItem.total += itemData.price;
        setTotalPrice(totalPrice + itemData.price);
        inCart = 1;
        return;
      }
    });

    if (!inCart) {
      itemData.quantity = 1;
      itemData.total = itemData.price;
      updatedCartItems.push(itemData);
      setTotalPrice(totalPrice + itemData.price);
    }

    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  const removeCartItem = (itemData) => {
    let updatedCartItems = [...cartItems];

    updatedCartItems.forEach((cartItem, index) => {
      if (itemData.id === cartItem.id) {
        cartItem.quantity -= 1;
        cartItem.total -= cartItem.price;
        setTotalPrice(totalPrice - cartItem.price);

        if (cartItem.quantity === 0) {
          updatedCartItems.splice(index, 1);
        }

        return;
      }
    });

    updateCartItemsAndLocalStorage(updatedCartItems);
  };

  return (
    <div className="product-page">
      <Header />
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top" }}>
              <ProductList addCartItem={addCartItem} />
            </td>
            <td style={{ verticalAlign: "top" }}>
              <Cart
                removeCartItem={removeCartItem}
                totalPrice={totalPrice}
                cartItems={cartItems}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Footer />
    </div>
  );
}

export default Productpage;
