import React from "react";
import { useResponsive } from "../../misc/hooks";
import { useSelector, useDispatch } from "react-redux";

import MultipleSelect from "../MultipleSelect";

import { makeSelectFilters } from "./selectors";

import { showBottomSheet } from "../../store/actions";

import * as S from "./style";

function FilterSort() {
  const { isMobile } = useResponsive();
  const dispatch = useDispatch();
  const { brands, tags } = useSelector(makeSelectFilters);
  const brandFilterCount = brands.length;
  const tagFilterCount = tags.length;
  let brandsText = "Brands";
  if (brandFilterCount > 0) brandsText += ` (${brandFilterCount})`;
  let TagsText = "Tags";
  if (tagFilterCount > 0) TagsText += ` (${tagFilterCount})`;
  function FilterSortMobile() {
    return (
      <S.ContainerMobile>
        <span
          onClick={() => dispatch(showBottomSheet("sorting"))}
          className="item"
        >
          Sorting
        </span>
        <span
          onClick={() => dispatch(showBottomSheet("brands"))}
          className="item"
        >
          {brandsText}
        </span>
        <span
          onClick={() => dispatch(showBottomSheet("tags"))}
          className="item"
        >
          {TagsText}
        </span>
      </S.ContainerMobile>
    );
  }

  if (isMobile) {
    return <FilterSortMobile />;
  }
  return (
    <S.Container>
      <MultipleSelect type="sorting" />
      <MultipleSelect type="brands" inputPlaceHolder="Search Brand" />
      <MultipleSelect type="tags" inputPlaceHolder="Search Tag" />
    </S.Container>
  );
}

export default FilterSort;
