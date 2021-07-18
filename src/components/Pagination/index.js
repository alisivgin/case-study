import React from "react";
import styled from "styled-components";
import { arrowRight, arrowLeft } from "../../assets";
import { pagination as connect } from "../../containers";
import { useResponsive } from "../../misc/hooks";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 0;
  width: min-content;
`;

const PageNumber = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.25rem;
  border-radius: 2px;
  color: #697488;
  cursor: pointer;
  &:hover {
    color: #1ea4ce;
  }
  ${({ active }) =>
    active &&
    `
        background-color: #1EA4CE;
        color: #fff;
  `}
`;

const Navigator = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2.25rem;
  color: #697488;
  font-weight: 600;
  font-size: 14px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: right;
  cursor: pointer;
  ${({ left }) =>
    left &&
    `
        background-image: url(${arrowLeft});
        background-position: left;
  `}
`;

function Pagination({
  pageCount,
  activeNumber,
  leftCount = 5,
  rightCount = 5,
  setActivePage,
}) {
  const { isMobile } = useResponsive();
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
          numbers.push(<PageNumber>...</PageNumber>);
          leftDot = true;
        }
      } else if (
        activeNumber - 1 === i ||
        activeNumber === i ||
        activeNumber + 1 === i
      ) {
        numbers.push(
          <PageNumber
            onClick={() => setActivePage(i)}
            active={activeNumber === i}
          >
            {i}
          </PageNumber>
        );
      } else {
        if (!rightDot) {
          numbers.push(<PageNumber>...</PageNumber>);
          rightDot = true;
        }
      }
    } else if (activeNumber < leftCount) {
      if (i < leftCount + 1) {
        numbers.push(
          <PageNumber
            onClick={() => setActivePage(i)}
            active={activeNumber === i}
          >
            {i}
          </PageNumber>
        );
      } else {
        if (!centerDot) {
          numbers.push(<PageNumber>...</PageNumber>);
          centerDot = true;
        }
      }
    } else if (activeNumber > pageCount - rightCount) {
      if (i > pageCount - rightCount) {
        numbers.push(
          <PageNumber
            onClick={() => setActivePage(i)}
            active={activeNumber === i}
          >
            {i}
          </PageNumber>
        );
      } else {
        if (!centerDot) {
          numbers.push(<PageNumber>...</PageNumber>);
          centerDot = true;
        }
      }
    }
  }
  return (
    <Container>
      <List>
        <Navigator left>Prev</Navigator>
        <PageNumber
          onClick={() => setActivePage(1)}
          active={activeNumber === 1}
        >
          1
        </PageNumber>
        {numbers}
        <PageNumber
          onClick={() => setActivePage(pageCount)}
          active={activeNumber === pageCount}
        >
          {pageCount}
        </PageNumber>
        <Navigator>Next</Navigator>
      </List>
    </Container>
  );
}

export default connect(Pagination);
