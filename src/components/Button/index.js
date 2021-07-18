import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";

const Btn = styled.button`
  background-color: ${COLORS.buttonColor};
  color: ${COLORS.textColor};
  border: 0;
  border-radius: 2px;
  width: 100%;
  height: 22px;
  cursor: pointer;
`;

export default function Button({ onClicked }) {
  return <Btn onClick={onClicked}>Add</Btn>;
}
