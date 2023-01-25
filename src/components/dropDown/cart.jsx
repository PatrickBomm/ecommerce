import React, { Fragment, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { Link } from "react-router-dom";
import { Container, RemoveButton, ItemsContainer, ItemPrice, ItemWrapper, ItemInfoWrapper, ProductImage, ItemTitle, ItemQuantityWrapper, ItemQuantityLabel, ItemQuantityInput, Subtotal, SubtotalText, SubtotalPrice, EmptyCartMessage, CheckoutButton } from "./cartStyle";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, updateCartItemCount } = useContext(ShopContext);

  const getItemQuantity = (itemId) => {
    return cartItems[itemId];
  }

  const getTotalPrice = (itemId) => {
    const item = PRODUCTS.find((product) => product.id === itemId);
    return `$ ${item.price * getItemQuantity(itemId)}`;
  }

  function getItemsOnCart() {
    let items = [];
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        items.push(PRODUCTS.find((product) => product.id === Number(item)));
      }
    }
    return items;
  }

  function removeItemFromCart(itemId) {
    updateCartItemCount(0, itemId);
  }

  return (
    <Container>
      <h1>Carrinho</h1>
      {getItemsOnCart().length > 0 ? (
        <Fragment>
          <ItemsContainer>
            {getItemsOnCart().map((item) => (
              <ItemWrapper key={item.id}>
                <ProductImage src={item.productImage} />

                <ItemInfoWrapper>
                  <ItemTitle>{item.productName}</ItemTitle>
                  <ItemPrice>{getTotalPrice(item.id)}</ItemPrice>
                  <ItemQuantityWrapper>
                    <ItemQuantityLabel>Quantidade</ItemQuantityLabel>
                    <ItemQuantityInput
                      type="number"
                      value={getItemQuantity(item.id)}
                      onChange={(e) => updateCartItemCount(e.target.value, item.id)}
                    />
                  </ItemQuantityWrapper>
                </ItemInfoWrapper>
                <RemoveButton onClick={() => removeItemFromCart(item.id)}>X</RemoveButton>
              </ItemWrapper>
            ))}
          </ItemsContainer>
          <Subtotal>
            <SubtotalText>Subtotal: </SubtotalText>
            <SubtotalPrice>{`$ ${getTotalCartAmount()}`}</SubtotalPrice>
          </Subtotal>
          <Link to="/checkout">
            <CheckoutButton>Finalizar compra</CheckoutButton>
            
          </Link>
        </Fragment>

      ) : (
        <EmptyCartMessage>
          Seu carrinho está vazio
        </EmptyCartMessage>
      )}
    </Container>
  );
};

