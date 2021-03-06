import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  margin: 1rem 0 1rem 0;
`;

const Type = styled.div`
  width: 6rem;
  height: 2rem;
  background-color: #f2f0fd;
  color: #1ea4ce;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 14px;
  ${({ active }) =>
    active &&
    `
    background-color: #1EA4CE;
    color: #F2F0FD;
  `}
`;

export { Container, Type };
