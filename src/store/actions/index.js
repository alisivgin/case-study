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

export function showBottomSheet(content) {
  return {
    type: ACTION.SHOW_BOTTOM_SHEET,
    content,
  };
}

export function closeBottomSheet() {
  return {
    type: ACTION.CLOSE_BOTTOM_SHEET,
  };
}

export function setActivePage(number) {
  return {
    type: ACTION.SET_ACTIVE_PAGE,
    number,
  };
}
