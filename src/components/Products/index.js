import React from "react";
import ProductTypes from "../ProductTypes";
import Product from "../Product";
import FilterSort from "../FilterSort";
import Pagination from "../Pagination";
import { useResponsive } from "../../misc/hooks";
import { LIFECYCLE } from "../../constants";
import ContentLoader from "react-content-loader";
import { useSelector } from "react-redux";

import {
  makeSelectProducts,
  makeSelectProductsLifecycle,
  makeSelectPaginatedProducts,
} from "./selectors";

import * as S from "./style";

function Products() {
  const { isMobile } = useResponsive();
  const products = useSelector(makeSelectProducts);
  const lifecycle = useSelector(makeSelectProductsLifecycle);
  const paginatedProducts = useSelector(makeSelectPaginatedProducts);

  if (lifecycle === LIFECYCLE.PENDING) {
    return (
      <S.ProductsContainer>
        <S.ProductsTitle>Products</S.ProductsTitle>
        <ProductTypeLoader />
        <S.Items>
          {new Array(16).fill(0).map((_, index) => {
            return <ProductLoader key={index} />;
          })}
        </S.Items>
      </S.ProductsContainer>
    );
  }
  return (
    <S.ProductsContainer>
      <S.ProductsTitle>Products</S.ProductsTitle>
      {isMobile ? <FilterSort /> : null}
      <ProductTypes />
      <S.Items>
        {paginatedProducts.map((p) => (
          <Product key={p.slug} {...p}></Product>
        ))}
      </S.Items>
      <Pagination products={products} />
    </S.ProductsContainer>
  );
}

export default Products;

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
