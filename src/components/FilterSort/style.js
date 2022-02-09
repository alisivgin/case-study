import styled from "styled-components";

const Container = styled.div`
  grid-area: filter-sort;
  display: flex;
  flex-direction: column;
  grid-gap: 2rem;
`;

const ContainerMobile = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 2rem;
  border-radius: 2px;
  background-color: #f2f0fd;
  span.item {
    width: 100%;
    height: 2rem;
    color: #1ea4ce;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
  }
`;

export { Container, ContainerMobile };
