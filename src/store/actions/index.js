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
export function addToChart(slug) {
  return {
    type: ACTION.ADD_TO_CHART,
    product: slug,
  };
}

export function removeFromChart(slug) {
  return {
    type: ACTION.REMOVE_FROM_CHART,
    product: slug,
  };
}
