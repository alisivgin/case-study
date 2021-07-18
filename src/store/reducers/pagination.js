import { COMPLETE_GET_PRODUCTS, SET_ACTIVE_PAGE } from "../actions/actionTypes";
import { ONE_PAGE_ITEM_COUNT } from "../../constants";

const initState = { activeNumber: 1, pageCount: 0 };

function subState(state = initState, action) {
  switch (action.type) {
    case COMPLETE_GET_PRODUCTS:
      return {
        ...state,
        pageCount: Math.ceil(action.products.length / ONE_PAGE_ITEM_COUNT),
      };
    case SET_ACTIVE_PAGE:
      return {
        ...state,
        activeNumber: action.number,
      };
    default:
      return state;
  }
}

export default subState;
