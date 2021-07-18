import * as ACTION from "./actionTypes";

export function applyFilter(filterType, filter) {
  return {
    type: ACTION.APPLY_FILTER,
    filterType,
    filter,
  };
}

export function applySort(sortFor) {
  return {
    type: ACTION.APPLY_SORT,
    sortFor,
  };
}
