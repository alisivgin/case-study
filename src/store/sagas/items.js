import { put, call } from "redux-saga/effects";
import axios from "axios";
import {
  START_GET_ITEMS,
  COMPLETE_GET_ITEMS,
  FAIL_GET_ITEMS,
} from "../actions/actionTypes";

export function* getItems() {
  yield put({ type: START_GET_ITEMS });
  try {
    const { data: items } = yield call(axios.get, "/items");
    yield put({ type: COMPLETE_GET_ITEMS, items });
  } catch (error) {
    yield put({ type: FAIL_GET_ITEMS });
  }
}
