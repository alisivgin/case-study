import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  makeSelectProductTypes,
  makeSelectProductTypesSelected,
} from "./selectors";

import { applyFilter } from "../../store/actions";

import * as S from "./style";

function ProductTypes() {
  const dispatch = useDispatch();
  const productTypes = useSelector(makeSelectProductTypes);
  const selected = useSelector(makeSelectProductTypesSelected);
  return (
    <S.Container>
      {productTypes.map((pt) => (
        <S.Type
          key={pt}
          onClick={() => dispatch(applyFilter("productType", pt))}
          active={selected === pt}
        >
          {pt}
        </S.Type>
      ))}
    </S.Container>
  );
}

export default ProductTypes;
