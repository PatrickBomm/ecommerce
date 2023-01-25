import styled from 'styled-components';

export const CartItemContainer = styled.div `width: 700px;
height: 250px;
display: flex;
align-items: center;
box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
margin: 30px;`;

export const CartItemImg = styled.img `width: 200px;
padding-left: 30px;`;

export const CartItemDescription = styled.div `width: 100%;
font-size: 30px;
padding-left: 30px;`;

export const CartItemHandler = styled.div `width: 40px;
text-align: center;
font-weight: bolder;
display: flex;`;

export const Buttons = styled.div `display: flex;`;
 
export const CartContainer = styled.div `display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`;

export const CartCheckoutButton = styled.div `width: 700px;
color: black;
border: none;
border-radius: 8px;
margin: 10px;
cursor: pointer;
display: flex;
justify-content: space-around;`;

export const Subtotal = styled.p `text-align: center;
width: 60px;`
