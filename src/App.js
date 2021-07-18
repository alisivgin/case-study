import React from "react";
import "./App.css";
import "react-spring-bottom-sheet/dist/style.css";
import styled from "styled-components";
import { BottomSheet } from "react-spring-bottom-sheet";
import Item from "./components/Item";
import FilterSort from "./components/FilterSort";
import Header from "./components/Header";
import Checkout from "./components/Checkout";
import ItemTypes from "./components/ItemTypes";
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

const ProductsContainer = styled.section`
  /* width: 100%; */
`;

const Products = styled.div`
  grid-area: products;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-rows: repeat(4, minmax(auto, 1fr));
  grid-gap: 0.5rem;
  background-color: #fff;
  padding: 0.6rem;

  @media (min-width: 320px) and (max-width: 480px) {
    /* Styles */
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-template-rows: repeat(8, minmax(auto, 1fr));
  }

  /* @media (min-width: 480px) and (max-width: 1024px) {
    grid-template-columns: repeat(4, minmax(auto, 1fr));
    grid-template-rows: repeat(4, minmax(auto, 1fr));
  } */
`;
const ProductsTitle = styled.h4`
  color: #6f6f6f;
  font-weight: 300;
  font-size: 1.25em;
`;

function App() {
  const { isMobile } = useResponsive();
  return (
    <Container>
      <Header />
      <Body>
        {isMobile ? (
          <ProductsContainer>
            <ProductsTitle>Products</ProductsTitle>
            <FilterSort />
            <ItemTypes />
            <Products>
              {new Array(16).fill(0).map((_) => (
                <Item></Item>
              ))}
            </Products>
          </ProductsContainer>
        ) : (
          <>
            <FilterSort />
            <ProductsContainer>
              <ProductsTitle>Products</ProductsTitle>
              <ItemTypes />
              <Products>
                {new Array(16).fill(0).map((_) => (
                  <Item></Item>
                ))}
              </Products>
            </ProductsContainer>
          </>
        )}
        {!isMobile ? <Checkout /> : null}
      </Body>
      {isMobile ? (
        <BottomSheet open={false}>
          {/* <MultipleSelect title="Tags" inputPlaceHolder="Select Tag" /> */}
          <p>sadfkaksdjnfşasdjf</p>
        </BottomSheet>
      ) : null}
    </Container>
  );
}

export default App;
