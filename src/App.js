import React from "react";
import "./App.css";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";
import BottomSheet from "./components/BottomSheet";
import FilterSort from "./components/FilterSort";
import Header from "./components/Header";
import Chart from "./components/Chart";
import Products from "./components/Products";
import { COLORS } from "./constants";
import { useResponsive } from "./misc/hooks";

export const MAIN_PADDING = "2rem";

const Container = styled.main`
  width: 100vw;
  height: auto;
`;

const Body = styled.div`
  display: grid;
  grid-template-areas: "filter-sort products checkout";
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 0.5rem;
  height: 100%;
  padding: 0 ${MAIN_PADDING} 0 ${MAIN_PADDING};
  background-color: ${COLORS.bodyBackground};

  @media (min-width: 320px) and (max-width: 480px),
    (min-width: 480px) and (max-width: 1024px) {
    /* Styles */
    grid-template-areas: "products";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const Footer = styled.footer`
  width: 100%;
  height: 8rem;
  background-color: #e5e5e5;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 0.8rem;

  a {
    color: #1ea4ce;
    text-decoration: none;
  }
`;

function App() {
  const { isMobile } = useResponsive();
  return (
    <Container>
      <Header />
      <Body>
        {isMobile ? (
          <Products />
        ) : (
          <>
            <FilterSort />
            <Products />
          </>
        )}
        {!isMobile ? <Chart /> : null}
      </Body>
      <Footer>
        <a href="/#">©2021 Market</a> &middot;
        <a href="/#">Privacy Policy</a>
      </Footer>
      {isMobile ? <BottomSheet /> : null}
    </Container>
  );
}

export default App;
