import React from "react";
import styled from "styled-components";
import { plus, minus } from "../../assets";
import { basket as connect } from "../../containers";

const ICON_SIZE = "0.8rem";
const COUNT_SIZE = "2rem";

const Container = styled.div`
  min-width: 18.5rem;
  height: 20rem;
  margin-top: 4rem;
  padding: 1.5rem;
  border: 6px solid #1ea4ce;
  border-radius: 2px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  @media (min-width: 320px) and (max-width: 480px),
    (min-width: 480px) and (max-width: 1024px) {
    border: none;
  }
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

  .price {
    color: #1ea4ce;
    font-weight: 600;
    font-size: 14px;
  }
  .name {
    font-size: 14px;
    line-height: 18px;
  }
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
  border-radius: 2px;
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
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
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
  border-radius: 2px;
  margin-left: auto;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  color: #1ea4ce;
  font-size: 14px;
  font-weight: 600;
`;

const Message = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #1ea4ce;
`;
function Basket({ products, totalPrice, addToChart, removeFromChart }) {
  if (products.length === 0) {
    return (
      <Container>
        <Message>Please add a product to chart.</Message>
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
                <span className="name">{p.name}</span>
                <span className="price">
                  ₺ {p.price.toString().replace(".", ",")}
                </span>
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
      {totalPrice > 0 ? (
        <Total>₺ {totalPrice.toString().replace(".", ",")}</Total>
      ) : null}
    </Container>
  );
}

export default connect(Basket);
