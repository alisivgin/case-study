import { spawn } from "redux-saga/effects";
import { getCompanies, getItems } from ".";

export function* startup() {
  yield spawn(getCompanies);
  yield spawn(getItems);
}
