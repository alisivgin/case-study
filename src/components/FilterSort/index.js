import React from "react";
import styled from "styled-components";
import { useResponsive } from "../../misc/hooks";
import { filterSort as connect } from "../../containers";

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
  span.item {
    width: 100%;
    height: 2rem;
    /* background-color: #f2f0fd; */
    color: #1ea4ce;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

function FilterSort({ showBottomSheet, brandFilterCount, tagFilterCount }) {
  const { isMobile } = useResponsive();
  let brandsText = "Brands";
  if (brandFilterCount > 0) brandsText += ` (${brandFilterCount})`;
  let TagsText = "Tags";
  if (tagFilterCount > 0) TagsText += ` (${tagFilterCount})`;
  function FilterSortMobile() {
    return (
      <ContainerMobile>
        <span onClick={() => showBottomSheet("sorting")} className="item">
          Sorting
        </span>
        <span onClick={() => showBottomSheet("brands")} className="item">
          {brandsText}
        </span>
        <span onClick={() => showBottomSheet("tags")} className="item">
          {TagsText}
        </span>
      </ContainerMobile>
    );
  }

  if (isMobile) {
    return <FilterSortMobile />;
  }
  return (
    <Container>
      <MultipleSelect type="sorting" />
      <MultipleSelect type="brands" />
      <MultipleSelect type="tags" />
    </Container>
  );
}

export default connect(FilterSort);
