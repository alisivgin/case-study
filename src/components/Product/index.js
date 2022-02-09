import React from "react";
import Button from "../Button";
import { products as connect } from "../../containers";

import * as S from "./style";

function Product({ slug, price, name, addToChart, itemType }) {
  return (
    <S.Container>
      <S.ImageContainer>
        <ProductImage type={itemType} />
      </S.ImageContainer>
      <S.Price>₺ {price.toString().replace(".", ",")}</S.Price>
      <S.Name>{name}</S.Name>
      <Button onClicked={() => addToChart(slug)} text="Add"></Button>
    </S.Container>
  );
}

function ProductImage({ type }) {
  return <S.Image type={type} />;
}

export default connect(Product);
