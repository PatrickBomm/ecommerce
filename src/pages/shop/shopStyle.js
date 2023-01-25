import styled from "styled-components";

export const ProductContainer = styled.div `border-radius: 15px;
text-align: center;
overflow: hidden;
box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;`;

export const ProductDescription = styled.div `text-align: center;`

export const AddToCartBtn = styled.button `background-color: transparent;
border: 2px solid rgb(19, 19, 19);
padding: 5px 10px;
border-radius: 15px;
margin-bottom: 15px;

&:hover{

    background-color: rgb(19, 19, 19);
    color: white;
    cursor: pointer;
}
`;

export const ProductImg = styled.img `width: 300px;
height: 300px;
object-fit: fill;
padding: 30px;`;

export const Products = styled.div `width: 100%;
height: auto;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
row-gap: 40px;
place-items: center;
padding: 50px 0;`;

