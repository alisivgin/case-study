import "./App.css";
import styled from "styled-components";
import Item from "./components/Item";
import MultipleSelect from "./components/MultipleSelect";
import Header from "./components/Header";
import Basket from "./components/Basket";
import ItemTypes from "./components/ItemTypes";
import { COLORS } from "./constants";

export const MAIN_PADDING = "2rem";

const Container = styled.div`
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
`;
const FilterSort = styled.div`
  grid-area: filter-sort;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
  /* background-color: #000; */
`;

const ProductsContainer = styled.div``;

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
`;
const ProductsTitle = styled.h4`
  color: #6f6f6f;
  font-weight: 300;
  font-size: 1.25em;
`;

const Checkout = styled.div`
  grid-area: checkout;
  /* background-color: #fff; */
  /* background-color: #000; */
`;

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <FilterSort>
          <MultipleSelect type="sort" title="Sorting" />
          <MultipleSelect title="Brands" inputPlaceHolder="Select Brand" />
          <MultipleSelect title="Tags" inputPlaceHolder="Select Tag" />
        </FilterSort>
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
