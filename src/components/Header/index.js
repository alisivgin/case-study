import React from "react";
import styled from "styled-components";
import { COLORS } from "../../constants";
import { logoIcon, totalPriceIcon } from "../../assets";
import { header as connect } from "../../containers";
import { useResponsive } from "../../misc/hooks";
const HEADER_HEIGHT = "3rem";

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${HEADER_HEIGHT};
  background-color: ${COLORS.headerBackground};
  @media (min-width: 320px) and (max-width: 480px),
    (min-width: 480px) and (max-width: 1024px) {
    position: fixed;
    width: 100%;
  }
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

function Item({ totalPrice, showBottomSheet }) {
  const { isMobile } = useResponsive();
  return (
    <Container onClick={() => (isMobile ? showBottomSheet("chart") : null)}>
      <Logo />
      <TotalPrice>
        <Text>₺ {totalPrice}</Text>
      </TotalPrice>
    </Container>
  );
}

export default connect(Item);
