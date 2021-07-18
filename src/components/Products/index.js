import React from "react";
import styled from "styled-components";
import ProductTypes from "../ProductTypes";
import Product from "../Product";
import FilterSort from "../FilterSort";
import Pagination from "../Pagination";
import { products as connect } from "../../containers";
import { useResponsive } from "../../misc/hooks";
import { LIFECYCLE } from "../../constants";
import ContentLoader from "react-content-loader";

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
  height: 63rem;
  overflow: auto;

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
function Products({ products, lifecycle }) {
  const { isMobile } = useResponsive();
  // if (true) {
  if (lifecycle === LIFECYCLE.PENDING) {
    return (
      <ProductsContainer>
        <ProductsTitle>Products</ProductsTitle>
        <ProductTypeLoader />
        <Items>
          {new Array(16).fill(0).map((_) => {
            return <ProductLoader />;
          })}
        </Items>
      </ProductsContainer>
    );
  }
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
      <Pagination />
    </ProductsContainer>
  );
}

export default connect(Products);

const ProductLoader = (props) => (
  <ContentLoader
    style={{ margin: "2rem auto" }}
    speed={2}
    width={160}
    height={200}
    viewBox="0 0 160 200"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="2" rx="2" ry="2" width="160" height="130" />
    <rect x="0" y="163" rx="2" ry="2" width="160" height="40" />
    <rect x="0" y="138" rx="2" ry="2" width="160" height="15" />
  </ContentLoader>
);

const ProductTypeLoader = (props) => (
  <ContentLoader
    speed={2}
    width={160}
    height={40}
    viewBox="0 0 160 40"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="2" ry="2" width="160" height="40" />
  </ContentLoader>
);
