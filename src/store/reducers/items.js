import { LIFECYCLE } from "../../constants";
import {
  START_GET_ITEMS,
  COMPLETE_GET_ITEMS,
  FAIL_GET_ITEMS,
} from "../actions/actionTypes";

const initState = {
  lifecycle: LIFECYCLE.INITIAL,
  data: {},
};

function subState(state = initState, action) {
  switch (action.type) {
    case START_GET_ITEMS:
      return { ...state, lifecycle: LIFECYCLE.PENDING };
    case COMPLETE_GET_ITEMS:
      return {
        ...state,
        lifecycle: LIFECYCLE.DONE,
        data: action.items.reduce((acc, i) => {
          return {
            ...acc,
            [i.slug]: i,
          };
        }, {}),
      };
    case FAIL_GET_ITEMS:
      return { ...state, lifecycle: LIFECYCLE.FAILED };
    default:
      return state;
  }
}

export default subState;
