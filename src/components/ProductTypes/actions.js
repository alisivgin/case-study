const APPLY_FILTER = "APPLY_FILTER";

export function applyFilter(filterType, filter) {
  return {
    type: APPLY_FILTER,
    filterType,
    filter,
  };
}
