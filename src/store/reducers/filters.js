import { APPLY_FILTER } from "../actions/actionTypes";

const initState = {
  brands: [],
  tags: [],
  productType: "mug",
};

function subState(state = initState, action) {
  switch (action.type) {
    case APPLY_FILTER:
      if (action.filterType === "brands") {
        return {
          ...state,
          [action.filterType]: state.brands.includes(action.filter)
            ? state.brands.filter((b) => b !== action.filter)
            : [...state.brands, action.filter],
        };
      } else if (action.filterType === "tags") {
        return {
          ...state,
          [action.filterType]: state.tags.includes(action.filter)
            ? state.tags.filter((t) => t !== action.filter)
            : [...state.tags, action.filter],
        };
      } else if (action.filterType === "productType") {
        return {
          ...state,
          [action.filterType]: action.filter,
        };
      }
      return state;
    default:
      return state;
  }
}

export default subState;
