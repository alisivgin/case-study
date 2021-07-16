import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { logoIcon, totalPriceIcon } from "../../assets";
// import { MAIN_PADDING } from "../../App";
// console.log(MAIN_PADDING);
const HEADER_HEIGHT = "3rem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  background-color: ${COLORS.headerBackground};
`;

const Logo = styled.div`
  width: 10rem;
  height: 2rem;
  background-image: url(${logoIcon});
  background-size: contain;
  background-repeat: no-repeat;
  align-self: center;
  justify-self: center;
`;

const TotalPrice = styled.div`
  position: absolute;
  right: 2rem;
  display: flex;
  width: 7rem;
  height: ${HEADER_HEIGHT};
  background-image: url(${totalPriceIcon});
  background-size: 1rem;
  background-position: 20%;
  background-repeat: no-repeat;
  background-color: ${COLORS.totalPriceBackground};
  align-items: center;
  justify-content: center;
  color: ${COLORS.textColor};
  font-size: 0.8em;
`;

const Text = styled.span`
  margin-left: 2rem;
`;

export default function Item() {
  return (
    <Container>
      <Logo />
      <TotalPrice>
        <Text>39,65</Text>
      </TotalPrice>
    </Container>
  );
}
