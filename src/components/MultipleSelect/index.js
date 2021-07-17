import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { selectedIcon, selectedIconBlue } from "../../assets";

const Container = styled.div`
  width: 18.5rem;
  padding: 1rem;
`;

const ContainerBody = styled.div`
  width: auto;
  padding: 1rem;
  background-color: ${COLORS.multipleSelectBackground};
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
`;

const Options = styled.div`
  height: 8rem;
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

const Option = styled.div`
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
      type === "sort" &&
      `
      border-radius: 2rem;
      background-color: #fff;
      border: 2px solid #DFDEE2;
      box-shadow: none;
  `}
  ${({ type, selected }) =>
      type === "sort" &&
      selected &&
      `
      border: 2px solid #1EA4CE;
      background-image: url(${selectedIconBlue});
      fill: #000;
  `}
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
`;

export default function MultipleSelect({ type, title, inputPlaceHolder }) {
  return (
    <Container>
      <Title>{title}</Title>
      <ContainerBody>
        {type !== "sort" && <Input placeholder={inputPlaceHolder} />}

        <Options>
          <Option selected type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option selected type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
          <Option type={type}>
            All
            <OptionCount>(18)</OptionCount>
          </Option>
        </Options>
      </ContainerBody>
    </Container>
  );
}
