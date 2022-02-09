const SET_ACTIVE_PAGE = "SET_ACTIVE_PAGE";

export function setActivePage(number) {
  return {
    type: SET_ACTIVE_PAGE,
    number,
  };
}
