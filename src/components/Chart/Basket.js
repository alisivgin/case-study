import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as S from "./style";
import { makeSelectBasketProducts } from "./selectors";

import { addToChart, removeFromChart } from "../../store/actions";

function Basket() {
  const dispatch = useDispatch();
  const products = useSelector(makeSelectBasketProducts);
  const totalPrice = products.reduce((acc, p) => acc + p.count * p.price, 0);
  if (products.length === 0) {
    return (
      <S.Container>
        <S.Message>Please add a product to cart.</S.Message>
      </S.Container>
    );
  }
  return (
    <S.Container>
      <S.ProductsContainer>
        {products.map((p) => {
          return (
            <S.CheckoutItem>
              <S.ItemInfo>
                <span className="name">{p.name}</span>
                <span className="price">
                  ₺ {p.price.toString().replace(".", ",")}
                </span>
              </S.ItemInfo>
              <S.CountContainer>
                <S.CountChanger
                  type="decrement"
                  onClick={() => dispatch(removeFromChart(p.slug))}
                />
                <S.Count>{p.count}</S.Count>
                <S.CountChanger
                  type="increment"
                  onClick={() => dispatch(addToChart(p.slug))}
                />
              </S.CountContainer>
            </S.CheckoutItem>
          );
        })}
      </S.ProductsContainer>
      {totalPrice > 0 ? (
        <S.Total>
          ₺ {totalPrice.toFixed(2).toString().replace(".", ",")}
        </S.Total>
      ) : null}
    </S.Container>
  );
}

export default Basket;
