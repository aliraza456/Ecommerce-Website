import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CheckoutItem from "../Components/CheckoutItem";
import "./checkout.styles.scss";



const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);
  return (
    <div className="checkout-container">
    <div className="checkout-header">
    <div className="header-block">Products</div>
    <div className="header-block">Description</div>
    <div className="header-block">Quantity</div>
    <div className="header-block">Price</div>
    <div className="header-block">Remove</div>

    </div>
        {cartItems.map((cartItem) => {
          return(
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          );
        })}
        <span className="total">Total: £ { cartTotal}</span>
      </div>
  )};

export default Checkout;
