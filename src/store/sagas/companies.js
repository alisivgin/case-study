import { put, call } from "redux-saga/effects";
import axios from "axios";
import {
  START_GET_COMPANIES,
  COMPLETE_GET_COMPANIES,
  FAIL_GET_COMPANIES,
} from "../actions/actionTypes";

export function* getCompanies() {
  yield put({ type: START_GET_COMPANIES });
  try {
    const { data: companies } = yield call(axios.get, "/companies");
    yield put({ type: COMPLETE_GET_COMPANIES, companies });
  } catch (error) {
    yield put({ type: FAIL_GET_COMPANIES });
  }
}
