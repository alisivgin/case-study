import { createSelector } from "reselect";

const makeSelectProductTypes = createSelector(
  (state) => state.productTypes,
  (productTypes) => Object.keys(productTypes)
);

const makeSelectProductTypesSelected = createSelector(
  (state) => state.filters,
  (filters) => filters.productTypes
);

export { makeSelectProductTypes, makeSelectProductTypesSelected };
