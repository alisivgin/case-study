import { createSelector } from "reselect";

const makeSelectBasketProducts = createSelector(
  (state) => state.chart,
  (state) => state.products,
  (chart, products) =>
    Object.keys(chart).reduce((acc, pSlug) => {
      return [...acc, { ...products.data[pSlug], count: chart[pSlug] }];
    }, [])
);

export { makeSelectBasketProducts };
