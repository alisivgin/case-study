import { spawn } from "redux-saga/effects";
import { getCompanies, getProducts } from ".";

export function* startup() {
  yield spawn(getCompanies);
  yield spawn(getProducts);
}
