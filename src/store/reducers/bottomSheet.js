import { SHOW_BOTTOM_SHEET, CLOSE_BOTTOM_SHEET } from "../actions/actionTypes";

const initState = {
  show: false,
  content: "",
};

function subState(state = initState, action) {
  switch (action.type) {
    case SHOW_BOTTOM_SHEET:
      return { ...state, show: true, content: action.content };
    case CLOSE_BOTTOM_SHEET:
      return { ...state, show: false };
    default:
      return state;
  }
}

export default subState;
