import { LIFECYCLE } from "../../constants";
import {
  START_GET_PRODUCTS,
  COMPLETE_GET_PRODUCTS,
  FAIL_GET_PRODUCTS,
} from "../actions/actionTypes";

const initState = {
  lifecycle: LIFECYCLE.INITIAL,
  data: {},
};

function subState(state = initState, action) {
  switch (action.type) {
    case START_GET_PRODUCTS:
      return { ...state, lifecycle: LIFECYCLE.PENDING };
    case COMPLETE_GET_PRODUCTS:
      return {
        ...state,
        lifecycle: LIFECYCLE.DONE,
        data: action.products.reduce((acc, i) => {
          return {
            ...acc,
            [i.slug]: i,
          };
        }, {}),
      };
    case FAIL_GET_PRODUCTS:
      return { ...state, lifecycle: LIFECYCLE.FAILED };
    default:
      return state;
  }
}

export default subState;
