import styled from "styled-components";

const ProductsContainer = styled.section``;

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
    grid-template-columns: repeat(2, minmax(auto, 1fr));
    grid-template-rows: repeat(8, minmax(auto, 1fr));
  }
`;
const ProductsTitle = styled.h4`
  color: #6f6f6f;
  font-weight: 300;
  font-size: 1.25em;
`;

export { ProductsContainer, Items, ProductsTitle };
