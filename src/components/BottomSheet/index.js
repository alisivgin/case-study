import React, { useRef } from "react";
import styled from "styled-components";
import { BottomSheet as Sheet } from "react-spring-bottom-sheet";
import { bottomSheet as connect } from "../../containers";
import MultipleSelect from "../MultipleSelect";
import Chart from "../Chart";
import Button from "../Button";
import { useOnClickOutside } from "../../misc/hooks";

const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-bottom: 1rem;
`;

function BottomSheet({ show, content, closeBottomSheet }) {
  const ref = useRef();
  useOnClickOutside(ref, closeBottomSheet);
  const child = [];
  // eslint-disable-next-line default-case
  switch (content) {
    case "tags":
    case "brands":
    case "sorting":
      child.push(<MultipleSelect key={content} type={content} />);
      break;
    case "chart":
      child.push(<Chart key={content} />);
      break;
  }
  child.push(<Button key="button" onClicked={closeBottomSheet} text="Close" />);
  return (
    <Sheet open={show}>
      <Container ref={ref}>{child}</Container>
    </Sheet>
  );
}

export default connect(BottomSheet);
