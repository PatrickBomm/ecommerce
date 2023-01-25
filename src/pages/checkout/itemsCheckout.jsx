import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';
import { Buttons, CartItemContainer, CartItemDescription, CartItemHandler, CartItemImg } from './itemsStyle';


export const CartItem = (props) => {
    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext)

    return (
        <CartItemContainer>
            <CartItemImg src={productImage} />
            <CartItemDescription>
                <p>
                    <b> {productName}</b>
                </p>
                <p> ${price}</p>
                <CartItemHandler>
                    <input value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)} />
                    <Buttons>
                        <button onClick={() => removeFromCart(id)}> - </button>
                        <button onClick={() => addToCart(id)}> + </button>
                    </Buttons>
                </CartItemHandler>
            </CartItemDescription>
        </CartItemContainer>
    )
}