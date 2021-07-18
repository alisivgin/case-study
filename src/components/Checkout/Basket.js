import React from "react";
import styled from "styled-components";
import { plus, minus } from "../../assets";
import { COLORS } from "../../constants";

const ICON_SIZE = "0.8rem";
const COUNT_SIZE = "2rem";

const Container = styled.div`
  min-width: 15rem;
  height: 20rem;
  margin-top: 4rem;
  padding: 1.5rem;
  border: 6px solid #1ea4ce;
  background-color: #fff;
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
const CountChanger = styled.div`
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
`;
export default function Basket() {
  return (
    <Container>
      <CheckoutItem>
        <ItemInfo>
          <span>Example Product</span>
          <span>₺14.93</span>
        </ItemInfo>
        <CountContainer>
          <CountChanger type="decrement" />
          <Count>3</Count>
          <CountChanger type="increment" />
        </CountContainer>
      </CheckoutItem>
      <CheckoutItem>
        <ItemInfo>
          <span>Example Product</span>
          <span>₺14.93</span>
        </ItemInfo>
        <CountContainer>
          <CountChanger type="decrement" />
          <Count>3</Count>
          <CountChanger type="increment" />
        </CountContainer>
      </CheckoutItem>
      <CheckoutItem>
        <ItemInfo>
          <span>Example Product</span>
          <span>₺14.93</span>
        </ItemInfo>
        <CountContainer>
          <CountChanger type="decrement" />
          <Count>3</Count>
          <CountChanger type="increment" />
        </CountContainer>
      </CheckoutItem>
      <Total>₺39,97</Total>
    </Container>
  );
}
