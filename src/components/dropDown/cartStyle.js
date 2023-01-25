import styled from "styled-components";


export const Container = styled.div`
  position: absolute;
  right: 5rem;
  top: 2.5rem;
  width: 25rem;
  height: 25rem;
  display: flex;
  flex-direction: column;

  background-color: #F7FAFC;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  border-radius: 0.5rem;
  padding: 1rem 1.5rem;
  overflow: hidden;
  overflow-y: scroll;
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const ItemWrapper = styled.div`
  display: flex;
  gap: 1rem;
`

export const ItemInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const ProductImage = styled.img`
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
  width: 7rem;
`

export const ItemTitle = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const ItemPrice = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const ItemQuantityWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const ItemQuantityLabel = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
`

export const ItemQuantityInput = styled.input`
  width: 3rem;
  height: 1.5rem;
  border: 1px solid #E2E8F0;
  border-radius: 0.25rem;
  padding: 0.25rem;
  font-size: 0.85rem;
  font-weight: 500;
  text-align: center;
`

export const Subtotal = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  justify-content: flex-end;
`


export const SubtotalText = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const SubtotalPrice = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`

export const EmptyCartMessage = styled.p`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 0.5rem;
    text-align: center;
`

export const RemoveButton = styled.button`
  background-color: #F56565;
  color: #FFF;
  border: none;
  border-radius: 0.15rem;
  position: relative;
  left: 5rem;
  font-size: 0.5rem;
  text-align: center;

  cursor: pointer;
  height: 1.5rem;
  width: 1.5rem;
`
export const CheckoutButton = styled.button`
  background-color: #48BB78;
  color: #FFF;
  border: none;
  border-radius: 0.15rem;
  position: relative;
  left: 5rem;
  font-size: 1rem;
  text-align: center;

  cursor: pointer;
  height: 2.5rem;
  width: 10rem;
`
