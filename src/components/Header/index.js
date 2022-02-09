import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useResponsive } from "../../misc/hooks";

import { showBottomSheet } from "../../store/actions";
import { makeSelectTotalPrice } from "./selectors";

import * as S from "./style";

function Item() {
  const dispatch = useDispatch();
  const { isMobile } = useResponsive();
  const totalPrice = useSelector(makeSelectTotalPrice);
  return (
    <S.Container
      onClick={() => (isMobile ? dispatch(showBottomSheet("chart")) : null)}
    >
      <S.Logo />
      <S.TotalPrice>
        <S.Text>₺ {totalPrice}</S.Text>
      </S.TotalPrice>
    </S.Container>
  );
}

export default Item;
