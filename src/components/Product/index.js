import React from "react";
import Button from "../Button";
import { useDispatch } from "react-redux";

import * as S from "./style";

import { addToChart } from "../../store/actions";

function Product({ slug, price, name, itemType }) {
  const dispatch = useDispatch();
  return (
    <S.Container>
      <S.ImageContainer>
        <ProductImage type={itemType} />
      </S.ImageContainer>
      <S.Price>₺ {price.toString().replace(".", ",")}</S.Price>
      <S.Name>{name}</S.Name>
      <Button onClicked={() => dispatch(addToChart(slug))} text="Add"></Button>
    </S.Container>
  );
}

function ProductImage({ type }) {
  return <S.Image type={type} />;
}

export default Product;
