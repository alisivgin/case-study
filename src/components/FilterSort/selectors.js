import { createSelector } from "reselect";

const makeSelectFilters = createSelector(
  (state) => state.filters,
  (filters) => filters
);
const makeSelectSort = createSelector(
  (state) => state.sort,
  (sort) => sort
);

export { makeSelectFilters, makeSelectSort };
