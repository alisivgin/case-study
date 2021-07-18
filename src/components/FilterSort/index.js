import React from "react";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";
import { useResponsive } from "../../misc/hooks";

import MultipleSelect from "../MultipleSelect";

const Container = styled.div`
  grid-area: filter-sort;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`;

const ContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2rem;
  border-radius: 2px;
  background-color: #f2f0fd;
  div.item {
    width: 100%;
    height: 2rem;
    /* background-color: #f2f0fd; */
    color: #1ea4ce;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export default function FilterSort() {
  const { isMobile } = useResponsive();

  function FilterSortMobile() {
    return (
      <ContainerMobile>
        <div className="item">Sorting</div>
        <div className="item">Brands</div>
        <div className="item">Tags</div>
      </ContainerMobile>
    );
  }

  if (isMobile) {
    return (
      <>
        <FilterSortMobile />
        {/* <BottomSheet open={false}>
          <MultipleSelect title="Tags" inputPlaceHolder="Select Tag" />
        </BottomSheet> */}
      </>
    );
  }
  return (
    <Container>
      <MultipleSelect type="sort" title="Sorting" />
      <MultipleSelect title="Brands" inputPlaceHolder="Select Brand" />
      <MultipleSelect title="Tags" inputPlaceHolder="Select Tag" />
    </Container>
  );
}
