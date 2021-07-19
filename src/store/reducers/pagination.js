import {
  SET_ACTIVE_PAGE,
  APPLY_FILTER,
  APPLY_SORT,
} from "../actions/actionTypes";

const initState = { activeNumber: 1 };

function subState(state = initState, action) {
  switch (action.type) {
    case SET_ACTIVE_PAGE:
      return {
        activeNumber: action.number,
      };
    case APPLY_SORT:
    case APPLY_FILTER:
      return { activeNumber: 1 };
    default:
      return state;
  }
}

export default subState;
