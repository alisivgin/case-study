import { createSelector } from "reselect";

const makeSelectPagination = createSelector((state) => state.pagination);

export { makeSelectPagination };
