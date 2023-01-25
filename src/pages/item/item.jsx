import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from '../../products'
import { useParams } from "react-router-dom";
import { AddToCartBtn, ItemContainer, ItemDescription, ItemImage, ProductImg } from "./itemStyle";

export const Item = () => {

    const { addToCart, cartItems } = useContext(ShopContext);
    let {id} = useParams()
    var item = PRODUCTS.find(product => product.id === Number(id));

    const cartItemCount = cartItems[id];
    return (
        <ItemContainer>
            <ItemImage>
                <ProductImg src={item.productImage} />

            </ItemImage>
            <ItemDescription>
                <h1>{item.productName}</h1>
                <p>{item.description}</p>
                
            </ItemDescription>

            <div className="price">
                <p>PRICE: ${item.price}</p>
                <div className="itemCart">
                <AddToCartBtn onClick={() => addToCart(id)}>
                    Add To Cart {cartItemCount > 0 && cartItemCount}
                </AddToCartBtn>
            </div>
            </div>
            
        </ItemContainer>
    )
}
