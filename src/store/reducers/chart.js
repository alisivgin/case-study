import { ADD_TO_CHART, REMOVE_FROM_CHART } from "../actions/actionTypes";

const initState = {};

function subState(state = initState, action) {
  let s;
  switch (action.type) {
    case ADD_TO_CHART:
      s = { ...state };
      if (!s[action.product]) s[action.product] = 0;
      return {
        ...s,
        [action.product]: s[action.product] + 1,
      };
    case REMOVE_FROM_CHART:
      s = { ...state };
      if (s[action.product] && s[action.product] === 1) {
        delete s[action.product];
        return s;
      }
      return {
        ...s,
        [action.product]: s[action.product] - 1,
      };
    default:
      return state;
  }
}

export default subState;
