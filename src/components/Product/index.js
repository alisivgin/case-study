import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { COLORS } from "../../constants";
import { products as connect } from "../../containers";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 8rem;
  /* background-color: #c4c4c4; */
  align-items: center;
  padding: 0.5rem;
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
  font-weight: 600;
  color: #191919;
  margin: 0.4rem 0 0.4rem 0;
  padding: 0;
`;

function Product({ slug, price, name, addToChart }) {
  return (
    <Container>
      <ImageContainer>
        <ProductImage />
      </ImageContainer>
      <Price>₺ {price}</Price>
      <Name>{name}</Name>
      <Button onClicked={() => addToChart(slug)}></Button>
    </Container>
  );
}

function ProductImage() {
  return <Image />;
}

export default connect(Product);
