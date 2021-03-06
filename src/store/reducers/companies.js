import { LIFECYCLE } from "../../constants";
import {
  START_GET_COMPANIES,
  COMPLETE_GET_COMPANIES,
  FAIL_GET_COMPANIES,
} from "../actions/actionTypes";

const initState = {
  lifecycle: LIFECYCLE.INITIAL,
  data: {},
};

function subState(state = initState, action) {
  switch (action.type) {
    case START_GET_COMPANIES:
      return { ...state, lifecycle: LIFECYCLE.PENDING };
    case COMPLETE_GET_COMPANIES:
      return {
        ...state,
        lifecycle: LIFECYCLE.DONE,
        data: action.companies.reduce((acc, c) => {
          return {
            ...acc,
            [c.slug]: c,
          };
        }, {}),
      };
    case FAIL_GET_COMPANIES:
      return { ...state, lifecycle: LIFECYCLE.FAILED };
    default:
      return state;
  }
}

export default subState;
