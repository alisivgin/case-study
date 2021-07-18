import { COMPLETE_GET_ITEMS } from "../actions/actionTypes";

const initState = {};

function subState(state = initState, action) {
  switch (action.type) {
    case COMPLETE_GET_ITEMS:
      return action.items.reduce((acc, i) => {
        const tags = i.tags.reduce((ts, t) => {
          if (!ts[t]) ts[t] = 0;
          return {
            ...ts,
            [t]: acc[t] > 0 ? acc[t] + 1 : ts[t] + 1,
          };
        }, acc);
        return tags;
      }, state);
    default:
      return state;
  }
}

export default subState;
