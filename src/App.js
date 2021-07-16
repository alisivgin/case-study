import "./App.css";
import styled from "styled-components";
import Item from "./components/Item";
import Header from "./components/Header";
import { COLORS } from "./constants";

export const MAIN_PADDING = "2rem";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Body = styled.div`
  display: grid;
  grid-template-areas: "filter-sort products checkout";
  grid-template-columns: 1fr 3fr 1fr;
  height: 100%;
  padding: 0 ${MAIN_PADDING} 0 ${MAIN_PADDING};
  background-color: ${COLORS.bodyBackground};
`;
const FilterSort = styled.div`
  grid-area: filter-sort;
  background-color: #000;
`;

const Products = styled.div`
  grid-area: products;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(6rem, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(12rem, 1fr));

  background-color: #fff;
`;

const Checkout = styled.div`
  grid-area: checkout;
  background-color: #000;
`;

function App() {
  return (
    <Container>
      <Header />
      <Body>
        <FilterSort />
        <Products>
          <Item></Item>
        </Products>
        <Checkout />
      </Body>
    </Container>
  );
}

export default App;
