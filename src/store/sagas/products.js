import { put, call } from "redux-saga/effects";
import axios from "axios";
import {
  START_GET_PRODUCTS,
  COMPLETE_GET_PRODUCTS,
  FAIL_GET_PRODUCTS,
} from "../actions/actionTypes";

export function* getProducts() {
  yield put({ type: START_GET_PRODUCTS });
  try {
    const { data: products } = yield call(axios.get, "/items");
    yield put({ type: COMPLETE_GET_PRODUCTS, products });
  } catch (error) {
    console.log(error);
    yield put({ type: FAIL_GET_PRODUCTS });
  }
}
