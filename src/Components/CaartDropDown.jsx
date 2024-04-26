import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import "./cart-dropdown.styles.scss";


const CaartDropDown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <button onClick={goToCheckoutHandler}>GO TO CHECKOUT</button>
    </div>
  );
};

export default CaartDropDown;
