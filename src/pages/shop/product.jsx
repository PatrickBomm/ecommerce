import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import { AddToCartBtn, ProductContainer, ProductDescription, ProductImg } from "./shopStyle";


export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <ProductContainer>
        <Link to={`/item/${id}`}>
        <ProductImg src={productImage} />
        </Link>
        

      <ProductDescription>
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </ProductDescription>
      <AddToCartBtn onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && cartItemCount}
      </AddToCartBtn>
    </ProductContainer>
  );
};