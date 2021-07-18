import React from "react";
import styled from "styled-components";
import Basket from "./Basket";
import { useResponsive } from "../../misc/hooks";
import { COLORS } from "../../constants";

const Container = styled.section`
  grid-area: checkout;
  /* background-color: #fff; */
  /* background-color: #000; */
`;

export default function Checkout() {
  const { isMobile } = useResponsive();
  if (isMobile) {
  }
  return (
    <Container>
      <Basket />
    </Container>
  );
}
