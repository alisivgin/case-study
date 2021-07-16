import { LIFECYCLE } from "../../constants";

const initState = {
  lifecycle: LIFECYCLE.INITIAL,
  data: {},
};

function subState(state = initState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default subState;
