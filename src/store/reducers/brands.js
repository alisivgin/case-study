import { COMPLETE_GET_ITEMS } from "../actions/actionTypes";

const initState = {};

function subState(state = initState, action) {
  switch (action.type) {
    case COMPLETE_GET_ITEMS:
      return action.items.reduce((acc, i) => {
        if (!acc[i.manufacturer]) acc[i.manufacturer] = 0;
        return {
          ...acc,
          [i.manufacturer]: acc[i.manufacturer] + 1,
        };
      }, state);
    default:
      return state;
  }
}

export default subState;