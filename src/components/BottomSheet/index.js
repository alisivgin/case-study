import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BottomSheet as Sheet } from "react-spring-bottom-sheet";
import MultipleSelect from "../MultipleSelect";
import Chart from "../Chart";
import Button from "../Button";
import { useOnClickOutside } from "../../misc/hooks";

import { closeBottomSheet } from "../../store/actions";
import { makeSelectBottomSheet } from "./selectors";

import * as S from "./style";

function BottomSheet() {
  const dispatch = useDispatch();
  const { show, content } = useSelector(makeSelectBottomSheet);
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
  child.push(
    <Button
      key="button"
      onClicked={() => dispatch(closeBottomSheet)}
      text="Close"
    />
  );
  return (
    <Sheet open={show}>
      <S.Container ref={ref}>{child}</S.Container>
    </Sheet>
  );
}

export default BottomSheet;
