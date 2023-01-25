import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./itemsCheckout";
import { useNavigate } from "react-router-dom";
import { CartCheckoutButton, CartContainer, Subtotal } from './itemsStyle'

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <CartContainer>
      <div>
        <h1>Checkout Page</h1>
      </div>
      <CartContainer>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </CartContainer>

      {totalAmount > 0 ? (
        <CartCheckoutButton>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <Subtotal> Subtotal: ${totalAmount} </Subtotal>
         
        </CartCheckoutButton>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </CartContainer>
  );
};