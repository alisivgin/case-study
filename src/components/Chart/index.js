import React from "react";
import styled from "styled-components";
import Basket from "./Basket";

const Container = styled.section`
  grid-area: checkout;
  /* background-color: #fff; */
  /* background-color: #000; */
`;

export default function Chart() {
  return (
    <Container>
      <Basket />
    </Container>
  );
}
