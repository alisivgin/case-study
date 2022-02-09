import styled from "styled-components";
import { arrowRight, arrowLeft } from "../../assets";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  width: 100%;
  padding-left: 0;
  width: min-content;
`;

const PageNumber = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2.25rem;
  border-radius: 2px;
  color: #697488;
  cursor: pointer;
  &:hover {
    color: #1ea4ce;
  }
  ${({ active }) =>
    active &&
    `
        background-color: #1EA4CE;
        color: #fff;
  `}
`;

const Navigator = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 2.25rem;
  color: #697488;
  font-weight: 600;
  font-size: 14px;
  background-image: url(${arrowRight});
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: right;
  cursor: pointer;
  ${({ left }) =>
    left &&
    `
        background-image: url(${arrowLeft});
        background-position: left;
  `}
  ${({ disabled }) =>
    disabled &&
    `
        opacity: 0.5
  `}
`;

export { Navigator, PageNumber, List, Container };
