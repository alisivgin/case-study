import { createSelector } from "reselect";
import { filter, sortProducts } from "./utills";
import { ONE_PAGE_ITEM_COUNT } from "../../constants";

const selectProducts = (state) => state.products;

const makeSelectProducts = createSelector(selectProducts, ({ data }) => data);
const makeSelectProductsLifecycle = createSelector(
  selectProducts,
  ({ lifecycle }) => lifecycle
);

const makeSelectPaginatedProducts = createSelector(
  [
    selectProducts,
    (state) => state.filters,
    (state) => state.sort,
    (state) => state.pagination,
  ],
  (products, filters, sort, pagination) => {
    const filteredProducts = filter(products, filters);
    const sorted = sortProducts(filteredProducts, sort);
    const paginated = sorted.slice(
      (pagination.activeNumber - 1) * ONE_PAGE_ITEM_COUNT,
      pagination.activeNumber * ONE_PAGE_ITEM_COUNT
    );
    return paginated;
  }
);

export {
  makeSelectProducts,
  makeSelectProductsLifecycle,
  makeSelectPaginatedProducts,
};
