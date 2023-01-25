import React from "react";
import { ShoppingCart } from "phosphor-react"
import { NavbarConteiner, NavbarLinks, NavbarTitle, HomeButton } from "./navbarStyle";
import { useState } from "react";
import { Cart } from "./dropDown/cart";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const [showCart, setShowCart] = useState(false);

    const switchShowCart = () => {
        setShowCart(!showCart);
    }

    const closeCart = () => {
        setShowCart(false);
    }


    return (
        <NavbarConteiner>
            <NavbarTitle>
                <h1> JT SHOP</h1>
            </NavbarTitle>
            <Link to={"/"} onClick={() => closeCart()}>
                <HomeButton>
                    Home
                </HomeButton>
            </Link>
            <NavbarLinks>

                <ToggleCartButton className={'shop-button'} onClick={() => switchShowCart()}>
                    <div>
                        Shop
                    </div>
                    <ShoppingCart size={32} color="#FFF" />
                </ToggleCartButton>
                <div className="dropdown" style={{ display: showCart ? "flex" : "none" }}>
                    <Cart />
                </div>
            </NavbarLinks>
        </NavbarConteiner>
    );
};

const ToggleCartButton = styled.div`
  color: white;
  font-size: 1rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  &:hover{
    color: #48BB78;
    }
`;