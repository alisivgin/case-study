import React, { useState } from "react";
import { LIFECYCLE } from "../../constants";
import { useSelector, useDispatch } from "react-redux";

import ContentLoader from "react-content-loader";
import { applyFilter, applySort } from "../../store/actions";
import { makeSelectData, makeSelectTitle } from "./selectors";
import * as S from "./style";

import { makeSelectProductsLifecycle } from "../Products/selectors";

function MultipleSelect({ type, inputPlaceHolder }) {
  const dispatch = useDispatch();
  const dataSelector = makeSelectData(type);
  const data = useSelector(dataSelector);
  const title = useSelector((state) => makeSelectTitle(state, type));
  const [search, setSearch] = useState("");
  const lifecycle = useSelector(makeSelectProductsLifecycle);

  if (lifecycle === LIFECYCLE.PENDING && type !== "sorting") {
    return (
      <S.Container>
        <S.Title>{title}</S.Title>
        <S.ContainerBody>
          <Loader />
        </S.ContainerBody>
      </S.Container>
    );
  }
  let filteredData = [];
  if (search > "") {
    filteredData = data.filter((d) =>
      d.text.toLowerCase().includes(search.toLowerCase())
    );
  } else {
    filteredData = data;
  }

  function onClicked(slug, type) {
    if (type === "brands" || type === "tags") {
      dispatch(applyFilter(type, slug));
    }
    if (type === "sorting") {
      dispatch(applySort(slug));
    }
  }

  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.ContainerBody>
        {type !== "sorting" && (
          <S.Input
            onChange={({ target }) => setSearch(target.value)}
            placeholder={inputPlaceHolder}
          />
        )}

        <S.Options>
          {filteredData.map((d) => {
            return (
              <S.Option
                selected={d.selected}
                type={type}
                key={d.slug}
                onClick={() => onClicked(d.slug, d.type)}
              >
                {d.text}
                {d.count ? <S.OptionCount>({d.count})</S.OptionCount> : null}
              </S.Option>
            );
          })}
        </S.Options>
      </S.ContainerBody>
    </S.Container>
  );
}

export default MultipleSelect;

const Loader = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={210}
    viewBox="0 0 300 210"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="19" y="20" rx="2" ry="2" width="300" height="40" />
    <rect x="20" y="70" rx="2" ry="2" width="300" height="15" />
    <rect x="19" y="95" rx="2" ry="2" width="300" height="15" />
    <rect x="22" y="120" rx="2" ry="2" width="300" height="15" />
    <rect x="21" y="145" rx="2" ry="2" width="300" height="15" />
    <rect x="21" y="170" rx="2" ry="2" width="300" height="15" />
    <rect x="21" y="195" rx="2" ry="2" width="300" height="15" />
  </ContentLoader>
);
