import { createSelector } from "reselect";

const makeSelectFilters = createSelector((state) => {
  console.log(state);
  return state.filters;
});
const makeSelectSort = createSelector((state) => state.sort);

export { makeSelectFilters, makeSelectSort };
