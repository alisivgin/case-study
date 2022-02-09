import { createSelector } from "reselect";

const makeSelectBottomSheet = createSelector(
  (state) => state.bottomSheet,
  (bottomSheet) => bottomSheet
);

export { makeSelectBottomSheet };
