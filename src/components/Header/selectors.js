import { createSelector } from "reselect";

const makeSelectTotalPrice = createSelector(
  (state) => state.chart,
  (state) => state.products,
  (chart, products) => {
    const totalPrice = Object.keys(chart).reduce((acc, pSlag) => {
      return acc + chart[pSlag] * products.data[pSlag].price;
    }, 0);
    return totalPrice.toFixed(2).replace(".", ",");
  }
);

export { makeSelectTotalPrice };
