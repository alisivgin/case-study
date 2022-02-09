import React from "react";
import { useResponsive } from "../../misc/hooks";
import { ONE_PAGE_ITEM_COUNT } from "../../constants";
import { useSelector, useDispatch } from "react-redux";

import * as S from "./style";
import { makeSelectPagination } from "./selectors";
import { setActivePage } from "./actions";

function Pagination({ products, leftCount = 5, rightCount = 5 }) {
  const dispatch = useDispatch();
  const { activeNumber } = useSelector(makeSelectPagination);
  const { isMobile } = useResponsive();
  const pageCount = Math.ceil(products.length / ONE_PAGE_ITEM_COUNT);
  if (isMobile) {
    leftCount = 3;
    rightCount = 3;
  }
  const numbers = [];
  let leftDot = false;
  let rightDot = false;
  let centerDot = false;
  for (let i = 2; i <= pageCount - 1; i++) {
    if (
      activeNumber >= leftCount &&
      activeNumber < pageCount - rightCount + 2
    ) {
      if (activeNumber - 2 >= i) {
        if (!leftDot) {
          numbers.push(<S.PageNumber key={i}>...</S.PageNumber>);
          leftDot = true;
        }
      } else if (
        activeNumber - 1 === i ||
        activeNumber === i ||
        activeNumber + 1 === i
      ) {
        numbers.push(
          <S.PageNumber
            key={i}
            onClick={() => dispatch(setActivePage(i))}
            active={activeNumber === i}
          >
            {i}
          </S.PageNumber>
        );
      } else {
        if (!rightDot) {
          numbers.push(<S.PageNumber key={i}>...</S.PageNumber>);
          rightDot = true;
        }
      }
    } else if (activeNumber < leftCount) {
      if (i < leftCount + 1) {
        numbers.push(
          <S.PageNumber
            key={i}
            onClick={() => dispatch(setActivePage(i))}
            active={activeNumber === i}
          >
            {i}
          </S.PageNumber>
        );
      } else {
        if (!centerDot) {
          numbers.push(<S.PageNumber key={i}>...</S.PageNumber>);
          centerDot = true;
        }
      }
    } else if (activeNumber > pageCount - rightCount) {
      if (i > pageCount - rightCount) {
        numbers.push(
          <S.PageNumber
            key={i}
            onClick={() => dispatch(setActivePage(i))}
            active={activeNumber === i}
          >
            {i}
          </S.PageNumber>
        );
      } else {
        if (!centerDot) {
          numbers.push(<S.PageNumber key={i}>...</S.PageNumber>);
          centerDot = true;
        }
      }
    }
  }
  const leftDisabled = activeNumber === 1;
  const rightDisabled = activeNumber === pageCount;
  return (
    <S.Container>
      <S.List>
        <S.Navigator
          left
          disabled={leftDisabled}
          onClick={() =>
            leftDisabled ? null : dispatch(setActivePage(activeNumber - 1))
          }
        >
          Prev
        </S.Navigator>
        <S.PageNumber
          key={1}
          onClick={() => dispatch(setActivePage(1))}
          active={activeNumber === 1}
        >
          1
        </S.PageNumber>
        {numbers}
        {pageCount !== 1 ? (
          <S.PageNumber
            key={pageCount}
            onClick={() => dispatch(setActivePage(pageCount))}
            active={activeNumber === pageCount}
          >
            {pageCount}
          </S.PageNumber>
        ) : null}
        <S.Navigator
          disabled={rightDisabled}
          onClick={() =>
            rightDisabled ? null : dispatch(setActivePage(activeNumber + 1))
          }
        >
          Next
        </S.Navigator>
      </S.List>
    </S.Container>
  );
}

export default Pagination;
