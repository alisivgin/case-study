import "./App.css";
import styled from "styled-components";
import Item from "./components/Item";
import MultipleSelect from "./components/MultipleSelect";
import Header from "./components/Header";
import Basket from "./components/Basket";
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

  @media (min-width: 320px) and (max-width: 480px) {
    /* Styles */
    grid-template-areas: "filter-sort" "products" "checkout";
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr 1fr;
  }
`;
const FilterSort = styled.section`
  grid-area: filter-sort;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  /* background-color: #000; */
  @media (min-width: 320px) and (max-width: 480px) {
    /* Styles */
    display: none;
  }
`;

const ProductsContainer = styled.section``;

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
`;
const ProductsTitle = styled.h4`
  color: #6f6f6f;
  font-weight: 300;
  font-size: 1.25em;
`;

const Checkout = styled.section`
  grid-area: checkout;
  /* background-color: #fff; */
  /* background-color: #000; */
`;

function App() {
  const { isMobile } = useResponsive();
  return (
    <Container>
      <Header />
      <Body>
        {!isMobile ? (
          <FilterSort>
            <MultipleSelect type="sort" title="Sorting" />
            <MultipleSelect title="Brands" inputPlaceHolder="Select Brand" />
            <MultipleSelect title="Tags" inputPlaceHolder="Select Tag" />
          </FilterSort>
        ) : null}

        <ProductsContainer>
          <ProductsTitle>Products</ProductsTitle>
          <ItemTypes />
          <Products>
            {new Array(16).fill(0).map((_) => (
              <Item></Item>
            ))}
          </Products>
        </ProductsContainer>
        <Checkout>
          <Basket />
        </Checkout>
      </Body>
    </Container>
  );
}

export default App;
