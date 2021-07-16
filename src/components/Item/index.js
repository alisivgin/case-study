import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { COLORS } from "../../constants";

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
  border: 2px solid ${COLORS.imageBorder};
  border-radius: 4px;
  background-color: ${COLORS.imageBackground};
`;

const Price = styled.h3`
  /* line-height: 20; */
  color: ${COLORS.priceColor};
  margin: 0;
  padding: 0;
  font-size: 1em;
  /* font-weight: 600; */
`;

const Name = styled.p`
  /* line-height: 20; */
  color: ${COLORS.priceColor};
  margin: 0;
  padding: 0;
`;

export default function Item() {
  return (
    <Container>
      <ImageContainer>
        <ProductImage />
      </ImageContainer>
      <Price>₺ 13.36</Price>
      <Name>Gorgeous Office Mug</Name>
      <Button></Button>
    </Container>
  );
}

function ProductImage() {
  return <Image />;
}
