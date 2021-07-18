import React from "react";
import styled from "styled-components";
import { plus, minus } from "../../assets";
import { basket as connect } from "../../containers";

const ICON_SIZE = "0.8rem";
const COUNT_SIZE = "2rem";

const Container = styled.div`
  min-width: 15rem;
  height: 20rem;
  margin-top: 4rem;
  padding: 1.5rem;
  border: 6px solid #1ea4ce;
  background-color: #fff;
  display: flex;
  flex-direction: column;
`;

const ProductsContainer = styled.div`
  width: 100%;
  height: 18rem;
  overflow: auto;
  /* padding: 1.5rem; */
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid #e0e0e0;
  }
`;

const CheckoutItem = styled.div`
  width: auto;
  height: 5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f4f4f4;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountContainer = styled.div`
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Count = styled.div`
  width: ${COUNT_SIZE};
  height: ${COUNT_SIZE};
  background-color: #1ea4ce;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  margin: 0 1rem 0 1rem;
`;
const CountChanger = styled.span`
  width: ${ICON_SIZE};
  height: ${ICON_SIZE};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  ${({ type }) =>
    type === "increment" &&
    `
        background-image: url(${plus});
  `}
  ${({ type }) =>
    type === "decrement" &&
    `
        background-image: url(${minus});
  `}
`;

const Total = styled.div`
  width: 6rem;
  height: 3rem;
  border: 2px solid #1ea4ce;
  margin-left: auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
`;

const Message = styled.p``;
function Basket({ products, totalPrice, addToChart, removeFromChart }) {
  console.log(products);
  if (products.length === 0) {
    return (
      <Container>
        <Message>Please add product to chart.</Message>
      </Container>
    );
  }
  return (
    <Container>
      <ProductsContainer>
        {products.map((p) => {
          return (
            <CheckoutItem>
              <ItemInfo>
                <span>{p.name}</span>
                <span>₺ {p.price}</span>
              </ItemInfo>
              <CountContainer>
                <CountChanger
                  type="decrement"
                  onClick={() => removeFromChart(p.slug)}
                />
                <Count>{p.count}</Count>
                <CountChanger
                  type="increment"
                  onClick={() => addToChart(p.slug)}
                />
              </CountContainer>
            </CheckoutItem>
          );
        })}
      </ProductsContainer>
      {totalPrice > 0 ? <Total>₺ {totalPrice}</Total> : null}
    </Container>
  );
}

export default connect(Basket);
