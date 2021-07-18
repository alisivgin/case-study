import React, { useState } from "react";
import styled from "styled-components";
import { COLORS, LIFECYCLE } from "../../constants";
import { multipleSelect as connect } from "../../containers";
import { selectedIcon, selectedIconBlue } from "../../assets";
import ContentLoader from "react-content-loader";

const Container = styled.div`
  min-width: 18.5rem;
  padding: 0.5rem;
`;

const ContainerBody = styled.div`
  width: auto;
  padding: 1rem;
  background-color: ${COLORS.multipleSelectBackground};
  border-radius: 2px;
`;

const Title = styled.h3`
  color: ${COLORS.multipleSelectTitle};
  font-size: 13px;
  font-weight: 600;
`;
const Input = styled.input`
  width: calc(100% - 1rem);
  height: 2rem;
  padding-left: 0.6rem;
  margin-bottom: 0.6rem;
  border: 2px solid #e0e0e0;
  border-radius: 2px;
`;

const Options = styled.ul`
  height: 10rem;
  padding: 0;
  margin: 0;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-track {
    background: #fff;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 20px;
    border: 3px solid #e0e0e0;
  }
`;

const Option = styled.li`
  text-overflow: ellipsis;
  margin: 0.5rem 0 0.5rem 0;
  font-size: 14px;
  cursor: pointer;

  &:before {
    content: "";
    display: inline-block;
    width: 1.2rem;
    height: 1.2rem;
    margin: 0.2rem;
    border-radius: 2px;
    box-shadow: 0px 1px 7px rgba(93, 56, 192, 0.4);
    margin-right: 1rem;
    ${({ selected }) =>
      selected &&
      `
        background-image: url(${selectedIcon});
        background-repeat: no-repeat;
        background-position: center;
        background-color: #1ea4ce;
  `}
    ${({ type }) =>
      type === "sorting" &&
      `
      border-radius: 2rem;
      background-color: #fff;
      border: 2px solid #DFDEE2;
      box-shadow: none;
  `}
      ${({ type, selected }) =>
      type === "sorting" &&
      selected &&
      `
      border: 2px solid #1EA4CE;
      background-image: url(${selectedIconBlue});
      fill: #000;
  `};
  }
  & {
    /* line-height: 1.2rem; */
    display: flex;
    align-items: center;
    color: #525252;
  }
`;

const OptionCount = styled.span`
  color: #a8a8a8;
  margin-left: 0.25rem;
`;

function MultipleSelect({
  type,
  title,
  data,
  inputPlaceHolder,
  applyFilter,
  applySort,
  lifecycle,
}) {
  const [search, setSearch] = useState("");
  if (lifecycle === LIFECYCLE.PENDING && type !== "sorting") {
    return (
      <Container>
        <Title>{title}</Title>
        <ContainerBody>
          <Loader />
        </ContainerBody>
      </Container>
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
      applyFilter(type, slug);
    }
    if (type === "sorting") {
      applySort(slug);
    }
  }

  return (
    <Container>
      <Title>{title}</Title>
      <ContainerBody>
        {type !== "sorting" && (
          <Input
            onChange={({ target }) => setSearch(target.value)}
            placeholder={inputPlaceHolder}
          />
        )}

        <Options>
          {filteredData.map((d) => {
            return (
              <Option
                selected={d.selected}
                type={type}
                key={d.slug}
                onClick={() => onClicked(d.slug, d.type)}
              >
                {d.text}
                {d.count ? <OptionCount>({d.count})</OptionCount> : null}
              </Option>
            );
          })}
        </Options>
      </ContainerBody>
    </Container>
  );
}

export default connect(MultipleSelect);

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
