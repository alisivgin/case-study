import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { COLORS } from "../../constants";
import { products as connect } from "../../containers";
import { mug, shirt } from "../../assets";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  align-items: center;
  padding: 0.5rem;
  margin: 0 auto;
`;

const ImageContainer = styled.div`
  border: 1px solid ${COLORS.imageBorder};
  border-radius: 4px;
  background-color: ${COLORS};
  padding: 0.8rem;
`;

const Image = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: ${COLORS.imageBackground};
  background-repeat: no-repeat;
  background-size: contain;
  ${({ type }) =>
    type === "mug" &&
    `
    background-image: url(${mug});
  `}
  ${({ type }) =>
    type === "shirt" &&
    `
    background-image: url(${shirt});
  `}
`;

const Price = styled.h3`
  color: ${COLORS.priceColor};
  margin: 0.4rem 0 0 0;
  padding: 0;
  font-size: 14px;
  align-self: flex-start;
  line-height: 20px;
  font-weight: bold;
`;

const Name = styled.p`
  min-height: 2.25rem;
  font-weight: 600;
  font-size: 14px;
  color: #191919;
  margin: 0.4rem 0 0.4rem 0;
  padding: 0;
`;

function Product({ slug, price, name, addToChart, itemType }) {
  console.log(itemType);
  return (
    <Container>
      <ImageContainer>
        <ProductImage type={itemType} />
      </ImageContainer>
      <Price>₺ {price.toString().replace(".", ",")}</Price>
      <Name>{name}</Name>
      <Button onClicked={() => addToChart(slug)} text="Add"></Button>
    </Container>
  );
}

function ProductImage({ type }) {
  return <Image type={type} />;
}

export default connect(Product);
