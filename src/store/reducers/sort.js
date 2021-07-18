import { APPLY_SORT } from "../actions/actionTypes";

const initState = "price-low-to-high";

function subState(state = initState, action) {
  switch (action.type) {
    case APPLY_SORT:
      return action.sortFor;
    default:
      return state;
  }
}

export default subState;
