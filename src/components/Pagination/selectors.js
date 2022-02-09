import { createSelector } from "reselect";

const makeSelectPagination = createSelector(
  (state) => state.pagination,
  (pagination) => pagination
);

export { makeSelectPagination };
