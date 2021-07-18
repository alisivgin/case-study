import React from "react";
import styled from "styled-components";
import ProductTypes from "../ProductTypes";
import Product from "../Product";
import FilterSort from "../FilterSort";
import { products as connect } from "../../containers";
import { useResponsive } from "../../misc/hooks";

const ProductsContainer = styled.section`
  /* width: 100%; */
`;

const Items = styled.div`
  grid-area: products;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(auto, 1fr));
  grid-template-rows: repeat(4, minmax(auto, 1fr));
  grid-gap: 0.5rem;
  background-color: #fff;
  padding: 0.6rem;
  border-radius: 2px;

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
function Products({ products }) {
  const { isMobile } = useResponsive();
  return (
    <ProductsContainer>
      <ProductsTitle>Products</ProductsTitle>
      {isMobile ? <FilterSort /> : null}
      <ProductTypes />
      <Items>
        {products.map((p) => (
          <Product {...p}></Product>
        ))}
      </Items>
    </ProductsContainer>
  );
}

export default connect(Products);
